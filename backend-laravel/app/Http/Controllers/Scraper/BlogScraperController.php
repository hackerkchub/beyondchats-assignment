<?php

namespace App\Http\Controllers\Scraper;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use App\Models\Article;
use Symfony\Component\DomCrawler\Crawler;

class BlogScraperController extends Controller
{
    public function scrape()
    {
        $url = "https://beyondchats.com/blogs/";

        // Fetch blogs page (SSL disabled for local)
        $html = Http::withOptions([
            'verify' => false
        ])->get($url)->body();

        $crawler = new Crawler($html);

        // 👉 Get all blog links
        $links = $crawler
            ->filter('.entry-card h2.entry-title a')
            ->each(function (Crawler $node) {
                return [
                    'title' => trim($node->text()),
                    'link'  => $node->attr('href'),
                ];
            });

        // 👉 Take last 5 (oldest)
        $oldestFive = array_slice($links, -5);

        foreach ($oldestFive as $item) {

            // Avoid duplicate insert
            if (Article::where('source_url', $item['link'])->exists()) {
                continue;
            }

            // Fetch article detail page
            $articleHtml = Http::withOptions([
                'verify' => false
            ])->get($item['link'])->body();

            $articleCrawler = new Crawler($articleHtml);

            // 👉 Extract main article content
            $content = '';

            if ($articleCrawler->filter('.entry-content')->count()) {
                $content = trim(
                    $articleCrawler->filter('.entry-content')->text()
                );
            }

            Article::create([
                'title'      => $item['title'],
                'content'    => $content ?: 'Content not found',
                'source_url' => $item['link'],
                'version'    => 'original'
            ]);
        }

        return response()->json([
            'message' => 'BeyondChats scraping completed successfully'
        ]);
    }
}

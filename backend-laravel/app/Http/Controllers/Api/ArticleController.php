<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;

class ArticleController extends Controller
{
    // GET /api/articles
    public function index()
    {
        return response()->json(Article::latest()->get());
    }

    // POST /api/articles
    public function store(Request $request)
    {
        $article = Article::create([
            'title' => $request->title,
            'content' => $request->content,
            'source_url' => $request->source_url,
            'version' => $request->version ?? 'original'
        ]);

        return response()->json($article, 201);
    }

    // GET /api/articles/{id}
    public function show($id)
    {
        return Article::findOrFail($id);
    }

    // PUT /api/articles/{id}
    public function update(Request $request, $id)
    {
        $article = Article::findOrFail($id);
        $article->update($request->all());
        return response()->json($article);
    }

    // DELETE /api/articles/{id}
    public function destroy($id)
    {
        Article::destroy($id);
        return response()->json(['message' => 'Deleted']);
    }
}

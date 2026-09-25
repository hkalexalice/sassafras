// netlify/functions/manage_blob_books.js
// Manages cloud books inside Netlify Blobs (Store: 'zoey_library')

const { getStore } = require("@netlify/blobs");

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Content-Type": "application/json"
};

exports.handler = async function (event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: CORS_HEADERS, body: "" };
  }

  const store = getStore("zoey_library");
  const expectedKey = (process.env.addspellingkey || "").trim();

  // GET: Public list of cloud-stored books
  if (event.httpMethod === "GET") {
    try {
      const manifest = await store.get("manifest/books.json", { type: "json" });
      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({ books: manifest || [] })
      };
    } catch (err) {
      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({ books: [] })
      };
    }
  }

  // POST: Admin Actions (Upload Book / Delete Book) - Requires password verification
  if (event.httpMethod === "POST") {
    if (!expectedKey) {
      return {
        statusCode: 500,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: "Netlify environment variable 'addspellingkey' is missing." })
      };
    }

    let payload = {};
    try {
      payload = JSON.parse(event.body || "{}");
    } catch (e) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: "Invalid JSON body." })
      };
    }

    const { action, password, bookMeta, bundle, bookId } = payload;

    // Verify Password
    if ((password || "").trim() !== expectedKey) {
      return {
        statusCode: 401,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: "密碼驗證失敗，無法執行管理操作。" })
      };
    }

    // ACTION: UPLOAD BOOK BUNDLE
    if (action === "upload_book") {
      if (!bookMeta || !bookMeta.id || !bundle) {
        return {
          statusCode: 400,
          headers: CORS_HEADERS,
          body: JSON.stringify({ error: "Missing bookMeta or bundle data." })
        };
      }

      try {
        const bookKey = `books/${bookMeta.id}/bundle.json`;
        await store.setJSON(bookKey, bundle);

        // Update books manifest
        let manifest = (await store.get("manifest/books.json", { type: "json" })) || [];
        manifest = manifest.filter(b => String(b.id) !== String(bookMeta.id));
        manifest.push({
          id: String(bookMeta.id),
          title: bookMeta.title,
          series: bookMeta.series || `Book ${bookMeta.id}`,
          emoji: bookMeta.emoji || "📖",
          totalChapters: bundle.chapters ? bundle.chapters.length : 16,
          uploadedAt: Date.now(),
          source: "blob"
        });

        // Sort by ID
        manifest.sort((a, b) => Number(a.id) - Number(b.id));
        await store.setJSON("manifest/books.json", manifest);

        return {
          statusCode: 200,
          headers: CORS_HEADERS,
          body: JSON.stringify({
            success: true,
            message: `成功將《${bookMeta.title}》存入 Netlify Blobs！`,
            manifest: manifest
          })
        };
      } catch (err) {
        return {
          statusCode: 500,
          headers: CORS_HEADERS,
          body: JSON.stringify({ error: `儲存至 Netlify Blobs 失敗: ${err.message}` })
        };
      }
    }

    // ACTION: DELETE BOOK
    if (action === "delete_book") {
      if (!bookId) {
        return {
          statusCode: 400,
          headers: CORS_HEADERS,
          body: JSON.stringify({ error: "Missing bookId." })
        };
      }

      try {
        await store.delete(`books/${bookId}/bundle.json`);

        let manifest = (await store.get("manifest/books.json", { type: "json" })) || [];
        manifest = manifest.filter(b => String(b.id) !== String(bookId));
        await store.setJSON("manifest/books.json", manifest);

        return {
          statusCode: 200,
          headers: CORS_HEADERS,
          body: JSON.stringify({
            success: true,
            message: `已自 Netlify Blobs 刪除 Book ID: ${bookId}`,
            manifest: manifest
          })
        };
      } catch (err) {
        return {
          statusCode: 500,
          headers: CORS_HEADERS,
          body: JSON.stringify({ error: `刪除失敗: ${err.message}` })
        };
      }
    }

    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Unknown action" })
    };
  }

  return { statusCode: 405, headers: CORS_HEADERS, body: "Method Not Allowed" };
};
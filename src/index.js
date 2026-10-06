export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // Serve static files from public directory
    if (url.pathname === '/' || url.pathname.startsWith('/index')) {
      return new Response(await getIndexHtml(), {
        headers: { 'Content-Type': 'text/html' }
      });
    }
    
    return new Response('404 Not Found', { status: 404 });
  }
};

async function getIndexHtml() {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>El Pan de Hoy</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #f5f1e8;
      color: #333;
    }
    
    header {
      background: #8b6f47;
      color: white;
      padding: 2rem;
      text-align: center;
    }
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }
    
    .tagline {
      font-size: 1.1rem;
      font-style: italic;
    }
    
    main {
      max-width: 1000px;
      margin: 2rem auto;
      padding: 2rem;
    }
    
    .content {
      background: white;
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    footer {
      text-align: center;
      padding: 2rem;
      color: #666;
      border-top: 1px solid #ddd;
      margin-top: 2rem;
    }
  </style>
</head>
<body>
  <header>
    <h1>🥖 El Pan de Hoy</h1>
    <p class="tagline">Pan de Masa Madre</p>
  </header>
  
  <main>
    <div class="content">
      <h2>Bienvenido</h2>
      <p>Descubre el auténtico sabor del pan artesanal hecho con masa madre.</p>
    </div>
  </main>
  
  <footer>
    <p>&copy; 2026 El Pan de Hoy. Deployed with Cloudflare Workers.</p>
  </footer>
</body>
</html>`;
}

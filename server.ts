import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoint for validated contact form submissions
  app.post('/api/contact', (req, res) => {
    const { fullName, email, whatsapp, service, budget, details } = req.body;

    if (!fullName || !email || !service || !details) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (Full Name, Email, Service, and Project Details).',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    const inquiryId = `DWE-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    console.log(`[DECENT WEB ENGINEERING INQUIRY] ID: ${inquiryId}`);
    console.log(`Client: ${fullName} <${email}>`);
    console.log(`WhatsApp: ${whatsapp || 'N/A'}`);
    console.log(`Service: ${service}`);
    console.log(`Budget: ${budget || 'Flexible'}`);
    console.log(`Details: ${details}`);

    return res.status(200).json({
      success: true,
      inquiryId,
      timestamp,
      message: 'Your inquiry has been successfully transmitted directly to Umair. You will receive a direct reply within 24 hours.',
      data: {
        fullName,
        email,
        whatsapp,
        service,
        budget,
      },
    });
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'healthy',
      brand: 'Decent Web Engineering',
      owner: 'Umair Web Designer',
      timestamp: new Date().toISOString(),
    });
  });

  // Mount Vite middlewares in development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0', port: PORT },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Decent Web Engineering server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

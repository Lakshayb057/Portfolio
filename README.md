# Portfolio Website

A modern portfolio website built with React frontend and Node.js backend, deployed on Vercel.

## Project Structure

```
Portfolio/
├── frontend/          # React frontend (Vite + TailwindCSS)
├── backend/           # Node.js Express backend
├── vercel.json        # Vercel deployment configuration
└── package.json       # Root package.json for development
```

## Features

- **Frontend**: React 19, Vite, TailwindCSS, Framer Motion, Lucide React
- **Backend**: Node.js, Express, CORS
- **Deployment**: Optimized for Vercel with serverless functions

## Local Development

1. Install dependencies:
   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```

2. Run development servers:
   ```bash
   npm run dev
   ```
   This will start both frontend (port 5173) and backend (port 5000) concurrently.

3. Or run individually:
   ```bash
   # Frontend only
   npm run dev:frontend
   
   # Backend only  
   npm run dev:backend
   ```

## Deployment

This project is configured for Vercel deployment:

1. Frontend builds to static files
2. Backend runs as serverless functions
3. API routes are prefixed with `/api`

## API Endpoints

- `POST /api/contact` - Contact form submission

## Environment Variables

Create a `.env` file in the backend directory:
```
NODE_ENV=development
PORT=5000
```

## Built With

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Express](https://expressjs.com/) - Backend framework
- [Vercel](https://vercel.com/) - Deployment platform

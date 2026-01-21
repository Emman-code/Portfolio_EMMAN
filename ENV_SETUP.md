# Environment Variables Setup Guide

## 📋 Overview

This project uses environment variables to securely store API keys and sensitive credentials. These variables are **NOT** committed to Git for security reasons.

## 🔧 Setup Instructions

### 1. Create Local Environment File

Copy the example file and add your actual credentials:

```bash
cp .env.example .env.local
```

### 2. Add Your API Keys

Open `.env.local` and replace the placeholder values with your actual credentials:

```env
# OpenRouter API Key for Chatbot
VITE_OPENROUTER_API_KEY=your_actual_openrouter_key_here

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_actual_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

### 3. Restart Development Server

After adding environment variables, restart your dev server:

```bash
npm run dev
```

## 🚀 Deployment (Vercel)

When deploying to Vercel, add these environment variables in your project settings:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:
   - `VITE_OPENROUTER_API_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

## 🔒 Security Notes

- ✅ `.env.local` is in `.gitignore` and will **NOT** be committed
- ✅ `.env.example` is safe to commit (contains no real keys)
- ✅ Never commit actual API keys to Git
- ✅ Environment variables are prefixed with `VITE_` for Vite to expose them

## 📝 Files

- `.env.local` - Your actual credentials (gitignored)
- `.env.example` - Template file (safe to commit)
- `src/vite-env.d.ts` - TypeScript definitions for env variables

## 🔍 Where API Keys Are Used

- **Chatbot** (`src/app/components/ui/chatbot.tsx`) - Uses `VITE_OPENROUTER_API_KEY`
- **Contact Form** (`src/app/components/Contact.tsx`) - Uses EmailJS variables

## ⚠️ Important

If you see TypeScript errors about `import.meta.env`, make sure:
1. Your `.env.local` file exists
2. You've restarted the dev server
3. The `src/vite-env.d.ts` file exists

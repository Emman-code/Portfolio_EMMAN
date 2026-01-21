# Vercel Deployment Guide

## 🚀 Deployment Fix Applied

The "Permission denied" error has been fixed with the following changes:

### Changes Made:

1. **package.json** - Added `postinstall` script:
   ```json
   "postinstall": "chmod +x node_modules/.bin/vite || true"
   ```
   This ensures the vite binary has execute permissions on Vercel.

2. **vercel.json** - Created configuration file:
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "framework": "vite",
     "installCommand": "npm install"
   }
   ```

## 📋 Before Deploying

### 1. Add Environment Variables in Vercel

Go to your Vercel project → **Settings** → **Environment Variables** and add:

| Variable Name | Value |
|--------------|-------|
| `VITE_OPENROUTER_API_KEY` | Your OpenRouter API key |
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS Service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS Template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS Public Key |

**Important:** Make sure to add these for **Production**, **Preview**, and **Development** environments.

### 2. Push to GitHub

```bash
git add .
git commit -m "Fix Vercel deployment permission issue"
git push origin main
```

### 3. Redeploy

Vercel will automatically trigger a new deployment. The build should now succeed.

## ✅ What Was Fixed

- **Error**: `sh: line 1: /vercel/path0/node_modules/.bin/vite: Permission denied`
- **Cause**: Vite binary didn't have execute permissions on Vercel's build system
- **Solution**: Added postinstall script to set execute permissions after npm install

## 🔍 Verify Deployment

After deployment succeeds:

1. Check that the site loads correctly
2. Test the chatbot (should work with env variables)
3. Test the contact form (should work with EmailJS env variables)
4. Verify all animations and features work

## 🐛 If Build Still Fails

Try these steps:

1. **Clear Vercel Cache**:
   - Go to Vercel Dashboard → Your Project → Settings
   - Scroll to "Build & Development Settings"
   - Click "Clear Cache"

2. **Redeploy**:
   - Go to Deployments tab
   - Click the three dots on the latest deployment
   - Click "Redeploy"

3. **Check Node Version**:
   - Vercel uses Node 18 by default
   - If needed, add to `package.json`:
     ```json
     "engines": {
       "node": ">=18.0.0"
     }
     ```

## 📝 Build Command Reference

- **Install**: `npm install`
- **Build**: `npm run build`
- **Output**: `dist/` directory
- **Framework**: Vite

## 🎉 Success Indicators

When deployment succeeds, you'll see:
- ✅ Build completed successfully
- ✅ Deployment URL active
- ✅ All environment variables loaded
- ✅ Site accessible and functional

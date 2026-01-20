# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to https://dashboard.emailjs.com/sign-up
2. Sign up with your email or Google account

## Step 2: Add Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Set up your template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (emman.cnr@gmail.com)

Example template:
```
Subject: New Contact from {{from_name}} - {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save and copy the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `user_abc123xyz`)

## Step 5: Update Contact.tsx
Replace these lines in `Contact.tsx` (around line 16-18):

```tsx
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

## Step 6: Test
1. Go to your contact form
2. Fill out the form
3. Click "Send Message"
4. Check your email inbox

## Troubleshooting
- If you get CORS errors, make sure to add your domain to EmailJS allowed origins
- Check browser console for detailed error messages
- Verify all three credentials are correct
- Make sure template variable names match exactly

## Free Tier Limits
- 200 emails per month
- Upgrade if you need more

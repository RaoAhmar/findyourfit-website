# Email Form Setup Guide

## Option 1: EmailJS (Recommended)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (100 emails/month free)
3. Verify your email address

### Step 2: Set up Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions for your email provider
5. Note down your **Service ID**
service_opi840e
### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

```
Subject: New {{form_type}} Form Submission - FindYourFit

Hello,

You have received a new form submission from your FindYourFit website.

Form Type: {{form_type}}
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Message: {{message}}
Mentor: {{mentor_name}}
Submission Date: {{submission_date}}

Best regards,
FindYourFit Website
```

4. Save the template and note down your **Template ID**
Fyf_Form_replies
### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**
fZgyznqC6_1RiNJ8g
### Step 5: Update Your Website
1. Open `app.js` file
2. Find the `EMAILJS_CONFIG` section
3. Replace the placeholder values:

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: "your_actual_public_key_here",
    SERVICE_ID: "your_actual_service_id_here", 
    TEMPLATE_ID: "your_actual_template_id_here"
};
```

### Step 6: Test
1. Open your website
2. Fill out any form (waitlist, get started, mentor request, or contact)
3. Submit the form
4. Check your email (thefindyourfit@gmail.com) for the submission

## Option 2: Formspree (Alternative)

If you prefer Formspree:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up and create a new form
3. Get your form endpoint URL
4. Update the form actions in your HTML

## Option 3: Netlify Forms (If hosting on Netlify)

If you're hosting on Netlify:

1. Add `netlify` attribute to your forms
2. No additional setup needed
3. Forms will be available in Netlify dashboard

## Testing Your Setup

1. **Test Waitlist Form**: Click "Let Us Help You" button
2. **Test Get Started Form**: Click "Get Started Today" button  
3. **Test Mentor Request**: Click "Request A Session" on any mentor
4. **Test Contact Form**: Fill out the contact form at bottom of page

All submissions should arrive at: **thefindyourfit@gmail.com**

## Troubleshooting

- Check browser console for any errors
- Verify all EmailJS IDs are correct
- Make sure your email service is properly connected
- Check spam folder if emails don't arrive

## EmailJS Limits

- Free plan: 100 emails/month
- Paid plans start at $15/month for 1,000 emails
- Perfect for most small business websites

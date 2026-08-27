# EmailJS Setup

The contact form uses EmailJS to send submissions to `nikhiakarsh@gmail.com`.

## 1. Create an EmailJS account

1. Open [emailjs.com](https://www.emailjs.com/) and create an account.
2. Add and connect an email service. Copy its **Service ID**.
3. Create an email template and copy its **Template ID**.
4. Copy your **Public Key** from the Account page.

## 2. Configure the local app

Create a file named `.env` in the project root. Copy the values from `.env.example` and replace the placeholders:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart the Vite dev server after changing `.env`.

## 3. Configure the template

Use these variables in the EmailJS template:

```text
From: {{from_name}} ({{from_email}})
Subject: {{subject}}

{{message}}
```

Set the template recipient to `nikhiakarsh@gmail.com`. The public key is safe to use in a browser application; never put an EmailJS private key or Gmail password in the frontend.

## 4. Test the form

```bash
npm run dev
```

Submit the form and check both the EmailJS dashboard and `nikhiakarsh@gmail.com`. The button is disabled while the request is in progress, and the form displays a success or error message based on the EmailJS response.

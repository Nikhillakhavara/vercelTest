# Portfolio Website

A modern, fully customizable portfolio website built with Angular 19. This portfolio includes all the essential sections for showcasing your professional work and includes a contact form ready for Twilio integration.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fully Customizable**: Easy to update content through service files
- **Contact Form**: Ready for Twilio WhatsApp integration
- **SEO Optimized**: Meta tags and structured data
- **Performance Optimized**: Fast loading with lazy loading
- **Accessibility**: WCAG compliant design

## Sections Included

1. **Header**: Fixed navigation with smooth scrolling
2. **Hero**: Eye-catching introduction with call-to-action
3. **About**: Personal information and statistics
4. **Skills**: Technical skills with progress bars and circular charts
5. **Projects**: Portfolio projects with filtering
6. **Experience**: Work experience and education timeline
7. **Contact**: Contact form with validation (Twilio ready)
8. **Footer**: Links and additional information

## Quick Setup

### 1. Update Personal Information

Edit `src/app/services/portfolio.service.ts` to customize:

- Personal information (name, title, bio, contact details)
- Social media links
- Skills and proficiency levels
- Projects and work experience
- Education details

### 2. Add Your Images

Add the following images to `src/assets/images/`:

- `profile.jpg` - Your profile photo (recommended: 400x400px)
- `project1.jpg`, `project2.jpg`, `project3.jpg` - Project screenshots
- `og-image.jpg` - Social media preview image (1200x630px)

### 3. Update Meta Information

Edit `src/index.html` to update:

- Page title and description
- Open Graph tags for social media
- Your domain name in meta tags

### 4. Customize Colors and Styling

The design uses a consistent color scheme that can be easily modified in the component styles:

- Primary color: `#2563eb` (blue)
- Accent color: `#ffd700` (gold)
- Text colors: Various shades of gray

## Development

### Prerequisites

- Node.js (v18 or higher)
- Angular CLI (v19)

### Installation

```bash
npm install
```

### Development Server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Twilio Integration Setup

The contact form is ready for Twilio integration. To complete the setup:

### 1. Backend Setup (Supabase + Twilio)

Create a Supabase project and set up:

1. **Database Table** for storing contact submissions:
```sql
CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

2. **Edge Function** for Twilio integration:
```typescript
// supabase/functions/contact-form/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, subject, message } = await req.json()
    
    // Save to database
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )
    
    const { error } = await supabase
      .from('contact_submissions')
      .insert({ name, email, subject, message })
    
    if (error) throw error
    
    // Send WhatsApp notification via Twilio
    const accountSid = Deno.env.get('TWILIO_ACCOUNT_SID')
    const authToken = Deno.env.get('TWILIO_AUTH_TOKEN')
    const fromWhatsApp = Deno.env.get('TWILIO_WHATSAPP_FROM')
    const toWhatsApp = Deno.env.get('TWILIO_WHATSAPP_TO')
    
    const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`
    
    const twilioResponse = await fetch(twilioUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${accountSid}:${authToken}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        From: `whatsapp:${fromWhatsApp}`,
        To: `whatsapp:${toWhatsApp}`,
        Body: `New contact form submission!\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
      })
    })
    
    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
    
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )
  }
})
```

### 2. Update Frontend Service

Update the `submitContactForm` method in `src/app/services/portfolio.service.ts`:

```typescript
async submitContactForm(formData: ContactForm): Promise<boolean> {
  try {
    const response = await fetch('YOUR_SUPABASE_FUNCTION_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    return response.ok;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return false;
  }
}
```

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set build command: `ng build`
3. Set output directory: `dist/versel-test`
4. Deploy!

### Other Platforms

The built application in `dist/` can be deployed to any static hosting service:

- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## Customization Tips

### Adding New Sections

1. Create a new component: `ng generate component components/new-section`
2. Add it to `app.component.html`
3. Update the navigation in `header.component.ts`

### Modifying Animations

The portfolio uses CSS animations and transitions. You can customize them in the component styles or add new ones in `src/styles.scss`.

### Adding More Projects

Update the `projectsSubject` in `portfolio.service.ts` with your project data.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing this portfolio or setting up the Twilio integration, feel free to reach out!

---

**Note**: Remember to replace placeholder content with your actual information before deploying to production.
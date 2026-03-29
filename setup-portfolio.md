# Portfolio Setup Guide

## Quick Start Checklist

### 1. Update Your Information
Edit `src/app/config/portfolio.config.ts` and update:

- [ ] **Personal Info**: Name, title, bio, email, phone, location
- [ ] **Social Links**: GitHub, LinkedIn, Twitter, Instagram URLs
- [ ] **Skills**: Add/remove skills and adjust proficiency levels
- [ ] **Projects**: Replace with your actual projects
- [ ] **Experience**: Add your work history
- [ ] **Education**: Update with your educational background

### 2. Add Your Images
Replace placeholder images in `src/assets/images/`:

- [ ] **Profile Photo**: Replace `placeholder.svg` with your photo (400x400px recommended)
- [ ] **Project Screenshots**: Replace `project-placeholder.svg` with actual project images (600x400px recommended)
- [ ] **Favicon**: Replace `public/favicon.ico` with your custom favicon

### 3. Update Meta Information
Edit `src/index.html`:

- [ ] Update page title
- [ ] Update meta description
- [ ] Update Open Graph tags
- [ ] Replace domain name in meta tags

### 4. Test the Portfolio
Run the development server:

```bash
npm install
ng serve
```

Visit `http://localhost:4200` to see your portfolio.

### 5. Deploy to Vercel
Since you mentioned it's already deployed:

1. Push your changes to GitHub
2. Vercel will automatically redeploy
3. Your portfolio will be live!

## Customization Tips

### Colors
The portfolio uses these main colors:
- Primary: `#2563eb` (blue)
- Accent: `#ffd700` (gold)
- Text: Various grays

Search and replace these hex codes in component styles to change the color scheme.

### Adding New Sections
1. Generate component: `ng generate component components/new-section`
2. Add to `app.component.html`
3. Update navigation in `header.component.ts`

### Contact Form Integration
When ready to connect with Twilio:

1. Set up Supabase project
2. Create the database table (see README.md)
3. Deploy the edge function (see README.md)
4. Update `PORTFOLIO_CONFIG.contact.apiEndpoint` with your function URL

## Content Guidelines

### Writing Tips
- Keep descriptions concise but informative
- Use action words (built, developed, implemented, led)
- Quantify achievements when possible (improved performance by 40%)
- Focus on technologies and impact

### Image Guidelines
- **Profile Photo**: Professional headshot, good lighting, 400x400px
- **Project Screenshots**: Show the actual interface, 600x400px
- **File Formats**: JPG for photos, PNG for screenshots with transparency
- **Optimization**: Compress images to keep file sizes under 500KB

### SEO Tips
- Use descriptive project titles
- Include relevant keywords in descriptions
- Keep meta descriptions under 160 characters
- Use alt text for all images

## Need Help?

If you need assistance with:
- Customizing the design
- Adding new features
- Setting up Twilio integration
- Deployment issues

Feel free to reach out or check the detailed README.md file for more information.

---

**Remember**: This is your professional showcase. Take time to craft compelling content that represents your best work!
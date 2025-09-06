# Netlify Deployment Guide

## Option 1: Drag & Drop (Easiest)
1. Go to https://app.netlify.com/drop
2. Drag and drop the `dist/` folder
3. Get instant live URL

## Option 2: Git Integration
1. Go to https://app.netlify.com
2. Click "New site from Git"
3. Connect your GitHub repository
4. Set build settings:
   - Build command: (leave empty - already built)
   - Publish directory: `dist`
5. Deploy

## Option 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --dir=dist --prod
```

## Custom Domain (Optional)
- Add custom domain in Netlify dashboard
- Configure DNS settings
- SSL automatically provided

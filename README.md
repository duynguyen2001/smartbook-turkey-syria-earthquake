# SmartBook Turkey-Syria Earthquake Analysis

This is a web application that provides interactive analysis and visualization of information related to the Turkey-Syria earthquake disaster.

## 🌐 Live Demo

Visit the live application: [Your GitHub Pages URL will be here after deployment]

## 📁 Project Structure

```
├── dist/                          # Built application (deployed to GitHub Pages)
│   ├── index.html                # Main HTML file
│   ├── css/                      # Compiled CSS files
│   ├── js/                       # Compiled JavaScript files
│   ├── pages/                    # Data files for different topics
│   ├── pages-turkey-syria-earthquake/ # Specific earthquake data
│   └── ...                       # Other assets
├── .github/workflows/            # GitHub Actions for automated deployment
├── nginx/                        # Nginx configuration for Docker deployment
├── Dockerfile                    # Docker configuration
├── babel.config.js              # Babel configuration
└── README.md                    # This file
```

## 🚀 Deployment

### GitHub Pages (Automatic)

This project is automatically deployed to GitHub Pages using GitHub Actions:

1. Push changes to the `main` branch
2. GitHub Actions workflow automatically deploys the `dist/` folder
3. Your site will be available at `https://yourusername.github.io/repository-name/`

### Manual GitHub Pages Setup

If you need to set up GitHub Pages manually:

1. Go to your repository Settings > Pages
2. Under "Source", select "Deploy from a branch"
3. Select "main" branch and "/dist" folder
4. Click Save

### Docker Deployment

You can also run this application using Docker:

```bash
docker build -t smartbook-app .
docker run -p 80:80 smartbook-app
```

## 📊 Data

The application includes analysis data for:
- Turkey-Syria earthquake disaster response
- International aid and support
- Impact analysis and recovery efforts
- Various related geopolitical topics

## 🛠 Technology Stack

- Frontend: Vue.js application (built)
- Deployment: GitHub Pages
- CI/CD: GitHub Actions
- Alternative deployment: Docker + Nginx

## 📝 Usage

1. Navigate to the live URL
2. Explore different analysis topics using the interface
3. View detailed information and citations for each topic

## 🤝 Contributing

1. Fork the repository
2. Make your changes
3. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

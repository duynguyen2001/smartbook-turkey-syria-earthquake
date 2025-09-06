# Local Development Server Options

## Option 1: Python HTTP Server (Built-in)
```bash
# Navigate to dist folder
cd dist

# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Visit: http://localhost:8000
```

## Option 2: Node.js http-server
```bash
# Install globally
npm install -g http-server

# Serve from dist folder
http-server dist -p 8080

# Visit: http://localhost:8080
```

## Option 3: Live Server (VS Code Extension)
1. Install "Live Server" extension in VS Code
2. Right-click on `dist/index.html`
3. Select "Open with Live Server"

## Option 4: Docker (Simple)
```bash
# Build with simple Dockerfile
docker build -f Dockerfile.simple -t vue-app .

# Run
docker run -p 8080:80 vue-app

# Visit: http://localhost:8080
```

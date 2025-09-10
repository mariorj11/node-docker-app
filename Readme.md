# Node.js Dockerized Service with Basic Auth and GitHub Actions Deployment

## 📦 Project Overview

This project demonstrates how to build and deploy a simple Node.js service using Docker and GitHub Actions. It includes:

- A basic Express server with two routes
- Basic Authentication for protected access
- Docker containerization
- CI/CD pipeline using GitHub Actions
- Secrets management for secure deployment

---

## 🚀 Features

- `/` route: Returns `Hello, world!`
- `/secret` route: Protected by Basic Auth, returns a secret message from environment variables
- `.env` file for configuration
- Dockerfile to build and run the service in a container
- GitHub Actions workflow to build, push, and deploy the container to a remote server

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/node-docker-app.git
cd node-docker-app
```

### 2. Create .env file

### 3. Install Dependencies
```bash 
npm install
```
### 4. Run Locally
```bash 
npm start
```

Visit:

http://localhost:3000/ → Hello, world!
http://localhost:3000/secret → Requires Basic Auth

## 🐳 Docker Instructions
Build Docker Image
```bash 
docker build -t node-docker-app .
```
Run Docker Container
```bash
docker run --env-file .env -p 3000:3000 node-docker-app
```
## 🔐 GitHub Actions Deployment
### Secrets to Add in GitHub
SSH_HOST <br>
SSH_USERNAME <br>
SSH_PRIVATE_KEY <br>
DOCKERHUB_USERNAME <br>
DOCKERHUB_PASSWORD <br>

Workflow File: .github/workflows/deploy.yml
Includes steps to:

Build and push Docker image
SSH into remote server
Pull and run the container
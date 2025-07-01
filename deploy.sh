#!/bin/bash

# 🚀 TBD Portfolio Deployment Script
# This script helps you deploy your portfolio to various platforms

echo "🚀 TBD Portfolio Deployment Script"
echo "=================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎉 Your site is ready for deployment!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Push your code to GitHub:"
    echo "   git init"
    echo "   git add ."
    echo "   git commit -m 'Initial commit'"
    echo "   git branch -M main"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/tbd-portfolio.git"
    echo "   git push -u origin main"
    echo ""
    echo "2. Deploy to Vercel (Recommended):"
    echo "   - Go to https://vercel.com"
    echo "   - Sign up with GitHub"
    echo "   - Import your repository"
    echo "   - Click Deploy"
    echo ""
    echo "3. Or deploy to Netlify:"
    echo "   - Go to https://netlify.com"
    echo "   - Sign up with GitHub"
    echo "   - New site from Git"
    echo "   - Choose your repository"
    echo "   - Build command: npm run build"
    echo "   - Publish directory: out"
    echo ""
    echo "📁 Your built files are in the 'out' directory"
    echo "🌐 You can upload the 'out' folder to any static hosting service"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi 
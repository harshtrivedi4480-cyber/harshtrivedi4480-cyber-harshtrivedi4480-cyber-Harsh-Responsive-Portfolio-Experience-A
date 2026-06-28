#!/bin/bash

# Vercel Deployment Script for Portfolio
# Usage: VERCEL_TOKEN=your_token bash deploy-vercel.sh

echo "🚀 Deploying to Vercel..."
echo ""

# Check if Vercel token is set
if [ -z "$VERCEL_TOKEN" ]; then
    echo "❌ VERCEL_TOKEN environment variable not set!"
    echo ""
    echo "Get your token from: https://vercel.com/account/tokens"
    echo ""
    echo "Usage:"
    echo "  export VERCEL_TOKEN=your_token_here"
    echo "  bash deploy-vercel.sh"
    exit 1
fi

# Navigate to project directory
cd "$(dirname "$0")"

# Authenticate with Vercel
echo "🔐 Authenticating with Vercel..."
vercel login --token $VERCEL_TOKEN

# Check if .vercel directory exists, if not, link the project
if [ ! -d ".vercel" ]; then
    echo ""
    echo "🔗 Linking to Vercel project..."
    vercel link --confirm --token $VERCEL_TOKEN
fi

# Deploy to production
echo ""
echo "📦 Building and deploying to Vercel..."
vercel deploy --prod --token $VERCEL_TOKEN

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Your portfolio should now be live on Vercel!"

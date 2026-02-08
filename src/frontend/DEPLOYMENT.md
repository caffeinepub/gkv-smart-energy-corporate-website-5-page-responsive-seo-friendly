# Deployment Guide - GKV Smart Energy

This guide provides step-by-step instructions to build and deploy the GKV Smart Energy web application to the Internet Computer.

## Prerequisites

Before deploying, ensure you have the following installed:

1. **Node.js** (v18 or higher)
   ```bash
   node --version
   ```

2. **pnpm** (package manager)
   ```bash
   npm install -g pnpm
   pnpm --version
   ```

3. **DFX** (Internet Computer SDK)
   ```bash
   sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
   dfx --version
   ```

4. **Internet Identity** (for authentication, if needed)
   - Ensure you have an Internet Identity created at https://identity.ic0.app

## Deployment Steps

### 1. Install Dependencies

Navigate to the project root and install all dependencies:


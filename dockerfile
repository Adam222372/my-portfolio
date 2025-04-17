# Base image
FROM node:23-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install only prod dependencies first (caches this layer)
RUN npm install --only=production

# Copy rest of the project files
COPY . .

# Then install devDependencies (only for development use)
RUN npm install --only=development
EXPOSE 3000
# Default command
CMD ["npm", "run", "dev"]

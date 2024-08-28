FROM node:lts-alpine

WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package*.json ./

# Copy prisma directory and schema.prisma
COPY prisma/schema.prisma ./prisma/

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY .env .
COPY . .

# Build the application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

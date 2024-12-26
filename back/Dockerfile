# Use the Node.js official image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application into the container
COPY . .

# Expose the port that the app runs on
EXPOSE 5000

# Set environment variables (Optional: These can also be managed with Docker Compose)
ENV NODE_ENV=production

# Command to run the application
CMD ["node", "server.js"]
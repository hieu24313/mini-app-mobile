# Base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .


# Expose the port the app will run on
EXPOSE 3000

# Command to run the app
CMD ["yarn", "start"]

# Use an official Node runtime as the build stage
FROM node:20 AS build-stage

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application source code to the container
COPY . .

# Run tests
RUN npm test

# Build the application
RUN npm run build

# Use an official Nginx runtime as the final stage
FROM nginx:1.25-alpine

# Copy the built application from the build stage
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

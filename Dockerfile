FROM node:8.18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
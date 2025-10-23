# Step 1: Build the Angular application
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Step 2: Serve with Nginx
FROM nginx:1.23
COPY --from=build /app/dist/sample-angular-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

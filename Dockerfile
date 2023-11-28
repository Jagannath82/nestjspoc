FROM node:20.9.0-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build
EXPOSE 3000
# Start the server using the production build
CMD [ "node", "dist/main.js" ]
FROM node:latest as build-deps
WORKDIR /app
COPY . ./
RUN yarn 
RUN yarn build

FROM nginx:latest
COPY --from=build-deps /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

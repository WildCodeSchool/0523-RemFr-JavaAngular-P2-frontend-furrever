# Dockerfile frontend
# build environment
FROM node:18.17 as builder
WORKDIR /build
COPY . .
ENV PATH ./node_modules/.bin:$PATH
RUN npm ci
RUN ng build --configuration production --output-path=dist

# production environment
FROM nginx:stable-alpine-slim
COPY --from=build /build/build/ /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]

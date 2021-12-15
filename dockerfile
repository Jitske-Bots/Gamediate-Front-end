#sets the base image
FROM node:14.17.6-alpine as build-step
#APK: Alpine Package Keeper, the package manager for alpine linux 
#installing bash into the image 
RUN apk update && apk add bash
#mkdir: create folder
#-p to create a sub-directory
#creates the directory app 
RUN mkdir -p /app
#workdir sets the working directory
WORKDIR /app
#copy package.json into the app directory
COPY package.json /app
#install node modules
RUN npm install
RUN npm install ngx-cookie-service 
#copies the entire application into the app directory
COPY . /app
#npm run buils runs the build field from the package.json scripts field.
RUN npm run build --prod
#
RUN chmod +X /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]

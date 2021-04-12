# base image
FROM node:14-alpine

# set working directory
WORKDIR /usr/app

#COPY ["package.json", "package-lock.json*", "./"]
COPY package*.json ./
RUN npm install 
RUN npm install react-scripts@4.0.3 -g

COPY . .

# 앱 실행
CMD ["npm", "start"]
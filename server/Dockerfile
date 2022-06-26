# Choose the Image
FROM node:10
WORKDIR /usr/src/app/server
# COPY all the files from Current Directory into the Container
COPY ./ ./
# Install the Project Dependencies like Express Framework
RUN yarn install
# Tell that this image is going to Open a Port 
EXPOSE 8081
# Default Command to launch the Application
CMD ["yarn", "start"]
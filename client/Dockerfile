FROM node:latest
# Add a work directory
WORKDIR /usr/src/app/client
# COPY all the files from Current Directory into the Container
COPY ./ ./
# Cache and Install dependencies
RUN yarn install
# Expose port
EXPOSE 8080
# Start the app
CMD [ "yarn", "start" ]

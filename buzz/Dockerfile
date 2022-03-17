FROM docker:dind

# Add nodejs
RUN apk add --update nodejs npm

WORKDIR /buzz

# Add app files
COPY package*.json ./
RUN npm install
COPY . .

# The entrypoint script is included in the base docker:dind image
# ENTRYPOINT ["/usr/local/bin/dockerd-entrypoint.sh"]

CMD ["/bin/ash", "/buzz/run.sh"]
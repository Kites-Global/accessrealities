FROM node:22-bookworm-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends bash ca-certificates gzip awscli \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev

COPY dump.mjs backup.sh ./
RUN sed -i 's/\r$//' backup.sh && chmod +x backup.sh

CMD ["./backup.sh"]

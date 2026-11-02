FROM debian:bookworm-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends bash curl ca-certificates gzip awscli \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sSfL https://get.tur.so/install.sh | bash
ENV PATH="/root/.turso:${PATH}"

WORKDIR /app
COPY backup.sh .
RUN sed -i 's/\r$//' backup.sh && chmod +x backup.sh

CMD ["./backup.sh"]

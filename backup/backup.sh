#!/usr/bin/env bash
# Dumps the Turso DB to SQL, uploads it to S3 and keeps only the newest $KEEP backups.
set -euo pipefail

: "${TURSO_DATABASE_URL:?TURSO_DATABASE_URL is not set}"
: "${TURSO_AUTH_TOKEN:?TURSO_AUTH_TOKEN is not set}"
: "${AWS_ACCESS_KEY_ID:?AWS_ACCESS_KEY_ID is not set}"
: "${AWS_SECRET_ACCESS_KEY:?AWS_SECRET_ACCESS_KEY is not set}"
: "${AWS_REGION:?AWS_REGION is not set}"
: "${S3_BUCKET:?S3_BUCKET is not set}"

export AWS_DEFAULT_REGION="$AWS_REGION"
KEEP="${KEEP:-10}"

echo "Dumping database ..."
node dump.mjs backup.sql
gzip -f backup.sql

KEY="turso/$(date -u +%F-%H%M).sql.gz"
echo "Uploading to s3://$S3_BUCKET/$KEY ..."
aws s3 cp backup.sql.gz "s3://$S3_BUCKET/$KEY"

echo "Keeping only the latest $KEEP backups ..."
aws s3api list-objects-v2 --bucket "$S3_BUCKET" --prefix turso/ \
  --query "sort_by(Contents,&LastModified)[:-${KEEP}].Key" --output text \
  | tr '\t' '\n' \
  | while read -r key; do
      if [ -n "$key" ] && [ "$key" != "None" ]; then
        echo "Deleting old backup: $key"
        aws s3 rm "s3://$S3_BUCKET/$key"
      fi
    done

echo "Backup finished."

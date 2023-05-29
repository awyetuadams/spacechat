#!/bin/bash

declare -r app_name="space-chat"
declare -r version="1.0"
# Stops execution of the script if error
set -e

export NODE_ENV=production
npm run build

zip -r app.zip .ebextensions .platform .next prisma public space src *.json *.js *.ts
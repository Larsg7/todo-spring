#!/bin/bash

if [ "$1" = "prod" ]; then
  printf "Using prod swagger file to generate api!"
  HOST=...
else
  printf "Using dev swagger file to generate api!"
  HOST=http://localhost:8080
fi
API_FOLDER=src/app/communication/swagger/api
rm -rf src/app/communication/swagger/model
rm -rf $API_FOLDER
# swagger-codegen generate --model-name-prefix Api -i $HOST/swagger/v1/swagger.json -l typescript-angular2 -o src/swagger
swagger-codegen generate -i $HOST/v2/api-docs -l typescript-angular -o src/app/communication/swagger
find ./$API_FOLDER -not -path ./$API_FOLDER -exec sed -i 's/rxjs\/Observable/rxjs/g' {} \;
printf "\n"

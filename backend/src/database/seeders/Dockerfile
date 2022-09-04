FROM mongo:6.0

COPY init.json /init.json

CMD mongoimport --host db --port 27017 --db $DB_NAME --collection lossEvents --drop --file /init.json --jsonArray
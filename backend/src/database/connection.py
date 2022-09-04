from server.instance import server
from flask_pymongo import PyMongo
from os import getenv

mongo = PyMongo(
    server.app, f"mongodb://{getenv('DB_HOST')}:{getenv('DB_PORT')}/{getenv('DB_NAME')}"
)

loss_events_collection = mongo.db.lossEvents

from dotenv import load_dotenv
from flask import Flask
from flask_restx import Api
import os
from flask_pymongo import PyMongo
from flask_cors import CORS

load_dotenv()


class Server:
    def __init__(self):
        self.app = Flask(__name__)
        CORS(self.app)
        self.app.config["MONGO_URI"] = os.getenv("MONGO_URI")
        self.mongo = PyMongo(self.app)
        self.loss_events_collection = self.mongo.db.lossEvents
        self.api = Api(
            self.app,
            version="1.0",
            title="proagrofacil",
            description="API para registro de comunicações de perdas em lavouras à ProAgro",
            doc="/",
            default="/loss-events",
        )

    def run(self):
        self.app.run(
            debug=(os.getenv("DEBUG_MODE") == "True"),
            host=os.getenv("API_HOST"),
            port=os.getenv("PORT"),
        )


server = Server()

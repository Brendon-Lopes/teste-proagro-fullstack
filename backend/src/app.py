from dotenv import load_dotenv
from flask import Flask, request, Response
from flask_pymongo import PyMongo
from bson import json_util

load_dotenv()
import os

app = Flask(__name__)
db_host = os.getenv("DB_HOST")
db_port = os.getenv("DB_PORT")
db_name = os.getenv("DB_NAME")

mongo = PyMongo(app, f"mongodb://{db_host}:{db_port}/{db_name}")


@app.route("/", methods=["POST"])
def hello():
    user = request.json["user"]
    password = request.json["password"]
    id = mongo.db.users.insert_one({"user": user, "password": password})
    return {"message": "success"}


@app.route("/", methods=["GET"])
def get():
    users = mongo.db.users.find()
    response = json_util.dumps(users)
    return Response(response, mimetype="application/json")


if __name__ == "__main__":
    app.run(debug=True, host=os.getenv("API_HOST"), port=os.getenv("PORT"))

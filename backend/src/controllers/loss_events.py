from json import dumps
from flask import Response
from bson import json_util
from flask_restx import Resource

from server.instance import server

from database.connection import mongo

app, api = server.app, server.api


@api.route("/loss-events")
class LossEvents(Resource):
     def get(self):
        cursor = mongo.db.loss_events.find()
        response = LossEvents.serialize(cursor)
        return Response(response, mimetype="application/json", status=200)

     def serialize(obj):
         return [dumps(doc, default=json_util.default) for doc in obj]


from json import dumps
from flask import Response
from bson import json_util
from flask_restx import Resource
from bson.objectid import ObjectId

from server.instance import server

from database.connection import mongo

app, api = server.app, server.api


@api.route("/loss-events/<string:id>")
class LossEventsById(Resource):
     def get(self, id):
       cursor = mongo.db.loss_events.find_one({"_id": ObjectId(id)})
       response = dumps(cursor, default=json_util.default)
       return Response(response, mimetype="application/json", status=200)

     def serialize(obj):
         return [dumps(doc, default=json_util.default) for doc in obj]

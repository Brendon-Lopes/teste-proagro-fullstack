from flask import Response
from flask_restx import Resource
from server.instance import server
from services.loss_events_by_id_service import LossEventsByIdService
from utils.index import Utils

mimetype_json = Utils.mimetype

api = server.api


@api.route("/loss-events/<string:id>")
class LossEventsById(Resource):
    def get(self, id):
        response, status = LossEventsByIdService.getById(id)
        return Response(response, status, mimetype=mimetype_json)

    def delete(self, id):
        status = LossEventsByIdService.delete_one(id)
        return Response(status=status)

    def put(self, id):
        response, status = LossEventsByIdService.update(id, api.payload)
        return Response(response, status, mimetype=mimetype_json)

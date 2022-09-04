from http.client import BAD_REQUEST, INTERNAL_SERVER_ERROR
from json import dumps, loads

# from flask import Response
from werkzeug import Response
from flask_restx import Resource, abort
from services.loss_events_service import LossEventsService
from server.instance import server
from utils.index import Utils

mimetype_json = Utils.mimetype

api = server.api


@api.route("/loss-events")
class LossEvents(Resource):
    def get(self):
        try:
            response, status = LossEventsService.get_all()
            return Response(response, status, mimetype=mimetype_json)
        except:
            abort(INTERNAL_SERVER_ERROR, "Erro interno do servidor")

    def post(self):
        try:
            response, status = LossEventsService.create(api.payload)
            return Response(response, status, mimetype=mimetype_json)
        except:
            abort(BAD_REQUEST, "Erro interno do servidor")

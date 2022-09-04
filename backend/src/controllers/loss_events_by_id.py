from flask import Response
from flask_restx import Resource
from server.instance import server
from services.loss_events_by_id_service import LossEventsByIdService
from utils.index import Utils
from database.models.loss_event_model import loss_event_fields
from utils.docs import Docs

mimetype_json = Utils.mimetype

api = server.api


@api.route("/loss-events/<string:id>")
@api.param("id", "ID da comunicação de perda")
class LossEventsById(Resource):
    @api.doc(responses=Docs.get_by_id_responses)
    def get(self, id):
        response, status = LossEventsByIdService.getById(id)
        return Response(response, status, mimetype=mimetype_json)

    @api.doc(responses=Docs.delete_responses)
    def delete(self, id):
        status = LossEventsByIdService.delete_one(id)
        return Response(status=status)

    @api.expect(loss_event_fields)
    @api.doc(responses=Docs.put_responses)
    def put(self, id):
        response, status = LossEventsByIdService.update(id, api.payload)
        return Response(response, status, mimetype=mimetype_json)

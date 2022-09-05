from http.client import CONFLICT, NO_CONTENT, OK
from bson.objectid import ObjectId
from utils.index import Utils
from flask_restx import abort
from validations.loss_events_validations import LossEventsValidation as validation
from services.loss_events_service import LossEventsService
from server.instance import server

loss_events_collection = server.loss_events_collection


class LossEventsByIdService:
    def getById(id):
        cursor = loss_events_collection.find_one({"_id": ObjectId(id)})

        if isinstance(cursor, type(None)):
            abort(404, Utils.NOT_FOUND_ERROR_MESSAGE)

        response = Utils.serialize_dict(cursor)

        return response, OK

    def delete_one(id):
        db_response = loss_events_collection.delete_one({"_id": ObjectId(id)})

        if db_response.deleted_count == 0:
            abort(404, Utils.NOT_FOUND_ERROR_MESSAGE)

        return NO_CONTENT

    def update(id, data):
        validation.validate_create_data(data)

        near = LossEventsService.check_for_near_occurrences(
            (data["localizacao"]["LAT"], data["localizacao"]["LONG"]),
            data["dataColheita"],
            data["evento"],
            id,
        )

        if near is not False:
            obj = {
                "message": Utils.CONFLICT_MESSAGE,
                "conflict": near,
            }
            response = Utils.serialize_dict(obj)
            return response, CONFLICT

        updated = loss_events_collection.find_one_and_update(
            {"_id": ObjectId(id)}, {"$set": data}
        )

        if isinstance(updated, type(None)):
            abort(404, Utils.NOT_FOUND_ERROR_MESSAGE)

        response = Utils.serialize_dict({"message": "updated"})

        return response, OK

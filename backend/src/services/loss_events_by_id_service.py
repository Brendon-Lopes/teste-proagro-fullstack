from http.client import NO_CONTENT, OK
from database.connection import loss_events_collection
from bson.objectid import ObjectId
from utils.index import Utils
from flask_restx import abort
from validations.loss_events_validations import LossEventsValidation as validation


class LossEventsByIdService:
    def getById(id):
        cursor = loss_events_collection.find_one({"_id": ObjectId(id)})

        if type(cursor) is type(None):
            abort(404, Utils.NOT_FOUND_ERROR_MESSAGE)

        response = Utils.serializeDict(cursor)

        return response, OK

    def delete_one(id):
        db_response = loss_events_collection.delete_one({"_id": ObjectId(id)})

        if db_response.deleted_count == 0:
            abort(404, Utils.NOT_FOUND_ERROR_MESSAGE)

        return NO_CONTENT

    def update(id, data):
        validation.validate_create_data(data)

        loss_events_collection.update_one({"_id": ObjectId(id)}, {"$set": data})

        response = Utils.serializeDict({"message": "updated"})

        return response, OK

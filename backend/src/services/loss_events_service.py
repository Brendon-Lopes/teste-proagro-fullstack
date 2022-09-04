from http.client import CREATED, OK
from database.connection import loss_events_collection
from utils.index import Utils
from validations.loss_events_validations import LossEventsValidation as validation


class LossEventsService:
    def get_all():
        cursor = loss_events_collection.find()

        response = Utils.serializeList(cursor)

        return response, OK

    def create(data):
        validation.validate_create_data(data)

        id = loss_events_collection.insert_one(data)

        response = Utils.serializeDict(
            {"message": "created", "id": str(id.inserted_id)}
        )

        return response, CREATED

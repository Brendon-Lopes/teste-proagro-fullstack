from http.client import CONFLICT, CREATED, OK
from database.connection import loss_events_collection
from utils.index import Utils
from validations.loss_events_validations import LossEventsValidation as validation
from geopy.distance import geodesic
from bson.objectid import ObjectId


class LossEventsService:
    def get_all():
        cursor = loss_events_collection.find()

        response = Utils.serialize_list(cursor)

        return response, OK

    def create(data):
        validation.validate_create_data(data)

        near = LossEventsService.check_for_near_occurrences(
            (data["localizacao"]["LAT"], data["localizacao"]["LONG"]),
            data["dataColheita"],
            data["evento"],
        )

        if near is not False:
            obj = {
                "message": Utils.CONFLICT_MESSAGE,
                "conflict": near,
            }
            response = Utils.serialize_dict(obj)
            return response, CONFLICT

        id = loss_events_collection.insert_one(data)

        response = Utils.serialize_dict(
            {"message": "created", "id": str(id.inserted_id)}
        )

        return response, CREATED

    def check_for_near_occurrences(coordinates, date, eventName, id=None):
        all_events = None

        if id is not None:
            all_events = loss_events_collection.find({"_id": {"$ne": ObjectId(id)}})
        else:
            all_events = loss_events_collection.find()

        for event in all_events:
            print(event["localizacao"], flush=True)
            event_coordinates = (
                event["localizacao"]["LAT"],
                event["localizacao"]["LONG"],
            )

            distance = geodesic(coordinates, event_coordinates).km

            db_date = Utils.transform_date(event["dataColheita"])
            current_date = Utils.transform_date(date)
            is_same_event = Utils.compare_strings(event["evento"], eventName)

            if distance <= 10 and not (db_date != current_date) and not is_same_event:
                return event

        return False

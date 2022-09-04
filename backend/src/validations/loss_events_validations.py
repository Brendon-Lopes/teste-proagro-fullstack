from http.client import BAD_REQUEST
from numpy import array_equal
from flask_restx import abort
from utils.index import Utils


class LossEventsValidation:
    def validate_create_data(data):
        if "_id" in data:
            abort(BAD_REQUEST, "Não é permitido alterar o id")

        attributes = list(data.keys())

        if not array_equal(attributes.sort(), Utils.CREATE_EVENT_REQUIRED_DATA.sort()):
            abort(BAD_REQUEST, Utils.REQUIRED_DATA_ERROR_MESSAGE)

        for key in attributes:
            if len(data[key]) == 0:
                abort(BAD_REQUEST, f"campo {key} não pode ser vazio")

        if type(data["localizacao"]) != dict:
            abort(BAD_REQUEST, "localizacao deve ser um objeto contendo LAT e LONG")

        localizacao = list(data["localizacao"].keys())
        if not array_equal(localizacao, Utils.LOCALIZACAO_REQUIRED_DATA):
            abort(BAD_REQUEST, "localizacao deve conter LAT e LONG")

        LAT, LONG = data["localizacao"]["LAT"], data["localizacao"]["LONG"]

        if LAT > 90 or LAT < -90:
            abort(BAD_REQUEST, "LAT deve estar entre -90 e 90")

        if LONG > 180 or LONG < -180:
            abort(BAD_REQUEST, "LONG deve estar entre -180 e 180")

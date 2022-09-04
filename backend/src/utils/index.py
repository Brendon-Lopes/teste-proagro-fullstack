from bson.json_util import default as json_default, dumps
from datetime import datetime


class Utils:
    CREATE_EVENT_REQUIRED_DATA = [
        "cpf",
        "dataColheita",
        "email",
        "evento",
        "localizacao",
        "nome",
        "tipoLavoura",
    ]

    REQUIRED_DATA_ERROR_MESSAGE = "Os campos nome, email, cpf, localizacao, tipoLavoura, dataColheita e evento são obrigatórios"

    LOCALIZACAO_REQUIRED_DATA = ["LAT", "LONG"]

    NOT_FOUND_ERROR_MESSAGE = (
        "Não foi encontrada comunicação de perda associada a esse id"
    )

    CONFLICT_MESSAGE = "Evento diverge de comunicação registrada na mesma data"

    mimetype = "application/json"

    def serialize_list(obj):
        return dumps([doc for doc in obj], default=json_default)

    def serialize_dict(obj):
        return dumps(obj, default=json_default)

    def transform_date(date_string):
        get_date = date_string.split("T")
        year, month, day = get_date[0].split("-")
        converted_data = datetime(int(year), int(month), int(day))
        return converted_data

    def compare_strings(string1, string2):
        return string1.lower() == string2.lower()

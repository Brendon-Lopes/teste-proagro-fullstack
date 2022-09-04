from bson.json_util import default as json_default, dumps


class Utils:
    CREATE_EVENT_REQUIRED_DATA = [
        "nome",
        "email",
        "cpf",
        "localizacao",
        "tipoLavroura",
        "dataColheita",
        "evento",
    ]

    REQUIRED_DATA_ERROR_MESSAGE = "Os campos nome, email, cpf, localizacao, tipoLavroura, dataColheita e evento são obrigatórios"

    LOCALIZACAO_REQUIRED_DATA = ["LAT", "LONG"]

    NOT_FOUND_ERROR_MESSAGE = (
        "Não foi encontrada comunicação de perda associada a esse id"
    )

    mimetype = "application/json"

    def serializeList(obj):
        return dumps([doc for doc in obj], default=json_default)

    def serializeDict(obj):
        return dumps(obj, default=json_default)

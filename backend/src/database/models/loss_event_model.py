from server.instance import server
from flask_restx import fields

api = server.api

location_fields = api.model(
    "Location",
    {
        "LAT": fields.Float,
        "LONG": fields.Float,
    },
)

loss_event_fields = api.model(
    "Loss Communication",
    {
        "nome": fields.String,
        "cpf": fields.String,
        "email": fields.String,
        "tipoLavroura": fields.String,
        "dataColheita": fields.String,
        "evento": fields.String,
        "localizacao": fields.Nested(location_fields),
    },
)

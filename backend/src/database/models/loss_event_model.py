from server.instance import server
from flask_restx import fields

api = server.api

event_types = [
    "CHUVA EXCESSIVA",
    "GEADA",
    "GRANIZO",
    "SECA",
    "VENDAVAL",
    "RAIO",
]

location_fields = api.model(
    "Localizacao",
    {
        "LAT": fields.Float(min=-90, max=90, required=True),
        "LONG": fields.Float(min=-180, max=180, required=True),
    },
)

loss_event_fields = api.model(
    "Comunicacao de perda",
    {
        "nome": fields.String(required=True),
        "cpf": fields.String(required=True),
        "email": fields.String(required=True),
        "tipoLavoura": fields.String(required=True),
        "dataColheita": fields.DateTime(dt_format="iso8601", required=True),
        "evento": fields.String(enum=event_types, required=True),
        "localizacao": fields.Nested(location_fields, required=True),
    },
)

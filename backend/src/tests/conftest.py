import pytest
from controllers.loss_events import *
from controllers.loss_events_by_id import *
from server.instance import server
from controllers.loss_events import LossEvents
from controllers.loss_events_by_id import LossEventsById


@pytest.fixture(scope="module")
def test_app():
    app = server.app

    server.api.add_resource(LossEvents, "/loss-events")
    server.api.add_resource(LossEventsById, "/loss-events/<string:id>")

    with app.app_context():
        yield app

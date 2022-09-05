from http.client import BAD_REQUEST, CONFLICT, CREATED, OK
from unittest.mock import Mock
from services.loss_events_service import loss_events_collection
from json import loads
from tests.mocks.sent_data_conflict_mock import SENT_DATA_CONFLICT_MOCK
from tests.mocks.sent_data_mock import SENT_DATA_MOCK
from utils.index import Utils
from tests.mocks.get_all_mock import GET_ALL_MOCK
from bson import ObjectId
from pymongo.results import InsertOneResult


def test_get_all(test_app):
    client = test_app.test_client()

    loss_events_collection.find = Mock(return_value=GET_ALL_MOCK)

    resp = client.get("/loss-events")

    data = loads(resp.data.decode())

    assert data == GET_ALL_MOCK

    assert resp.status_code == OK

    loss_events_collection.find.reset_mock()


def test_post_error_with_invalid_data(test_app):
    client = test_app.test_client()

    loss_events_collection.insert_one = Mock(return_value="id")

    resp = client.post("/loss-events", json={})

    data = loads(resp.data.decode())

    assert data == {"message": Utils.REQUIRED_DATA_ERROR_MESSAGE}

    assert resp.status_code == BAD_REQUEST

    loss_events_collection.insert_one.reset_mock()


def test_post_with_valid_data(test_app):
    client = test_app.test_client()

    id = InsertOneResult(ObjectId("6315900f5e781c7e48a5526b"), True)
    loss_events_collection.insert_one = Mock(return_value=id)
    loss_events_collection.find = Mock(return_value=[])

    resp = client.post("/loss-events", json=SENT_DATA_MOCK)

    data = loads(resp.data.decode())

    assert data == {"message": "created", "id": "6315900f5e781c7e48a5526b"}

    assert resp.status_code == CREATED

    loss_events_collection.insert_one.reset_mock()
    loss_events_collection.find.reset_mock()


def test_post_with_conflict(test_app):
    client = test_app.test_client()

    insert_one = loss_events_collection.insert_one = Mock(return_value=[])
    find = loss_events_collection.find = Mock(return_value=GET_ALL_MOCK)

    resp = client.post("/loss-events", json=SENT_DATA_CONFLICT_MOCK)

    data = loads(resp.data.decode())

    expected_data = {
        "message": Utils.CONFLICT_MESSAGE,
        "conflict": GET_ALL_MOCK[0],
    }

    assert insert_one.call_count == 0

    assert find.call_count == 1

    assert data == expected_data

    assert resp.status_code == CONFLICT

    find.reset_mock()
    insert_one.reset_mock()

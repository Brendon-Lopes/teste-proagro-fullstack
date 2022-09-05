from http.client import CONFLICT, NO_CONTENT, NOT_FOUND, OK
from services.loss_events_by_id_service import loss_events_collection
from unittest.mock import Mock
from json import loads
from tests.mocks.find_to_conflict_mock import FIND_TO_CONFLICT_MOCK
from tests.mocks.sent_data_mock import SENT_DATA_MOCK
from utils.index import Utils
from tests.mocks.get_by_id_mock import GET_BY_ID_MOCK
from pymongo.results import DeleteResult


def test_get_by_id_success(test_app):
    client = test_app.test_client()

    find_one = loss_events_collection.find_one = Mock(return_value=GET_BY_ID_MOCK)

    resp = client.get("/loss-events/6315900f5e781c7e48a5526b")

    data = loads(resp.data.decode())

    assert data == GET_BY_ID_MOCK

    assert resp.status_code == OK

    find_one.reset_mock()


def test_get_by_id_not_found(test_app):
    client = test_app.test_client()

    find_one = loss_events_collection.find_one = Mock(return_value=None)

    resp = client.get("/loss-events/6315900f5e781c7e48a5526b")

    data = loads(resp.data.decode())

    assert data == {"message": Utils.NOT_FOUND_ERROR_MESSAGE}

    assert resp.status_code == NOT_FOUND

    find_one.reset_mock()


def test_delete_one_success(test_app):
    client = test_app.test_client()

    delete_result = DeleteResult
    delete_result.deleted_count = 1

    delete_one = loss_events_collection.delete_one = Mock(return_value=delete_result)

    resp = client.delete("/loss-events/6315900f5e781c7e48a5526b")

    assert resp.status_code == NO_CONTENT

    delete_one.reset_mock()


def test_delete_one_not_found(test_app):
    client = test_app.test_client()

    delete_result = DeleteResult
    delete_result.deleted_count = 0

    delete_one = loss_events_collection.delete_one = Mock(return_value=delete_result)

    resp = client.delete("/loss-events/6315900f5e781c7e48a5526b")

    data = loads(resp.data.decode())

    assert data == {"message": Utils.NOT_FOUND_ERROR_MESSAGE}

    assert resp.status_code == NOT_FOUND

    delete_one.reset_mock()


def test_update_success(test_app):
    client = test_app.test_client()

    find_one = loss_events_collection.find_one = Mock(return_value=[])
    find_one_and_update = loss_events_collection.find_one_and_update = Mock(
        return_value=SENT_DATA_MOCK
    )

    resp = client.put("/loss-events/6315900f5e781c7e48a5526b", json=SENT_DATA_MOCK)

    assert resp.status_code == OK

    find_one_and_update.reset_mock()
    find_one.reset_mock()


def test_update_not_found(test_app):
    client = test_app.test_client()

    find_one = loss_events_collection.find_one = Mock(return_value=None)
    find_one_and_update = loss_events_collection.find_one_and_update = Mock(
        return_value=None
    )

    resp = client.put("/loss-events/6315900f5e781c7e48a5526b", json=SENT_DATA_MOCK)

    data = loads(resp.data.decode())

    assert data == {"message": Utils.NOT_FOUND_ERROR_MESSAGE}

    assert resp.status_code == NOT_FOUND

    find_one_and_update.reset_mock()
    find_one.reset_mock()


def test_update_conflict(test_app):
    client = test_app.test_client()

    find = loss_events_collection.find = Mock(return_value=FIND_TO_CONFLICT_MOCK)
    find_one_and_update = loss_events_collection.find_one_and_update = Mock(
        return_value=None
    )

    resp = client.put("/loss-events/6315900f5e781c7e48a5526b", json=SENT_DATA_MOCK)

    data = loads(resp.data.decode())

    expected_data = {
        "message": Utils.CONFLICT_MESSAGE,
        "conflict": FIND_TO_CONFLICT_MOCK[0],
    }

    assert data == expected_data

    assert resp.status_code == CONFLICT

    find_one_and_update.reset_mock()
    find.reset_mock()

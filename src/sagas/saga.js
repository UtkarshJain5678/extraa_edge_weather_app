import * as actions from '../constants/constant';
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { receiveApiData } from "../actions/action";
import { fetchData } from "./api";

function* getApiData(action) {
  try {
    const data = yield call(fetchData());
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest(actions.REQUEST_API_DATA, getApiData);
}
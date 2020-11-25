// import { put, takeLatest, all } from 'redux-saga/effects';
// import * as actions from '../constants/constant';

// const key="3fbb2b31fd3e77c536be64abc677a4d1";

// // City Fetch karo

// function* fetchData(city) {
//   const json = yield fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`)
//     .then(response => response.json());

//   yield put({ type: actions.Data_Fetched, json: json.articles || [{ error: json.message }] });
// }

// function* actionWatcher() {
//   yield takeLatest(actions.Get_Data, fetchData)
// }


// export default function* rootSaga() {
//   yield all([
//     actionWatcher(),
//   ]);
// }
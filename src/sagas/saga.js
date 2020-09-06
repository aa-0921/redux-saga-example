import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

function* ageUpAsync() {
  console.log('ageUpAsync')
  yield delay(4000);
  
  console.log('ageUpAsyncのdelay後')
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

export function* watchAgeUp() {
  console.log('watchAgeUp')
  yield takeLatest("AGE_UP", ageUpAsync);
}

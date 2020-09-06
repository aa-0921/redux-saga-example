import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

function* ageUpAsync() {
  console.log('ageUpAsync')
  yield delay(4000);

  console.log('ageUpAsyncのdelay後')
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

//sagaMiddleware.run(watchAgeUp);をしているので、
//コンポーネント内で、"AGE_UP"がdispatchされると、ageUpAsyncが実行される、ということかな？
export function* watchAgeUp() {
  console.log('watchAgeUp')
  yield takeLatest("AGE_UP", ageUpAsync);
}

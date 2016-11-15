import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { verifyNumber, VERIFY_NUMBER } from '../actions/numbersActions';
import Api from '../api/number';


// worker Saga: will be fired on VERIFY_NUMBER_REQUESTED actions
function* verifyNumberSaga(action) {
   try {
      const new_number = yield call(Api.verifyNumber, {...action.number, verified: !action.number.verified});
      yield put(verifyNumber.success(new_number));
   } catch (e) {
      yield put(verifyNumber.failure(action.number, e));
   }
}

function* mySaga() {
  yield* takeEvery(VERIFY_NUMBER.REQUEST, verifyNumberSaga);
}

export default mySaga;
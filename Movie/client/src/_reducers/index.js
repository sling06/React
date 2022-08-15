import { combineReducers } from 'redux';
import user from './user_reducer';


//action 을 redux에 등록
const rootReducer = combineReducers({
  user,
});

export default rootReducer;

import { combineReducers } from 'redux';
import auditListReducer from './auditReducer';
import authReducer from './authReducer';
import inventoryReducer from './inventoryReducer';
import outputReducer from './outputReducer';
export default combineReducers({
  authReducer,
  inventoryReducer,
  outputReducer,
  auditListReducer
});

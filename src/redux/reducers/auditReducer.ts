import { auditListActionType } from '../types/auditType';
import { auditListActionInterface } from '../interfaces/auditInterface';

interface auditState {
  data: object;
}
const initialState: auditState = {
  data: []
};
const auditListReducer = (
  state: auditState = initialState,
  action: auditListActionInterface
): auditState => {
  const { type, payload } = action;
  switch (type) {
    case auditListActionType.AUDITLIST_SUCCESS:
      return {
        ...state,
        data: payload
      };
    case auditListActionType.AUDITLIST_FAIL:
      return {
        ...state,
        data: payload
      };
    default:
      return state;
  }
};

export default auditListReducer;

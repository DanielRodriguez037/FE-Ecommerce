import { auditListActionType } from '../types/auditType';

export interface auditListInterface {
  id: number;
  aud_category: string;
  aud_description: string;
  aud_provider: string;
  aud_color: string;
  aud_ref_color: string;
  aud_product: string;
  aud_ref: string;
  aud_measure: string;
  aud_size: string;
  aud_amount: number;
  aud_unit_value: number;
  aud_create_by: string;
  aud_total: number;
  aud_create_at: string;
  aud_update_at: string;
}

export interface auditListFailInterface {
  message: string;
}

//---------------Audit List---------------
interface auditListSuccessAction {
  type: auditListActionType.AUDITLIST_SUCCESS;
  payload: auditListInterface | auditListFailInterface;
}

interface auditListFailAction {
  type: auditListActionType.AUDITLIST_FAIL;
  payload: auditListInterface;
}

export type auditListActionInterface = auditListSuccessAction | auditListFailAction;

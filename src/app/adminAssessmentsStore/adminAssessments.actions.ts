import { createAction, props } from '@ngrx/store';
import { IAdminData } from '../shared/IAdminData';

export const adminAssessmentsActionsData = createAction('[Collections] Admin Data');
export const adminAssessmentsActionsDataSuccess = createAction('[Collections] Admin Data Success', props<{ adminData: IAdminData[] }>());
export const adminAssessmentsActionsDataFailure = createAction('[Collections] Admin Data Failure');



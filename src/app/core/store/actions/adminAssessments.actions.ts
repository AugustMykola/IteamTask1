import { createAction, props } from '@ngrx/store';
import { IAdminData } from '../../../models/IAdminData';

export const adminAssessmentsActionsData = createAction(
  '[AdminAssessments] Admin Data'
);

export const adminAssessmentsActionsDataSuccess = createAction(
  '[AdminAssessments] Admin Data Success', props<{ adminData: IAdminData[] }>()
);

export const adminAssessmentsActionsDataFailure = createAction(
  '[AdminAssessments] Admin Data Failure'
);



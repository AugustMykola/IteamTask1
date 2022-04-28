import { createAction, props } from'@ngrx/store';
import { Data } from '../shared/IData';

export const userAssessmentsActionsData = createAction('[userAssessment]  Data');
export const userAssessmentsActionsDataSuccess = createAction('[userAssessment]  Data Success', props<{ data: Data[] }>());
export const userAssessmentsActionsDataFailure = createAction('[userAssessment]  Data Failure');


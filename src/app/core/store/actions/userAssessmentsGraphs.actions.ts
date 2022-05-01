import { createAction, props } from'@ngrx/store';
import { DataGraphs } from '../../../models/IDataGraphs';

export const userAssessmentsGraphsActionsData = createAction(
  '[userAssessmentsGraphs] Data', props<{id:number}>()
);

export const userAssessmentsGraphsActionsDataSuccess = createAction(
  '[userAssessmentsGraphs] Data Success', props<{ dataGraphs: DataGraphs }>()
);

export const userAssessmentsGraphsActionsDataFailure = createAction(
  '[userAssessmentsGraphs] Data Failure'
);


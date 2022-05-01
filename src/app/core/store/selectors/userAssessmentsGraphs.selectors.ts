import { createSelector } from '@ngrx/store';
import { userAssessmentsGraphsState } from "../reducers/userAssessmentsGraphs.reducers";

export const userAssessmentsGraphsSelector = (state:any) => state.userAssessmentsGraphsReducer;

export  const selectUserAssessmentsGraphsData = createSelector (
  userAssessmentsGraphsSelector,
  (state: userAssessmentsGraphsState) => state.dataGraphs,
)

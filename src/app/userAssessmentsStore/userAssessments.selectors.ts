import { createSelector } from '@ngrx/store';
import {userAssessmentsReducer, userAssessmentsState} from './userAssessments.reducers';

export const userAssessmentsSelector = (state: any) => state.userAssessmentsReducer;

export const selectUserAssessmentsData = createSelector(
  userAssessmentsSelector,
  (state: userAssessmentsState) => state.data,
);

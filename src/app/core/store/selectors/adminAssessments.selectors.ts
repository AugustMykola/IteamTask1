import { createSelector } from '@ngrx/store';
import  {adminAssessmentsReducer, adminAssessmentsState} from "../reducers/adminAssessments.reducers";

export const adminAssessmentsSelector = (state: any) => state.adminAssessmentsReducer;

export const selectAdminAssessmentsData = createSelector(
  adminAssessmentsSelector,
  (state: adminAssessmentsState) => state.adminData,
);

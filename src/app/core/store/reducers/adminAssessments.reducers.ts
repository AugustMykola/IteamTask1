import { Action, createReducer, on } from '@ngrx/store';

import * as adminAssessmentsActions from '../actions/adminAssessments.actions';
import {IAdminData} from "../../../models/IAdminData";

export interface adminAssessmentsState {
  adminData: IAdminData[] | null
}

export const initialState: adminAssessmentsState = {
  adminData: null
};


export function adminAssessmentsReducer(state: adminAssessmentsState | undefined, action: Action): adminAssessmentsState {
  return reducer(state, action);
}

function getAllAdminData(collections: IAdminData[]): IAdminData[] {
  const adminData: IAdminData[] = [];
  collections.forEach(collection => {
    adminData.push(collection);
  });
  return adminData;
}

const reducer = createReducer<adminAssessmentsState>(initialState,
  on(adminAssessmentsActions.adminAssessmentsActionsData, state => ({
    ...state,
  })),
  on(adminAssessmentsActions.adminAssessmentsActionsDataSuccess, (state, {adminData}) => ({
    ...state,
    adminData:getAllAdminData(adminData)
  })),
  on(adminAssessmentsActions.adminAssessmentsActionsDataFailure, (state) => ({
    ...state,
    data: null
  }))
);

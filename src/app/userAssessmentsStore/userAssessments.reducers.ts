import { Action, createReducer, on } from '@ngrx/store';
import { Data } from '../shared/IData'

import * as userAssessmentsActions from './userAssessments.actions';

export interface userAssessmentsState {
  data: Data[] | null
}

export const initialState: userAssessmentsState = {
  data: null
};


export function userAssessmentsReducer(state: userAssessmentsState | undefined, action: Action): userAssessmentsState {
  return reducer(state, action);
}

function getAllData(collections: Data[]): Data[] {
  const data: Data[] = [];
  collections.forEach(collection => {
    data.push(collection);
  });
  return data;
}


const reducer = createReducer<userAssessmentsState>(initialState,
  on(userAssessmentsActions.userAssessmentsActionsData, state => ({
    ...state,
  })),
  on(userAssessmentsActions.userAssessmentsActionsDataSuccess, (state, {data}) => ({
    ...state,
    data:getAllData(data)
  })),
  on(userAssessmentsActions.userAssessmentsActionsDataFailure, (state) => ({
    ...state,
    data: null
  }))
);


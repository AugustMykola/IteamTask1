import { Action, createReducer, on} from "@ngrx/store";
import { DataGraphs } from "../../../models/IDataGraphs";
import  * as userAssessmentsGraphsActions from '../actions/userAssessmentsGraphs.actions';

export interface  userAssessmentsGraphsState {
  dataGraphs: DataGraphs | null
}

export const initialState: userAssessmentsGraphsState = {
  dataGraphs: null
}

export function userAssessmentsGraphsReducer (state: userAssessmentsGraphsState | undefined, action: Action):
  userAssessmentsGraphsState {
  return graphsReducer(state, action)
};

const graphsReducer = createReducer<userAssessmentsGraphsState> (
  initialState,
  on(userAssessmentsGraphsActions.userAssessmentsGraphsActionsData, state =>({
    ...state
  })),
  on(userAssessmentsGraphsActions.userAssessmentsGraphsActionsDataSuccess, (state, {dataGraphs}) =>({
    ...state,
    dataGraphs
  })),
  on(userAssessmentsGraphsActions.userAssessmentsGraphsActionsDataFailure, state => ({
    ...state,
    dataGraphs:null
  }))
  );

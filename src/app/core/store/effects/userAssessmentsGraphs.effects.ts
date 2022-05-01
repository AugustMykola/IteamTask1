import { Injectable } from '@angular/core';
import {catchError, map, switchMap} from "rxjs/operators";
import { of } from 'rxjs';
import { Actions, createEffect, ofType} from "@ngrx/effects";

import { DataGraphsService } from '../../services/dataGraphs.service';
import * as userAssessmentsGraphsActions from '../actions/userAssessmentsGraphs.actions';
import { DataGraphs } from "../../../models/IDataGraphs";

@Injectable()

export class userAssessmentsGraphsEffects {
  constructor(
    private actions$: Actions,
    private dataGraphsService: DataGraphsService
  ) {}

  userAssessmentGraphsData$ = createEffect(() => this.actions$.pipe(
    ofType(userAssessmentsGraphsActions.userAssessmentsGraphsActionsData),
    switchMap( ({id}) => this.dataGraphsService.getGraphsData(id).pipe(
      map((dataGraphs: DataGraphs) =>
        userAssessmentsGraphsActions.userAssessmentsGraphsActionsDataSuccess({dataGraphs})),
      catchError( err => of(userAssessmentsGraphsActions.userAssessmentsGraphsActionsDataFailure()))
    ))
  ));

}

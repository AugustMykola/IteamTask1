import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs'
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {DataService} from '../../services/data.service'
import * as userAssessmentsActions from '../actions/userAssessments.actions'
import {Data} from '../../../models/IData'

@Injectable()

export class userAssessmentsEffects {
  constructor(
    private actions$: Actions,
    private dataService: DataService,
  ) {}

  userAssessmentData$ = createEffect(() => this.actions$.pipe(
    ofType(userAssessmentsActions.userAssessmentsActionsData),
    switchMap(()=> this.dataService.getData().pipe(
      map((data:Data[])=>userAssessmentsActions.userAssessmentsActionsDataSuccess({data})),
      catchError(err => of(userAssessmentsActions.userAssessmentsActionsDataFailure()))
    ))
  ))
}

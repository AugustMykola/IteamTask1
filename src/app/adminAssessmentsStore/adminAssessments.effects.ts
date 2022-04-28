import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';


import { AdminDataService } from '../services/adminData.service'
import * as adminAssessmentsActions from './adminAssessments.actions';
import { IAdminData } from '../shared/IAdminData';


@Injectable()
export class adminAssessmentsEffects {

  constructor(
    private actions$: Actions,
    private adminService: AdminDataService,
  ) {
  }

  /** Collection */
  adminAssessmentsData$ = createEffect(() => this.actions$.pipe(
    ofType(adminAssessmentsActions.adminAssessmentsActionsData),
    switchMap(() => this.adminService.getAdminData().pipe(
      map((adminData: IAdminData[]) => adminAssessmentsActions.adminAssessmentsActionsDataSuccess({adminData})),
      catchError(err => of(adminAssessmentsActions.adminAssessmentsActionsDataFailure()))
    ))
  ));
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';

import { userAssessmentsState } from 'src/app/userAssessmentsStore/userAssessments.reducers';
import * as userAssessmentsActions from '../../userAssessmentsStore/userAssessments.actions'
import { selectUserAssessmentsData } from 'src/app/userAssessmentsStore/userAssessments.selectors';
import {filter} from "rxjs";
import { Router} from "@angular/router";
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-userassessments',
  templateUrl: './userassessments.component.html',
  styleUrls: ['./userassessments.component.less']
})
export class UserassessmentsComponent implements OnInit {
  data$ = this.store.select(selectUserAssessmentsData).pipe(filter(res => Boolean(res)));
  userRole: string | null = '';

  constructor(
    public http: HttpClient,
    private store: Store<userAssessmentsState>,
    private router: Router,
  ) {}



  ngOnInit(): void {
    this.store.dispatch(userAssessmentsActions.userAssessmentsActionsData());
    this.userRole = localStorage.getItem('role');
  }

  openAdminPage(){
    this.router.navigate(['/adminassesments'])
  }
}


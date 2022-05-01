import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { filter } from "rxjs";
import { Router } from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";

import { userAssessmentsState } from 'src/app/core/store/reducers/userAssessments.reducers';
import * as userAssessmentsActions from '../../../core/store/actions/userAssessments.actions'
import { selectUserAssessmentsData } from 'src/app/core/store/selectors/userAssessments.selectors';
import { Data } from "../../../models/IData";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-userassessments',
  templateUrl: './userassessments.component.html',
  styleUrls: ['./userassessments.component.less']
})
export class UserassessmentsComponent implements OnInit {
  data$ = this.store.select(selectUserAssessmentsData).pipe(filter(res => Boolean(res)));
  userRole: string | null = '';
  ELEMENT_Data!: Data[];
  displayedColumns: string[] = ['id', 'image', 'name', 'users_resolved','graphsrouter'];
  dataSource = new MatTableDataSource<Data>(this.ELEMENT_Data);

  constructor(
    public http: HttpClient,
    private store: Store<userAssessmentsState>,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(userAssessmentsActions.userAssessmentsActionsData());
    this.userRole = localStorage.getItem('role');
    this.removeDataToDataSource()
  };

  openAdminPage() {
    this.router.navigate(['/adminassesments'])
  };

  navigateToLoginPage() {
    this.router.navigate(['/login'])
    this.authService.logout()
  };

  removeDataToDataSource() {
    this.data$.pipe(filter(res => Boolean(res))).subscribe(response => {
      this.dataSource.data = response as Data[]
    })
  };

}


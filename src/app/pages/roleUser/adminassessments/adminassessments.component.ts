import { Component, OnInit } from '@angular/core';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { Router } from "@angular/router";
import { filter } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";

import {adminAssessmentsState} from "../../../core/store/reducers/adminAssessments.reducers";
import * as adminAssessmentsActions from "../../../core/store/actions/adminAssessments.actions";
import { selectAdminAssessmentsData } from "../../../core/store/selectors/adminAssessments.selectors";
import { IAdminData } from "../../../models/IAdminData";
import { AuthService } from "../../../core/services/auth.service";

@Component({
  selector: 'app-adminassessments',
  templateUrl: './adminassessments.component.html',
  styleUrls: ['./adminassessments.component.less']
})
export class AdminassessmentsComponent implements OnInit {
  tableVision: boolean = false;

  adminData$ = this.store.select(selectAdminAssessmentsData).pipe(filter(res => Boolean(res)))
  constructor(
    public http: HttpClient,
    private store: Store<adminAssessmentsState>,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(adminAssessmentsActions.adminAssessmentsActionsData());
  }

  navigateToAssessmentsPage() {
    this.router.navigate(['/userassesments'])
  }

  donwload() {
    const options = {
      fieldSeparator: ' ',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      useBom: true,
      headers: ["first_name", "last_name", "Email", "Groups"]
    };
    new ngxCsv(this.getDataArray(), 'Users', options);
  }

  getDataArray() {
    const array: Array<IAdminData> =[];
    this.adminData$.pipe(filter(res => Boolean(res))).subscribe(response => {
      response?.forEach(element => {
        array.push(element)
      })
    })
    return array
  }

  showTable() {
    this.tableVision = !this.tableVision
  }

  navigateToLoginPage() {
    this.router.navigate(['/login']);
    this.authService.logout()
  }

}

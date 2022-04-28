import { Component, OnInit } from '@angular/core';
import { ngxCsv } from 'ngx-csv/ngx-csv';

import {filter} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {adminAssessmentsState} from "../../adminAssessmentsStore/adminAssessments.reducers";
import {Store, select} from "@ngrx/store";
import * as adminAssessmentsActions from "../../adminAssessmentsStore/adminAssessments.actions";
import {selectAdminAssessmentsData} from "../../adminAssessmentsStore/adminAssessments.selectors";
import {IAdminData} from "../../shared/IAdminData";


@Component({
  selector: 'app-adminassessments',
  templateUrl: './adminassessments.component.html',
  styleUrls: ['./adminassessments.component.less']
})
export class AdminassessmentsComponent implements OnInit {
  adminData$ = this.store.select(selectAdminAssessmentsData).pipe(filter(res => Boolean(res)))
  constructor(
    public http: HttpClient,
    private store: Store<adminAssessmentsState>
  ) { }


  ngOnInit(): void {
    this.store.dispatch(adminAssessmentsActions.adminAssessmentsActionsData());
  }

  donwload(){
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
 getDataArray(){
   const array: Array<IAdminData> =[];
   this.adminData$.pipe(filter(res => Boolean(res))).subscribe(response => {
     response?.forEach(element => {
       array.push(element)
     })
   })
   return array
  }
}

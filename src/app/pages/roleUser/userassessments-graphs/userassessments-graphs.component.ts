import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { userAssessmentsGraphsState } from "../../../core/store/reducers/userAssessmentsGraphs.reducers";
import { Store, select } from "@ngrx/store";
import { filter } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

import { selectUserAssessmentsGraphsData } from "../../../core/store/selectors/userAssessmentsGraphs.selectors";
import * as userAssessmentsGraphsActions from '../../../core/store/actions/userAssessmentsGraphs.actions'
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-userassessments-graphs',
  templateUrl: './userassessments-graphs.component.html',
  styleUrls: ['./userassessments-graphs.component.less']
})
export class UserassessmentsGraphsComponent implements OnInit {

  dataGraphs$ = this.store.select(selectUserAssessmentsGraphsData).pipe(filter(res => Boolean(res)));

  constructor(
    public http: HttpClient,
    private store: Store<userAssessmentsGraphsState>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

    const id = Number(this.activatedRoute.snapshot.queryParamMap.get('id'));
    this.store.dispatch(userAssessmentsGraphsActions.userAssessmentsGraphsActionsData({ id: id }));

    this.dataGraphs$.pipe(filter(res => Boolean(res))).subscribe((response) => {
      if(response){
        const type = response.type
        const lables = Object.keys(response.data);
        const data = Object.values(response.data)
        this.initGraph(type,lables, data)
      }
    })
  }

  initGraph(type: any, labels: string[], data: number[]) {

    const myChart = new Chart('graphsChart', {
      type,
      data: {
        labels,
        datasets: [{
          label: `Graph`,
          data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }

  navigateToAssessmentsPage() {
    this.router.navigate(['/userassesments']);
  }

  navigateToLoginPage() {
    this.router.navigate(['/login']);
    this.authService.logout()
  }

}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

import { DataGraphs } from '../shared/IDataGraphs';


@Injectable({
  providedIn: 'root'
})
export class DataGraphsService {
  path = environment
  constructor(private http: HttpClient) { }

  getGraphsData(id: number): Observable<DataGraphs> {
    return this.http.get<DataGraphs>(`${this.path.path}/api/userassessment/graph?id=${id}`);
  }
}

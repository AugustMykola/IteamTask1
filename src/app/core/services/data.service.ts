import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";

import { Data } from '../../models/IData';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  path = environment;
  constructor(private http: HttpClient) {}

  getData(): Observable<Array<Data>> {
    return this.http.get<Array<Data>>(`${this.path.path}/api/userassessments`);
  }

}

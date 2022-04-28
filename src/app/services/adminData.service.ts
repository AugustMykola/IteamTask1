import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

import { IAdminData } from '../shared/IAdminData';


@Injectable({
  providedIn: 'root'
})
export class AdminDataService {
  path = environment;
  constructor(private http: HttpClient) { }

  getAdminData(): Observable<Array<IAdminData>> {
    return this.http.get<Array<IAdminData>>(`${this.path.path}/api/users`)
  }

}

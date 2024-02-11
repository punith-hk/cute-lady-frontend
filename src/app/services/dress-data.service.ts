import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DressDataService {

  constructor(
    public http: HttpClient
  ) { }

  getDressDetails(): Observable<any> {
    return this.http.get("http://localhost:7000/api/data")
  }

  postNewDressDetails(data: any): Observable<any> {
    return this.http.post("http://localhost:7000/api/post", data)
  }
}

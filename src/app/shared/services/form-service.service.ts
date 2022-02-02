import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl ='http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(public http: HttpClient) { }

  postVolunteerForm(userData:any):Observable<any>{
    return this.http.post(`${baseUrl}/applications`, userData);
  }

}

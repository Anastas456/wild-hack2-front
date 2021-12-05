import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl =''; //здесь должен быть url

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(public http: HttpClient) { }

  postVolunteerForm(userData:any):Observable<any>{
    return this.http.post(`${baseUrl}/save`, userData);   //возможно другой путь
  }

}

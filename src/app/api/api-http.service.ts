import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/resume';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(baseUrl);
  }
}

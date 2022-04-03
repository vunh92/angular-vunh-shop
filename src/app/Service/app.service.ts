import { Injectable } from '@angular/core';

// Gọi HttpClient, HttpHeaders
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Gọi observable
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/api/';
}

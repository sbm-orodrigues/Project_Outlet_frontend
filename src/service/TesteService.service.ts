import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteServiceService {
  static getById: any;
  static getShoeById: any;

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://localhost:8000/shoes/');
  }

  getByGender(gender: String) {
    return this.http.get(`http://localhost:8000/shoes/${gender}`);
  }

  getShoeById(id: number) {
    return this.http.get<any>(`http://localhost:8000/shoes/${id}`);
  }
}

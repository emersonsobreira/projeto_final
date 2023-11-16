
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {
  url = 'http://localhost:3000/professores'

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get(this.url)
  }
}

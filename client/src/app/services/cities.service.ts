import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgRedux } from 'ng2-redux';
import { Store } from 'redux';
import { ActionType } from '../redux/action';
import { City } from '../models/city';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private httpClient: HttpClient) {}
    
  public getAllCities(): Observable<City[]> {
    return this.httpClient.get<City[]>("/assets/json/cities.json");        
  }
}


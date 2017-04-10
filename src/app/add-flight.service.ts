import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class AddFlightService {
  
  constructor(private http: Http, private auth: AuthService) {}


  logFlightData (formData) {
     
    return this.http.post('/logData', formData);
  }

} 

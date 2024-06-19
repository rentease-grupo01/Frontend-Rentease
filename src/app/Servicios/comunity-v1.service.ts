import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baserUrl from './helper';

export interface Community {
  id: number;
  name: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class ComunityV1Service {

  constructor(private http: HttpClient) { }

  createCommunity(communityData: any): Observable<any> {
    return this.http.post(`${baserUrl}/community/create`, communityData);
  }

  getCommunities(): Observable<Community[]> {
    return this.http.get<Community[]>(`${baserUrl}/community/list`); // Asegúrate que la URL sea correcta
  }


}

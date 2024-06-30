import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentHistoryService {
  private apiUrl = 'http://localhost:8081/payments'; // Asegúrate de que la URL sea correcta

  constructor(private http: HttpClient) { }

  getPaymentHistoryByUserId(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}`);
  }
}

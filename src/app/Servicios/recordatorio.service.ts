// payment-reminders.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentRemindersService {
  private apiUrl = 'http://localhost:8081/api/notifications';

  constructor(private http: HttpClient) { }

  getNotificationsByUserId(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}`);
  }

  markNotificationAsRead(notificationId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/markAsRead/${notificationId}`, {});
  }
}

import { Component, OnInit } from '@angular/core';
import { PaymentRemindersService } from '../../../Servicios/recordatorio.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recordatorio-pagos',
  templateUrl: './recordatorio-pagos.component.html',
  styleUrls: ['./recordatorio-pagos.component.css']
})
export class PaymentRemindersComponent implements OnInit {
  paymentReminders: any[] = [];

  constructor(
    private paymentRemindersService: PaymentRemindersService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const userId = 1; // Aquí deberías obtener el ID del usuario de manera dinámica
    this.paymentRemindersService.getNotificationsByUserId(userId).subscribe(data => {
      this.paymentReminders = data;

      // Mostrar notificaciones
      this.showNotifications();
    });
  }

  showNotifications() {
    this.paymentReminders.forEach(notification => {
      this.openSnackBar(notification.message, 'Marcar como leído', notification.id);
    });
  }

  openSnackBar(message: string, action: string, notificationId: number) {
    let snackBarRef = this.snackBar.open(message, action, {
      duration: 5000, // Duración en milisegundos
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });

    snackBarRef.onAction().subscribe(() => {
      this.paymentRemindersService.markNotificationAsRead(notificationId).subscribe(() => {
        // Eliminar la notificación de la lista local después de marcarla como leída
        this.paymentReminders = this.paymentReminders.filter(n => n.id !== notificationId);
      });
    });
  }
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentHistoryService } from '../../../Servicios/payment-history.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {
  displayedColumns: string[] = ['paymentId', 'metodoDePago', 'fecha', 'userId', 'username'];
  dataSource = new MatTableDataSource<any>(); // Inicializar con un valor vacío

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private paymentHistoryService: PaymentHistoryService) { }

  ngOnInit(): void {
    const userId = 1; // Aquí deberías obtener el ID del usuario de manera dinámica
    this.paymentHistoryService.getPaymentHistoryByUserId(userId).subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { AccommodationService } from './accommodation.service'; 
@Component({
  selector: 'app-list-accommodations',
  templateUrl: './list-accommodations.component.html',
  styleUrls: ['./list-accommodations.component.css']
})
export class ListAccommodationsComponent implements OnInit {
  accommodations: any[] = []; 

  constructor(private accommodationService: AccommodationService) { }

  ngOnInit(): void {
    this.loadAccommodations();
  }

  loadAccommodations() {
 
    this.accommodationService.getAccommodations().subscribe(
      (data: any[]) => {
        this.accommodations = data;
      },
        (      error: any) => {
        console.error('Error loading accommodations: ', error);
      }
    );
  }
}

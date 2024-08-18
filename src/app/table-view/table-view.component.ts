import { Component, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})

export class TableViewComponent {

  data: any[] = [];
  headers: string[] = [];
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  editingRow: any = null;
  editingRowIndex: number | null = null;

  constructor(private dataService: DataService, private route: Router) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
        if (this.data.length > 0) {
          this.displayedColumns = Object.keys(this.data[0]);
          this.dataSource = new MatTableDataSource(this.data);
        }
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  startEditRow(row: any, index: number): void {
    this.editingRow = { ...row };
    this.editingRowIndex = index;
    console.log('Edit row', row);
  }

}


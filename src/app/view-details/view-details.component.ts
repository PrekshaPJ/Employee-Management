import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent {
  item: any;
  constructor(private dataservice: DataService, private router: ActivatedRoute) {

  }
  ngOnInit(): void {

    const id = this.router.snapshot.paramMap.get('id');
    this.dataservice.getData().subscribe((data) => {
      this.item = data.find(d => d.id == id);
    });

  }
}

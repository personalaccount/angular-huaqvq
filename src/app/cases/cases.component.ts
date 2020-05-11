import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Cases } from '../cases'

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  private id: any;

  displayedColumns: string[] = ['name', 'age', 'status'];
  data: Cases[] = [];
  isLoadingResults = true;
  constructor(private api: ApiService) {}

  getCaseId() {
    return this.id;
  }
  ngOnInit(): void {}
}

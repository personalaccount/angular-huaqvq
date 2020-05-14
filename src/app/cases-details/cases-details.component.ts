import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Cases } from '../cases';

@Component({
  selector: 'app-cases-details',
  templateUrl: './cases-details.component.html',
  styleUrls: ['./cases-details.component.css']
})
export class CasesDetailsComponent implements OnInit {
  cases: Cases = {
    _id: '',
    name: '',
    gender: '',
    age: null,
    address: '',
    city: '',
    country: '',
    status: '',
    updated: null
  };

  isLoadingResults = true;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}

  getCasesDetails(id: string) {
    this.api.getCasesById(id).subscribe((data: any) => {
      this.cases = data;
      console.log('Loaded cases' + this.cases);
      this.isLoadingResults = false;
    });
  }

  ngOnInit(): void {
    this.getCasesDetails(this.route.snapshot.params.id);
  }
}

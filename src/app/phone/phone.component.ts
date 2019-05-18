import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.sass']
})
export class PhoneComponent implements OnInit {
  phoneCompany;
  phone1;
  phone2;
  phone3;
  number;
  url = 'ec2-54-180-108-238.ap-northeast-2.compute.amazonaws.com';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  send() {
    this.http.post(`${this.url}/phoneAuth`, {
      phone: `${this.phone1}${this.phone2}${this.phone3}`
    }).subscribe(resp => {
      console.log(resp)
    });
  }

  verify() {
    this.http.post(`${this.url}/phoneAuthCheck`, {
      phone: `${this.phone1}${this.phone2}${this.phone3}`,
      token: this.number
    }).subscribe(resp => {
      console.log(resp)
      this.router.navigate(['/survey'])
    });
  }
}

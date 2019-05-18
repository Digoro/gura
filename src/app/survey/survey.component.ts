import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  form: FormGroup;
  types = ["늦은 밤 배달음식", '운동 부족', '잦은 술자리', '달콤한 디저트', '맵고 짠 인스턴트 식품'];
  foods = ['치킨 🍗', '족발 🐷', '피자 🍕', '삼겹살 🥓', '빵 🥐', '기타'];
  surveyType = 1;
  name;
  date;
  sex;
  type;
  food;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('name'),
      date: new FormControl('date')
    });
  }

  onSelectSex(sex) {
    this.sex = sex;
  }

  onSelectType(type) {
    this.type = type;
  }

  onSelectFood(food) {
    this.food = food;
  }

  next1() {
    this.surveyType = 2;
  }

  pre2() {
    this.surveyType = 1;
  }

  next2() {
    this.surveyType = 3;
  }

  pre3() {
    this.surveyType = 2;
  }
  next3() {
    const result = {
      name: this.name,
      birthDate: this.date,
      gender: this.sex,
      disturbanceFactor: this.types.indexOf(this.type),
      favoriteFood: this.foods.indexOf(this.food)
    }
    console.log(result);
    this.http.post('http://3.112.142.184:5000/survey', result).subscribe(resp => {
      console.log(resp);
    })
  }
}

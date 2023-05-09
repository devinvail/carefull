import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  happyFlowerPath = "../../assets/lottie/MAIN.json";
  transitionPath = "../../assets/lottie/fireworks.json";
  data: any;
  flower = true;
  options1: AnimationOptions = {
    path: this.happyFlowerPath,
  };
  options2: AnimationOptions = {
    path: this.transitionPath,
  };
  constructor() {}

  public transition() {
    this.flower = !this.flower;
  }

}

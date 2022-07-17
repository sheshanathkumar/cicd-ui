import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CicdService } from '../service/cicd.service';

@Component({
  selector: 'app-digital-watch',
  templateUrl: './digital-watch.component.html',
  styleUrls: ['./digital-watch.component.css']
})
export class DigitalWatchComponent implements OnInit {

  isSunSet : boolean = false;
  constructor() { }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.getWatch();
    // });
    this.getWatch();
  }

  getWatch() {

    let hourHand = document.getElementById('hour-hand');
    let minHand = document.getElementById('min-hand');
    let secHand = document.getElementById('sec-hand');
    let clock = document.querySelector('.clock');
    let personName = document.querySelector('.person-name');


    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    var seconds = new Date().getSeconds();

    console.log(hour + " : " + minute + " : " + seconds)
    this.isSunSet = true ;
    //document.body.style.backgroundImage = (isSunSet) ? 'url(night-bg.jpg)' : "url(day-bg.jpg)";
    //document.body.style.background = (isSunSet) ? '#2a2c2c' : "#fff";
    // clock.style.color = (isSunSet) ? '#fff' : "#000";
    // personName.style.color = (isSunSet) ? '#fff' : "#000";

    var secDegree = seconds * 6;
    secHand.style.transform = `rotate(${secDegree}deg)`;

    var minDegree = minute * 6;
    minHand.style.transform = `rotate(${minDegree}deg)`;


    var hrDegree = (hour * 30 + (1 / 2 * minute)) % 360;
    console.log(hrDegree);

    hourHand.style.transform = `rotate(${hrDegree}deg)`;


  }

}

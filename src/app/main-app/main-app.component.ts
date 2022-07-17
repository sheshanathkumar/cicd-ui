import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CicdService } from '../service/cicd.service';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit {

  test:String = "text";
  env:String = "Env";
  

  constructor(private cicdService : CicdService,
    private route: Router) { }

  ngOnInit(): void {
  }

  getTestApi() {
    this.test = "";
    this.cicdService.getTest().subscribe(
      (data) => {
        console.log(data);
        this.test = data.msg +"! status="+data.code;
      }
    );
  }

  getEnvApi() {
    this.env = "";
    this.cicdService.getEnv().subscribe(
      (data) => {
        console.log(data);
        this.env = data.msg +"! status="+data.code;
      }
    );
  }

  gotoWatch(){
    this.route.navigateByUrl('watch');
  }

}

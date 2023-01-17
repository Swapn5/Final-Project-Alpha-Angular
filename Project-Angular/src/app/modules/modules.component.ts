import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  showFiller = false;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigateToHome(){
    this.router.navigate(['navigate/home']);
  }

  navigateToLogin(){
    this.router.navigate(['login']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  adm = false;

  // elm: any
  showProfile: any = true
  showProfileInfo: any = true
  showAdm: any = false;

  idLogin: number
  scoreLogin: number
  nameLogin: string
  loginAdm: string

  user : any

  constructor(private router: Router, private service: ServiceService) { 
  
    
  }

  ngOnInit(): void {

    this.router.events.subscribe(() => {
      this.service.getLocalStorage().subscribe((data) => {

        this.idLogin = data.id
        this.nameLogin = data.login
        this.scoreLogin = data.score
        this.loginAdm = data.loginAdm
        
        this.idLogin >= 0 ? this.showProfile = false : this.showProfile = true
        this.loginAdm != null ? this.showAdm = true : this.showAdm = false 
        
        // console.log(this.showAdm)
      })
    })

   
  }
  
   logout() {
     localStorage.clear()
     this.user = null
   }
  

  goToInicial() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  }

  

  

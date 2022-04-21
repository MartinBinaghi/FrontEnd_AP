import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    const navLink = document.querySelectorAll('.nav__link')
    navLink.forEach(n => n.addEventListener ('click', this.linkAction))

    window.addEventListener('scroll', this.scrollActive)

    window.addEventListener('scroll', this.scrollHeader)
  }

  menuShow(){
    const navMenu = document.getElementById('nav-menu')!
    const navToggle = document.getElementById('nav-toggle')

    if(navToggle){
      navToggle.addEventListener ('click', () =>{
          navMenu.classList.add('show-menu')
      })
    }
  }

  menuHidden(){
    const navClose = document.getElementById('nav-close')
    const navMenu = document.getElementById('nav-menu')!

    if(navClose){
      navClose.addEventListener ('click', () =>{
          navMenu.classList.remove('show-menu')
      })
    }
  }

  
  linkAction(){
    const navMenu = document.getElementById('nav-menu')!
   // when we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
  }

  scrollActive(){
    const sections = document.querySelectorAll('section[id]')
    const scrollY = window.pageYOffset

    sections.forEach(current => {
      const sectionHeight = (current as HTMLElement).offsetHeight
      const sectionTop = (current as HTMLElement).offsetTop - 50;
      const sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav__menu a[href*=' + sectionId + ']')!.classList.add('active-link')    
      }else{
          document.querySelector('.nav__menu a[href*=' + sectionId + ']')!.classList.remove('active-link')
      }
    })
  }

  scrollHeader(){
    const nav = document.getElementById('header')!
    const scrollY = window.pageYOffset
    if (scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
}

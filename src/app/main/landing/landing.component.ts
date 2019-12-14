import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

  constructor() { }

  ngOnInit() {
    this.isParticle()
  }

  scrollTo(section: string) {
    if (section === 'about') {
      $('html,body').animate({
        scrollTop: $('#about').offset().top
      },
        'slow');
    } else if (section === 'message') {
      $('html,body').animate({
        scrollTop: $('#message').offset().top
      },
        'slow');
    } else if (section === 'page-header') {
      $('html,body').animate({
        scrollTop: $('#page-header').offset().top
      },
        'slow');
    }
  }

  isParticle() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': 10,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };
    this.myParams = {
      particles: {
        number: {
          value: 35
        },
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          }
        },
        repulse: {
          distance: 3,
          duration: 3
        },
        color: {
          value: '#FFFFFF'
        },
        shape: {
          type: 'circle'
        }
      }
    }
  }

}

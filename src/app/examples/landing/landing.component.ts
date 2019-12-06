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

  constructor() { }

  ngOnInit() { }

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

}

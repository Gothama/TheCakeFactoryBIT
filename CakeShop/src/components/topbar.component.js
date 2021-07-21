import React, { Component } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/style.css"


import $ from 'jquery';

export default class Navbar extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: true
    });
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
        $('#topbar').addClass('topbar-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
        $('#topbar').removeClass('topbar-scrolled');
      }
    });

    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('#topbar').addClass('topbar-scrolled');
    }

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, .mobile-nav');

    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop() + 200;

      nav_sections.each(function () {
        var top = $(this).offset().top,
          bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          if (cur_pos <= bottom) {
            main_nav.find('li').removeClass('active');
          }
          main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
        if (cur_pos < 300) {
          $(".nav-menu ul:first li:first").addClass('active');
        }
      });
    });
  }
  render() {
    return (
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex">
          <div className="contact-info mr-auto">

          </div>
          <div className="languages">
          </div>
        </div>
      </div>

    );
  }
}


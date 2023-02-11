/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('icon-show');
        }
        else {
            entry.target.classList.remove('icon-show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.icon-hidden')
hiddenElements.forEach((el) => observer.observe(el));

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('project-show');
        }
        else {
            entry.target.classList.remove('project-show');
        }
    });
});

const hiddenProjectElements = document.querySelectorAll('.project-hidden')
hiddenProjectElements.forEach((el) => projectObserver.observe(el));

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const hackerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let iteration = 0;
  
            clearInterval(interval);

            interval = setInterval(() => {
              entry.target.innerText = entry.target.innerText
                .split("")
                .map((letter, index) => {
                  if(index < iteration) {
                    return entry.target.dataset.value[index];
                  }
                
                  return letters[Math.floor(Math.random() * 26)]
                })
                .join("");
              
              if(iteration >= entry.target.dataset.value.length){ 
                clearInterval(interval);
              }
              
              iteration += 1 / 3;
            }, 20);
        }
    });
});

const hackerProjectElements = document.querySelectorAll('.hacker-text')
hackerProjectElements.forEach((el) => hackerObserver.observe(el));
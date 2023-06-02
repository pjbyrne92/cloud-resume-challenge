/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
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

  // Define the Lambda function endpoint URL
  const lambdaEndpointUrl = 'https://eucf7ckytmltifhybaimn67kwm0ydhjb.lambda-url.eu-west-1.on.aws/';

  // Define the HTML div that will display the visitor count
  const visitorCountDiv = document.getElementById('visitor-count');

  // Make a request to the Lambda function to get the visitor count
  fetch(lambdaEndpointUrl)
    .then(response => response.text())
    .then(count => {
      // Update the HTML div with the visitor count
      visitorCountDiv.textContent = `Visitor count: ${count}`;
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error('Failed to retrieve visitor count:', error);
      visitorCountDiv.textContent = 'Failed to retrieve visitor count';
    });

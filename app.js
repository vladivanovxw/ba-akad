'use strict';

// task 1

let breadCrumbs = document.querySelector('.ba-breadcrumbs__item');
let list = document.querySelectorAll('.ba-breadcrumbs')[0];
let textBreadCrumbs = document.createTextNode('Company');
let newBreadCrumb = breadCrumbs.cloneNode(true);
list.appendChild(newBreadCrumb);
let breadCrumbLink = document.querySelectorAll('.ba-breadcrumbs__link')[2];
breadCrumbLink.textContent = ' Company';

// task 2

let spanRed = document.querySelectorAll('.ba-benefit__title span');
spanRed[0].style.color = 'red';
spanRed[1].style.color = 'red';
spanRed[2].style.color = 'red';

// task 3

let newSrc = document.querySelectorAll('.team-member img');
for (let i = 0; i < newSrc.length; i++) {
  let src = newSrc[i].setAttribute('src', 'shorturl.at/nsuFK');
  console.log(src);
}
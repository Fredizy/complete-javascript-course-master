'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal ))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


btnScrollTo.addEventListener('click', function(e) {
  const sec1 = section1.getBoundingClientRect();
   console.log(sec1);

   console.log(e.target.getBoundingClientRect());
   
   console.log('height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
   );

   `<div>${}</div>`

   window.scrollTo({
    left: sec1.left + window.pageXOffset, 
     top:  sec1.top + window.pageYOffset,
     behavior: 'smooth',
    });

    section1.scrollIntoView({behavior: 'smooth'});
})

document.querySelectorAll('.nav__link').forEach(function(e) {
  e.addEventListener('click', function(e) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  })
});


// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContainer = document.querySelector('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');

// tabsContainer.addEventListener('click', function(e) {
//      const clicked = e.target.parentElement;
//      console.log(clicked);
//      clicked.classList.add('.operations__tab--active')
// });

// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function(e) {

// });

// if(window.scrollY > initialCoords.top) {
//   nav.classList.add('sticky') 
// }
//  else {
//   nav.classList.remove('sticky')
//  }

const obsCallback = function () {};
const obsOptions = {
  root: null 
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'We use cookie for improved functionality and analytics';
// message.innerHTML = `We use cookie for improved functionality and analytics. 
//     <button class="btn btn--close-cookie"> Get it!</button>
//  `;
//  header.prepend(message);
// //  header.append(message);

// header.append(message.cloneNode(true));

// document.querySelector('.btn--close-cookie').
// addEventListener('click', function() {
//   message.remove();
// });

// message.style.backgroundColor = '#37393d';
// message.style.width = '120%';

// console.log(getComputedStyle(message).color);

// message.style.height = Number.parseFloat(getComputedStyle(message).height - 40 + 'px');

// document.documentElement.style.setProperty('--color-primary', 'orangered')

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo. className);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.getElementById('section--1');

// btnScrollTo.addEventListener('click', function(e) {
//   const sec1 = section1.getBoundingClientRect();
//    console.log(sec1);

//    console.log(e.target.getBoundingClientRect());
   
//    console.log('height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//    );

//    window.scrollTo({
//     left: sec1.left + window.pageXOffset, 
//      top:  sec1.top + window.pageYOffset,
//      behavior: 'smooth',
//     });

//     section1.scrollIntoView({behavior: 'smooth'});
// })

// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function(e) {
//   alert('addEventlistener: Great! you are reading the heading ')
// })

// setTimeout(() => h1.addEventListener('mouseenter', h1), 3000);

// const navLink = document.querySelector('.nav__link')
// const randomint = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomint(0, 255)},${randomint(0, 255)},${randomint(0, 255)})`

// navLink.addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
// })
// navLink.addEventListener('click', function(e) {
//     console.log('LiNK');
// })
// navLink.addEventListener('click', function(e) {
//     console.log('LiNK');
// })

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('operations__tab-container');
const tabsContent = document.querySelectorAll('operations__content');


tabs.addEventListener('click', function(e) {
  const clicked = e.target.closest('operations__tab');
  console.log(clicked);

  if (!clicked) returns;
  
  tabs.forEach(t=> t.classList.remove)
  clicked.classList.add('operations__tab--active');

  if(clicked) {
    
  }
});


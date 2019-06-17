const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



const navigationBar = document.querySelector('nav').children;
navigationBar[0].textContent = siteContent['nav']['nav-item-1'];
navigationBar[1].textContent = siteContent['nav']['nav-item-2'];
navigationBar[2].textContent = siteContent['nav']['nav-item-3'];
navigationBar[3].textContent = siteContent['nav']['nav-item-4'];
navigationBar[4].textContent = siteContent['nav']['nav-item-5'];
navigationBar[5].textContent = siteContent['nav']['nav-item-6'];

const newAtag = document.createElement('a');
newAtag.textContent = 'Goodbye';
const newAtag2 = document.createElement('a');
newAtag2.textContent = 'Hello';

const newNavWord = document.querySelector('nav');
newNavWord.appendChild(newAtag);
newNavWord.prepend(newAtag2);


const HeaderNav = document.querySelectorAll('a');
HeaderNav.forEach(a => {
  a.style.color = 'green';
});



const CtaImg = document.getElementById('cta-img');
CtaImg.setAttribute('src', siteContent['cta']['img-src']);

const DomIsAwesome = document.querySelector('h1');
DomIsAwesome.textContent = siteContent['cta']['h1'];

const Button1 = document.querySelector('button');
Button1.textContent = siteContent['cta']['button'];

const TopContentH4 = document.querySelectorAll('h4');
TopContentH4[0].textContent = siteContent['main-content']['features-h4'];
TopContentH4[1].textContent = siteContent['main-content']['about-h4'];
TopContentH4[2].textContent = siteContent['main-content']['services-h4'];
TopContentH4[3].textContent = siteContent['main-content']['product-h4'];
TopContentH4[4].textContent = siteContent['main-content']['vision-h4'];
TopContentH4[5].textContent = siteContent['contact']['contact-h4'];

const MiddleImg = document.getElementById('middle-img');
MiddleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const Paragraph = document.querySelectorAll('p');
Paragraph[0].textContent = siteContent['main-content']['features-content'];
Paragraph[1].textContent = siteContent['main-content']['about-content'];
Paragraph[2].textContent = siteContent['main-content']['services-content'];
Paragraph[3].textContent = siteContent['main-content']['product-content'];
Paragraph[4].textContent = siteContent['main-content']['vision-content'];
Paragraph[5].textContent = siteContent['contact']['address'];
Paragraph[6].textContent = siteContent['contact']['phone'];
Paragraph[7].textContent = siteContent['contact']['email'];
Paragraph[8].textContent = siteContent['footer']['copyright'];

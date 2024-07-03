// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  menu.addEventListener("click", (event) => {
    if (event.target) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)










// SWIPER

const swiper = new Swiper('.swiper', {

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 40,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1450: {
      slidesPerView: 5,
      spaceBetween: 80,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    }
  }
});





// Аккордеон
function accordion() {
  const items = document.querySelectorAll('.accordion__item-trigger')
  items.forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentNode
      if (parent.classList.contains('accordion__item-active')) {
        parent.classList.remove('accordion__item-active')
      } else {
        document
          .querySelectorAll('.accordion__item')
          .forEach(child => child.classList.remove('accordion__item-active'))
        parent.classList.add('accordion__item-active')
      }
    })
  })
}
accordion()




// B2B

document.addEventListener('DOMContentLoaded', function () {
  const heroLeftInner = document.querySelector('#hero__b2b');
  let currentIndex = 0;
  const data = [
    { amount: '-22 TON', description: 'Отправка TON Coin', status: 'ОТПРАВЛЕНО' },
    { amount: '+15 TON', description: 'Получение TON Coin', status: 'ПОЛУЧЕНО' },
    { amount: '-10 TON', description: 'Отправка TON Coin', status: 'ОТПРАВЛЕНО' },
    { amount: '+20 TON', description: 'Получение TON Coin', status: 'ПОЛУЧЕНО' }
  ];

  function createCard({ amount, description, status }) {
    const card = document.createElement('div');
    card.className = 'hero__left-box';
    card.innerHTML = `
      <img src="./img/hero-icon.png" alt="icon">
      <div>
        <h3>${amount}</h3>
        <p>${description}</p>
      </div>
      <h4>${status}</h4>
    `;
    return card;
  }

  function updateContent() {
    // Create new card
    const card = createCard(data[currentIndex]);

    // Append the new card
    heroLeftInner.appendChild(card);
    setTimeout(() => {
      card.classList.add('visible');
    }, 0);

    // Hide the previous card after 1 second
    setTimeout(() => {
      if (heroLeftInner.children.length > 1) {
        heroLeftInner.children[0].classList.add('hidden');
      }
    }, 1000);

    // Remove the previous card after it has been hidden (2 seconds total)
    setTimeout(() => {
      if (heroLeftInner.children.length > 1) {
        heroLeftInner.removeChild(heroLeftInner.children[0]);
      }
    }, 2000);

    // Update the currentIndex
    currentIndex = (currentIndex + 1) % data.length;
  }

  // Initial call to display the first card
  updateContent();

  // Update content every 2 seconds
  setInterval(updateContent, 2000);
});


    var swiper1 = new Swiper('.swiper1', {
        slidesPerView: 1.2,
        simulateTouch: true, 
        grabCursor: true,
        spaceBetween: 20,
        breakpoints: {
        500: {
          slidesPerView: 1.6,
        },
        680: {
          slidesPerView: 2.1,
        },
        900: {
          slidesPerView: 2.5,
        },
        1050: {
          slidesPerView: 3,        
        },
      },
    });  
 
    var swiper2 = new Swiper(".swiper2", {
      slidesPerView: 1.2,
      spaceBetween: 20,
        breakpoints: {
        400: {
          slidesPerView: 1.5,
          grid: {
            rows: 1,
          },
        },
        480: {
          slidesPerView: 1.8,
          grid: {
            rows: 1,
          },
        },
        580: {
          slidesPerView: 2.2,
          grid: {
            rows: 1,
          },
        },
        700: {
          slidesPerView: 2.4,
          grid: {
            rows: 1,
          },
        },
        800.98: {
          slidesPerView: 1.2,
          grid: {
            rows: 1,
          },
        },
        900: {
          slidesPerView: 1.5,
          grid: {
            rows: 1,
          },
        },
        1100: {
          slidesPerView: 2,  
          grid: {
            rows: 2,
          },      
        },
      },
    });

    var swiper3 = new Swiper(".swiper3", {
      slidesPerView: 1.3,
      centeredSlides: false,
      spaceBetween: 20,
        breakpoints: {
        400: {
          slidesPerView: 2.8,
        },
      },
    });


    document.getElementById('form_contact').addEventListener('submit', function(e) {
    e.preventDefault(); 
    document.getElementById('successPopup').style.display = 'flex';
});
    document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('successPopup').style.display = 'none';
    document.getElementById('form_contact').reset(); 
});



	document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    });
});




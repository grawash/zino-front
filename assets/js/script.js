jQuery(document).ready(function ($) {
  // Menu 
  $('.header__user_btn').on('click', function () {
    $(this).toggleClass('active')
    $('.header__user_menu').toggleClass('active')
   

  })

  $('.header__user_menu>li:has(.header__user_submenu ) .user_menu__arrow').on('click', function () {
    $('.user_menu__arrow').parent().next().slideUp()
    $('.user_menu__arrow').removeClass('active')
    if ($(this).parent().next().is(":visible")) {
      $('.user_menu__arrow').parent().next().slideUp()
      $('.user_menu__arrow').removeClass('active')
    } else {
      $(this).addClass('active')
      $(this).parent().next().slideDown()
    }
    return false;
  })

  // Mobile menu
  if ($(window).width() < 980) {
    $('.mobile_burger').on('click', function () {
      $(this).toggleClass('active')
      $('body').toggleClass('overflow')
      $('.header__user_menu').toggleClass('active')
      $('.header__bottom_nologin').toggleClass('active')
      if ($(window).width() < 980) {
        $('.header__notifications').removeClass('active')
        $('.notifications_menu').fadeOut(300)
        $('.header__favourite').removeClass('active')
        $('body').removeClass('favourite_open')
        $('.favourite_menu').fadeOut(300)
      }
    })

  }
  (function() {
    window.onresize = avtivateMobileBurger;
    window.onload = avtivateMobileBurger;
    function avtivateMobileBurger(){
      if ($(window).width() < 980) {
        $('.mobile_burger').on('click', function () {
          $(this).toggleClass('active')
          $('body').toggleClass('overflow')
          $('.header__user_menu').toggleClass('active')
          $('.header__bottom_nologin').toggleClass('active')
          if ($(window).width() < 980) {
            $('.header__notifications').removeClass('active')
            $('.notifications_menu').fadeOut(300)
            $('.header__favourite').removeClass('active')
            $('body').removeClass('favourite_open')
            $('.favourite_menu').fadeOut(300)
          }
        })
    
      }

    }
  
  
  })();


  // Deposit Form
  let depItems = $('.deposit_method__item')
  if (depItems.length > 0) {
    depItems.on('click', function () {
      depItems.removeClass('active')
      $(this).addClass('active')
    })
  }
  if ($(window).width() > 980) {
    let depBtn = $('#deposit')
    let depPopUp = $('.deposit_pop')
    if (depPopUp.length > 0) {
      depBtn.on('click', function (e) {
        e.preventDefault()
        depPopUp.fadeIn(300)
      })
      $('.deposit_btn__close').on('click', function () {
        depPopUp.fadeOut(300)
      })
      $('.deposit_pop').mouseup(function (e) { // событие клика по веб-документу
        if (!$('.deposit_pop__wrapper').is(e.target) // если клик был не по нашему блоку
          && $('.deposit_pop__wrapper').has(e.target).length === 0) { // и не по его дочерним элементам
          $('.deposit_pop').fadeOut(300); // скрываем его
        }
      });
      if ($('.deposit_amount__item')) {
        $('.deposit_amount__item').on('click', function () {
          $('.deposit_amount__item').removeClass('active')
          $(this).addClass('active')
          $('.deposit_amount>input').val($(this).text().trim())
        })
      }

    }
  }

  if ($('.deposit_page_amount__item')) {
    $('.deposit_page_amount__item').on('click', function () {
      $('.deposit_page_amount__item').removeClass('active')
      $(this).addClass('active')
      $('.deposit_page_amount > input').val($(this).text().trim())
    })
    if ($(window).width() < 768) {
      let depItems = $('.deposit_page_amount__items')
      $('.deposit_page_amount > input').after(depItems)
    }
  }
  if ($('.deposit_page_method__item')) {
    $('.deposit_page_method__item').on('click', function () {
      $('.deposit_page_method__item').removeClass('active')
      $(this).addClass('active')
    })
  }
  // Deposit Form END

  // Widthraw
  if ($(window).width() > 980) {
    let wdtBtn = $('#withdraw')
    let wdtPopUp = $('.withdraw_pop')
    if (wdtPopUp.length > 0) {
      wdtBtn.on('click', function (e) {
        e.preventDefault()
        wdtPopUp.fadeIn(300)
      })
      $('.withdraw_pop').mouseup(function (e) { // событие клика по веб-документу
        if (!$('.withdraw_pop__wrapper').is(e.target) // если клик был не по нашему блоку
          && $('.withdraw_pop__wrapper').has(e.target).length === 0) { // и не по его дочерним элементам
          $('.withdraw_pop').fadeOut(300); // скрываем его
        }
      });
    }
  }
  // Widthraw END


  // Login
  if ($(window).width() > 980) {
    let logBtn = $('.header__signin')
    let logPopUp = $('.login_pop')
    if (logPopUp.length > 0) {
      logBtn.on('click', function (e) {
        logPopUp.fadeIn(300)
      })

      $('.login_pop').mouseup(function (e) { // событие клика по веб-документу
        if (!$('.login_pop__wrapper').is(e.target) // если клик был не по нашему блоку
          && $('.login_pop__wrapper').has(e.target).length === 0) { // и не по его дочерним элементам
          $('.login_pop').fadeOut(300); // скрываем его
        }
      });
    }
  }
  // Login END

  // Sign
  if ($(window).width() > 980) {
    let sigBtn = $('.header__signup')
    let sigPopUp = $('.sign_pop')
    if (sigPopUp.length > 0) {
      sigBtn.on('click', function (e) {
        sigPopUp.fadeIn(300)
      })

      $('.sign_pop').mouseup(function (e) { // событие клика по веб-документу
        if (!$('.sign_pop__wrapper').is(e.target) // если клик был не по нашему блоку
          && $('.sign_pop__wrapper').has(e.target).length === 0) { // и не по его дочерним элементам
          $('.sign_pop').fadeOut(300); // скрываем его
        }
      });
    }
  }
  $('.sign_pomocod__btn').on('click', function (e) {
    $('.sing_input_promo input').slideToggle(300)
  })
  // Sign END

  $('.header__favourite').on('click', function (e) {
    $('.header__favourite').toggleClass('active')
    $('.favourite_menu').fadeToggle(300)
    $('body').toggleClass('favourite_open')
    $('.favourite_menu').click(function (e) {
      e.stopPropagation();
      return false;
    })
    if ($(window).width() < 980) {
      $('.header__notifications').removeClass('active')
      $('.notifications_menu').fadeOut(300)
      $('.mobile_burger').removeClass('active')
      $('body').removeClass('overflow')
      $('.header__user_menu').removeClass('active')
      $('.header__bottom_nologin').removeClass('active')
    }
  })
  if ($(window).width() < 980) {
    let favMenu = $('.favourite_menu')
    $('header').after(favMenu)
  }
  // $(document).on('click', function (e) { // событие клика по веб-документу
  //   if (!$('.header__favourite').is(e.target) // если клик был не по нашему блоку
  //     && $('.header__favourite').has(e.target).length === 0) { // и не по его дочерним элементам
  //     $('body').removeClass('favourite_open')
  //     $('.favourite_menu').fadeOut(300); // скрываем его
  //     $('.header__favourite').removeClass('active')
  //   }
  // });


  $('.header__notifications').on('click', function () {
    $('.header__notifications').toggleClass('active')
    $('.notifications_menu ').fadeToggle(300)
    $('body').toggleClass('favourite_open')
    $('.notifications_menu').click(function (e) {
      e.stopPropagation();
      return false; 
    })
    if ($(window).width() < 980) {
      $('.header__favourite').removeClass('active')
      $('.favourite_menu').fadeOut(300)
      $('.mobile_burger').removeClass('active')
      $('body').removeClass('favourite_open')
      $('body').removeClass('overflow')
      $('.header__user_menu').removeClass('active')
      $('.header__bottom_nologin').removeClass('active')
    }
  })
  if ($(window).width() < 980) {
    let notMenu = $('.notifications_menu')
    $('header').after(notMenu)
    if($('.notifications_menu').hasClass('has_notifications')){
      $('.header__notifications').addClass('has_notifications')
    }

  }
  // $(document).on('click', function (e) { // событие клика по веб-документу
  //   if (!$('.header__notifications').is(e.target) // если клик был не по нашему блоку
  //     && $('.header__notifications').has(e.target).length === 0) { // и не по его дочерним элементам
  //     $('body').removeClass('favourite_open')
  //     $('.notifications_menu').fadeOut(300); // скрываем его
  //     $('.header__notifications').removeClass('active')
  //   }
  // });
  let country = $("#country");
  if (country.length > 0) {
    country.countrySelect();
    $('.country-list').attr('data-simplebar', '')
  }
  let phone = document.querySelector("#phone");
  if (phone) {
    window.intlTelInput(phone, {
    });
  }
  let dropContainer = $(".profile_upload");
  if (dropContainer.length > 0) {
    dropContainer.imageUploader({
      // imagesInputName: 'images',
      preloadedInputName: 'preloaded',
      label: 'Click to upload or drag and drop. At least 300px x 300px PNG or JPG file.',
      maxFiles: 1,
    });
  }
})

let filters = document.querySelector('.live_filter__slider')
if (filters) {
  const liveSwiper = new Swiper(filters, {
    // Default parameters
    slidesPerView: 'auto',
    spaceBetween: 8,
    navigation: {
      nextEl: '.live_filte__arrow-next',
      prevEl: '.live_filte__arrow-prev',
    },
  })
}
let hero = document.querySelector('.hero__slider_top')
if (hero) {
  const swiper = new Swiper(hero, {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    parallax: true,
    pagination: {
      el: '.pagination_hero',
      type: 'bullets',
    },
  })
}

let dasboard = document.querySelector('.dashboard__items')
if (dasboard) {
  const dasboardSlide = new Swiper(dasboard, {
    // Default parameters

    breakpoints: {
      // when window width is >= 320px
      360: {
        slidesPerView: 'auto',
        spaceBetween: 20
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 47
      },
      // when window width is >= 640px
      980: {
        slidesPerView: 4,
        spaceBetween: 10,
      }
    }
  })
}
let game = document.querySelector('.game__items')
if (game) {
  const gamedSlide = new Swiper(game, {
    // Default parameters

    breakpoints: {
      // when window width is >= 320px
      360: {
        slidesPerView: 'auto',
        spaceBetween: 10
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      980: {
        slidesPerView: 5,
        spaceBetween: 10,
      }
    }
  })
}
if ($(window).width() < 980) {
  let gameItems = $('.game_setings')
  $('.game__items ').after(gameItems)
}
$('.support_fake_btn').on('click', function () {
  $('.support_file input[type="file"] ').trigger('click')
})
$('.support_file input[type="file"]').change(function () {
  $(".support_filename").text(this.files[0].name);
});
$('#phone').val('+');
$("#phone").on("keyup", function () {
  var value = $(this).val();
  $(this).val('+' + value.substr(value.lastIndexOf('+') + 1));
});
// Phone

const fllter = document.querySelector('.slots_selec');
if (fllter) {
  const fllterChoices = new Choices(fllter, {
    searchEnabled: false,
    itemSelectText: '',
  });
}
// const notification = document.querySelector('.notifications_select');
// if (notification) {
//   const notificationSellect = new Choices(notification, {
//     searchEnabled: false,
//     itemSelectText: '',
//   });
// }
const multiDefault = () => {
  const elements = document.querySelectorAll('.withdraw_form select');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      itemSelectText: '',
    });
  });
  // $('.choices__list').attr('data-simplebar', '')
}

multiDefault();
// Phone END
let showBtn = $('.btn_show')
if (showBtn) {
  showBtn.on('click', function () {
    let type = $('.input_pass').attr('type') == "text" ? "password" : 'text'
    $('.input_pass').prop('type', type);
  })
}
// Pop Login

// Pop Login END

jQuery(document).ready(function ($) {
  let selectItems = $('.main-tabs__item')
  selectItems.on('click', function () {
    $(this).addClass('active')
    selectItems.not($(this)).removeClass('active')
  })
  console.log(selectItems)
})
const select = document.querySelectorAll(".select_dashboard");
if (select.length) {
  select.forEach((item) => {
    const selectCurrent = item.querySelector(".select__current");
    item.addEventListener("click", (event) => {
      const el = event.target.dataset.choice;
      const text = event.target.innerHTML;
      if (el === "choosen" && selectCurrent.innerHTML !== text) {
        selectCurrent.innerHTML = text;
      }
      item.classList.toggle("active");
    });
    document.addEventListener("click", function (event) {
      if (!item.contains(event.target)) {
        item.classList.remove("active");
      }
    });
  });
}
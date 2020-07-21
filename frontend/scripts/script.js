//event pada saat link diklik
$('.page-scroll').on('click', function (e) {
  //ambil isi href
  var tujuan = $(this).attr('href');
  var elemenTujuan = $(tujuan);
  // console.log(elemenTujuan);
  //pindahkan scroll
  $('html, body').animate({
    scrollTop: elemenTujuan.offset().top - 50
  }, 1250, 'swing');

  e.preventDefault();


});



//parallax

//load jumbotron
$(window).on('load', function () {
  $('.jumbotron h1').addClass('jMuncul');
  $('.jumbotron p').addClass('jMuncul');
  $('.jumbotron .btn').addClass('jMuncul');
});

$(window).scroll(function () {

  let wScroll = $(this).scrollTop();
  // console.log(wScroll);
  $('.jumbotron h1').css({
    'transform': 'translate(0, ' + wScroll / 2.2 + '%)'
  });
  $('.jumbotron p').css({
    'transform': 'translate(0, ' + wScroll / 2 + '%)'
  });
  $('.jumbotron .btn').css({
    'transform': 'translate(0, ' + wScroll / 2 + '%)'
  });

  //brands
  if (wScroll > $('.brands').offset().top - 600) {
    // console.log('ok');

    $('.brands .brand').each(function (i) {
      $('.brands .title').addClass('muncul');

      setTimeout(function () {
        $('.brands .brand').eq(i).addClass('muncul');
      }, 300 * (i + 1));
    });

  }

  //category
  if (wScroll > $('.categorys').offset().top - 600) {
    // console.log('ok');
    $('.categorys .title').addClass('muncul');
    if (wScroll > $('.category1').offset().top - 500) {
      // console.log('ok');
      $('.categorys .category1').each(function (i) {
        setTimeout(function () {
          $('.categorys .category1').eq(i).addClass('muncul');
        }, 300 * (i + 1));
      });
    }
    if (wScroll > $('.category2').offset().top - 600) {
      // console.log('ok');
      $('.categorys .category2').each(function (i) {
        setTimeout(function () {
          $('.categorys .category2').eq(i).addClass('muncul');
        }, 300 * (i + 1));
      });
    }

  }

  //product
  if (wScroll > $('.products').offset().top - 600) {
    // console.log('ok');
    $('.products .title').addClass('muncul');
    if (wScroll > $('.product').offset().top - 550) {
      // console.log('ok');
      $('.products .product').each(function (i) {
        setTimeout(function () {
          $('.products .product').eq(i).addClass('muncul');
        }, 300 * (i + 1));
      });
    }
  }

  //testimonials
  if (wScroll > $('.testimonials').offset().top - 600) {
    $('.testimonials').addClass('muncul');
  }

});

// detail product
const detailProduct = document.querySelector('.detail-product');
const thumbs = document.querySelector('.thumbs');
const thumbnail = document.querySelectorAll('.thumb');

detailProduct.addEventListener('click', function (e) {

  if (e.target.className == 'thumb') {
    thumbs.src = e.target.src;

    thumbnail.forEach(function (thum) {
      // thum.className = 'thumb';
      if (thum.classList.contains('activ')) {
        thum.classList.remove('activ');
      }
    });

    e.target.classList.add('activ');
  }


});
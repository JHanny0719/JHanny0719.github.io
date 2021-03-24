


$(window).scroll(function(){

  window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    // console.log(scroll)
    let times = 1.3;
    let plus = 150;
    let height = $('.timeline_page').eq(0).offset().top - 100
    let window_top = [
      height + (plus * 0),
      height + (plus * 1),
      height + (plus * 2),
      height + (plus * 3),
      height + (plus * 4),
      height + (plus * 5),
      height + (plus * 6)
    ]
    // console.log(height)
    if (scroll < window_top[0]) {
      // console.log('00');
      $('#image_one').css('display', 'none');
      $('#image_two').css('display', 'none');
      $('#image_three').css('display', 'none');
      $('#image_four').css('display', 'none');
      $('#image_five').css('display', 'none');
      $('#image_six').css('display', 'none');
    }
    else if (scroll > window_top[0] && scroll < window_top[1]) {
      // console.log('00');
      $('#image_one').css('display', 'block');
      $('#image_two').css('display', 'none');
      $('#image_three').css('display', 'none');
      $('#image_four').css('display', 'none');
      $('#image_five').css('display', 'none');
      $('#image_six').css('display', 'none');
    }
    else if (scroll > window_top[1] && scroll < window_top[2]) {
      // console.log('1');
      $('#image_one').css('display', 'none');
      $('#image_two').css('display', 'block');
      $('#image_three').css('display', 'none');
      $('#image_four').css('display', 'none');
      $('#image_five').css('display', 'none');
      $('#image_six').css('display', 'none');
    }
    else if (scroll > window_top[2] && scroll < window_top[3]) {
      // console.log('2');
      $('#image_one').css('display', 'none');
      $('#image_two').css('display', 'none');
      $('#image_three').css('display', 'block');
      $('#image_four').css('display', 'none');
      $('#image_five').css('display', 'none');
      $('#image_six').css('display', 'none');
    }
    else if (scroll > window_top[3] && scroll < window_top[4]) {
      // console.log('2');
      $('#image_one').css('display', 'none');
      $('#image_two').css('display', 'none');
      $('#image_three').css('display', 'none');
      $('#image_four').css('display', 'block');
      $('#image_five').css('display', 'none');
      $('#image_six').css('display', 'none');
    }
    else if (scroll > window_top[4] && scroll < window_top[5]) {
      // console.log('3');
      $('#image_one').css('display', 'none');
      $('#image_two').css('display', 'none');
      $('#image_three').css('display', 'none');
      $('#image_four').css('display', 'none');
      $('#image_five').css('display', 'block');
      $('#image_six').css('display', 'none');
    }
    else if (scroll > window_top[5] && scroll < window_top[6] ) {
      // console.log('4');
      $('#image_one').css('display', 'none');
      $('#image_two').css('display', 'none');
      $('#image_three').css('display', 'none');
      $('#image_four').css('display', 'none');
      $('#image_five').css('display', 'none');
      $('#image_six').css('display', 'block');
    }
    else if (scroll > window_top[6] ) {
      // console.log('4');
      $('#image_one').css('display', 'none');
      $('#image_two').css('display', 'none');
      $('#image_three').css('display', 'none');
      $('#image_four').css('display', 'none');
      $('#image_five').css('display', 'none');
      // $('#image_six').fadeOut();
    }
  });



});

$( document ).ready(function() {
  $('#image_one').css('display', 'none');
  let image_class = document.getElementsByClassName('desktop_image');
  // let polygon_class = document.getElementsByClassName('polygon');
  $('.time_section').each(function(index){
    $('.time_section').eq(index).click(function() {
        // console.log(image_class[index])
        for (let i = 0; i < image_class.length; i++) {
          console.log(i)
          image_class[i].style.display = 'none';
          $('.polygon').eq(i).removeClass('active');
        }
        image_class[index].style.display = 'block';
        $('.polygon').eq(index).addClass('active');
      })
  })

});

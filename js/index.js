


$(window).scroll(function(){


  // window.addEventListener("scroll", (event) => {
  //   let scroll = this.scrollY;
  //   // console.log(scroll)
  //   let times = 1.3;
  //   let plus = -100;
  //   let time_section_top = [
  //     ($('.time_section').eq(0).offset().top / times) + plus,
  //     ($('.time_section').eq(1).offset().top / times) + plus,
  //     ($('.time_section').eq(2).offset().top / times) + plus,
  //     ($('.time_section').eq(3).offset().top / times) + plus,
  //     ($('.time_section').eq(4).offset().top / times) + plus,
  //     ($('.time_section').eq(5).offset().top / times) + plus
  //   ]
  //   // console.log(time_section_top[1])
  //   if (scroll < time_section_top[0]) {
  //     // console.log('00');
  //     $('#image_one').css('display', 'block');
  //     $('#image_two').css('display', 'none');
  //     $('#image_three').css('display', 'none');
  //     $('#image_four').css('display', 'none');
  //     $('#image_five').css('display', 'none');
  //     $('#image_six').css('display', 'none');
  //   }
  //   else if (scroll > time_section_top[0] && scroll < time_section_top[1]) {
  //     // console.log('0');
  //     $('#image_one').css('display', 'none');
  //     $('#image_two').css('display', 'block');
  //     $('#image_three').css('display', 'none');
  //     $('#image_four').css('display', 'none');
  //     $('#image_five').css('display', 'none');
  //     $('#image_six').css('display', 'none');
  //   }
  //   else if (scroll > time_section_top[1] && scroll < time_section_top[2]) {
  //     // console.log('1');
  //     $('#image_one').css('display', 'none');
  //     $('#image_two').css('display', 'none');
  //     $('#image_three').css('display', 'block');
  //     $('#image_four').css('display', 'none');
  //     $('#image_five').css('display', 'none');
  //     $('#image_six').css('display', 'none');
  //   }
  //   else if (scroll > time_section_top[2] && scroll < time_section_top[3]) {
  //     // console.log('2');
  //     $('#image_one').css('display', 'none');
  //     $('#image_two').css('display', 'none');
  //     $('#image_three').css('display', 'none');
  //     $('#image_four').css('display', 'block');
  //     $('#image_five').css('display', 'none');
  //     $('#image_six').css('display', 'none');
  //   }
  //   else if (scroll > time_section_top[3] && scroll < time_section_top[4]) {
  //     // console.log('3');
  //     $('#image_one').css('display', 'none');
  //     $('#image_two').css('display', 'none');
  //     $('#image_three').css('display', 'none');
  //     $('#image_four').css('display', 'none');
  //     $('#image_five').css('display', 'block');
  //     $('#image_six').css('display', 'none');
  //   }
  //   else if (scroll > time_section_top[4] ) {
  //     // console.log('4');
  //     $('#image_one').css('display', 'none');
  //     $('#image_two').css('display', 'none');
  //     $('#image_three').css('display', 'none');
  //     $('#image_four').css('display', 'none');
  //     $('#image_five').css('display', 'none');
  //     $('#image_six').css('display', 'block');
  //   }
  // });



});

$( document ).ready(function() {

  let image_class = document.getElementsByClassName('animated');
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

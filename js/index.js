


$(window).scroll(function(){

  window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    let time_section_top = [
      $('.time_section').eq(0).offset().top - 500,
      $('.time_section').eq(1).offset().top - 500,
      $('.time_section').eq(2).offset().top - 500,
      $('.time_section').eq(3).offset().top - 500,
      $('.time_section').eq(4).offset().top - 500,
      $('.time_section').eq(5).offset().top - 500
    ]
    // console.log(time_section_top[1])
    if (scroll < time_section_top[0]) {
      // console.log('00');
    }
    else if (scroll > time_section_top[0] && scroll < time_section_top[1]) {
      // console.log('0');
    }
    else if (scroll > time_section_top[1] && scroll < time_section_top[2]) {
      // console.log('1');
    }
    else if (scroll > time_section_top[2] && scroll < time_section_top[3]) {
      // console.log('2');
    }
    else if (scroll > time_section_top[3] && scroll < time_section_top[4]) {
      // console.log('3');
    }
    else if (scroll > time_section_top[4] && scroll < time_section_top[5]) {
      // console.log('4');
    }
    else if (scroll > time_section_top[5]) {
      // console.log('55');
    }
  });

});

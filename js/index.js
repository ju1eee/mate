$(document).ready(function() {
    $('.hideme').each( function(i){
        var bottom_of_object = $(this).offset().top ;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){
            $(this).addClass('showme');
        }
    });
$(window).scroll( function(){
    $('.hideme').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){
            $(this).addClass('showme');
        }
        if( bottom_of_window < bottom_of_object ){
            $(this).removeClass('showme');
        }
    });
});
});



function scrollToTop() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  }
  
  function scrollToSection(sectionId) {
    var section = $(sectionId);
    if (section.length > 0) {
      $('html, body').animate({
        scrollTop: section.offset().top
      }, 800);
    }
  }
  
  $(document).ready(function() {
    var scrollTopBtn = $('#scrollTopbtn');
    var scrollGameBtn = $('#scrollgame');
    var button = scrollTopBtn.add(scrollGameBtn);
  
    scrollTopBtn.on('click', function() {
      scrollToTop();
    });
  
    scrollGameBtn.on('click', function() {
      scrollToSection('#mini-game');
    });
  
    if ($(window).scrollTop() > 200) {
      button.hide();
    }
  
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        button.fadeIn();
      } else {
        button.fadeOut();
      }
    });
  });
  


  
  






$(document).ready(function() {
    var video = $("#video");
    var soundButton = $('.btn-sound');
    var pauseButton = $('.btn-pause');
    var playPauseButton = $('.play-pause-button');
  
    soundButton.on('click', function() {
      if (soundButton.hasClass('on')) {
        soundButton.removeClass('on');
        soundButton.text('Sound OFF');
        video.prop('muted', false);
      } else {
        soundButton.addClass('on');
        soundButton.text('Sound ON');
        video.prop('muted', true);
      }
    });
  
    pauseButton.on('click', function() {
      if (pauseButton.hasClass('on')) {
        pauseButton.removeClass('on');
        video.trigger('play');
      } else {
        pauseButton.addClass('on');
        video.trigger('pause');
      }
    });
  
    playPauseButton.on('click', function() {
      if (playPauseButton.hasClass('playing')) {
        playPauseButton.removeClass('paused playing');
        playPauseButton.addClass('paused');
      } else {
        if (playPauseButton.hasClass('paused')) {
          playPauseButton.addClass('playing');
        }
      }
      if (!playPauseButton.hasClass('paused')) {
        playPauseButton.addClass('paused');
      }
    });
  });
   
  $(document).ready(function() {
    var video = $('#video'); 

    $('#restart-button').on('click', function() {
        video[0].currentTime = 0;
        video[0].play();
    });
});


  



  // 텍스트 선택 방지
document.onselectstart = function() {
  return false;
}

// 텍스트 복사 방지
document.oncopy = function() {
  return false;
}

// 텍스트 붙여 넣기 방지
document.onpaste = function() {
  return false;
}

// 우클릭 메뉴 비활성화
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});




window.onload = () => {
  const container = document.getElementById("container"),
        englishWord = container.querySelector(".front > .word"),
        frenchWord = container.querySelector(".back > .word"),
        buttonFullscreen = document.querySelector("body"),
        nexWord = () => {
          if (!container.classList.contains('active')) {
            const index = Math.floor(Math.random()*words.length),
                word = words[index];
            frenchWord.innerText = word.french;
            englishWord.innerText = word.english;
            container.classList.remove('reverse');
          }
        }

  container.querySelectorAll(".box")
    .forEach(e => e.onclick=()=> {
    if (!container.classList.contains('active')) {
      container.classList.toggle('active');
      setTimeout(()=>{
        container.classList.toggle('active');
        container.classList.toggle('reverse');
      }, 680);
    }  
  });
  buttonFullscreen.ondblclick = () => {
    if (!document.fullscreenElement) {
      openFullscreen(document.documentElement);
    }
    else {
      closeFullscreen();
    }
  }
  
  function openFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
  
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }

  document.addEventListener('touchstart', handleTouchStart, false);    
  document.addEventListener('touchmove', handleTouchMove, false);

  var xDown = null;  
  var yDown = null;                                                        

  function handleTouchStart(evt) {                                       
      xDown = evt.touches[0].clientX;  
      yDown = evt.touches[0].clientY; 
  };                                                


  function handleTouchMove(evt) {
      if ( ! xDown || ! yDown ) {
          return;
      }

      var xUp = evt.touches[0].clientX;   
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) { /*most significant*/
          if ( xDiff > 0 ) {
               /* Left swipe */
                nexWord();
          } else {
             /* Right swipe */
             nexWord();
          }                       
      } else {
          if ( yDiff > 0 ) {
                /* UP swipe */
          } else { 
                /* down swipe */
          }    
      }
      /* reset values */
      xDown = null;
      yDown = null;                                             
  };
}

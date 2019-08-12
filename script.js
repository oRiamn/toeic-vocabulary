window.onload = () => {
    const container = document.getElementById("container"),
        englishWord = container.querySelector(".front > .word"),
        frenchWord = container.querySelector(".back > .word"),
        buttonFullscreen = document.querySelector("body"),
        swipeEvent = (element, options) => {
            const callbacks = {
                onRight: () => { },
                onLeft: () => { },
                onUp: () => { },
                onDown: () => { },
                ...options
            },
                  positions = {
                      start: {},
                      last: {},
                      hasMoved: false
                  };

            element.addEventListener('touchstart', (evt) => {
                positions.start.x = evt.touches[0].clientX;
                positions.start.y = evt.touches[0].clientY;
            }, false);
            element.addEventListener('touchmove', (evt) => {
                positions.last.x = evt.touches[0].clientX;
                positions.last.y = evt.touches[0].clientY;
                positions.hasMoved = true;
            }, false);
            element.addEventListener('touchend', () => {
                if (positions.hasMoved) {
                    const xDiff = positions.start.x - positions.last.x,
                        yDiff = positions.start.y - positions.last.y;
                    if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
                        if (xDiff > 0) {
                            callbacks.onLeft();
                        } else {
                            callbacks.onRight();
                        }
                    } else {
                        if (yDiff > 0) {
                            callbacks.onUp()
                        } else {
                            callbacks.onDown();
                        }
                    }
                }
                positions.hasMoved = false;
            }, false);
        },
        doubleTap = (element, callback) => {
            let tapedTwice = false,
                tapHandler = (event) => {
                    if (!tapedTwice) {
                        tapedTwice = true;
                        setTimeout(function () { tapedTwice = false; }, 300);
                        return false;
                    }
                    event.preventDefault();
                    callback();

                }
            element.addEventListener("touchstart", tapHandler);
        },
        nexWord = () => {
            if (!container.classList.contains('active')) {
                const word = wordIterator.next();
                frenchWord.innerText = word.french;
                englishWord.innerText = word.english;
                container.classList.remove('reverse');

            }
        },
        prevWord = () => {
            if (!container.classList.contains('active')) {
                const word = wordIterator.prev();
                frenchWord.innerText = word.french;
                englishWord.innerText = word.english;
                container.classList.remove('reverse');

            }
        },
        toggleFullscreen = () => {
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

            if (!document.fullscreenElement) {
                openFullscreen(document.documentElement);
            }
            else {
                closeFullscreen();
            }
        },
        flipCard = () => {
            if (!container.classList.contains('active')) {
                container.classList.toggle('active');
                setTimeout(() => {
                    container.classList.toggle('active');
                    container.classList.toggle('reverse');
                }, 680);
            }
        },
        wordIterator = ((elements) => {
          const items = [ ...elements], indexes = [];
          function random(min, max) { // min and max included 
              return Math.floor(Math.random() * (max - min + 1) + min);
          }
          return {
            next: () => {
              const nextIndex = random(1, items.length) - 1;
              indexes.push(nextIndex);
              return items[nextIndex];
            },
            prev: () => {
              const index = indexes.pop();
              return items[index];
            }
          }
        })(words);
    document.addEventListener("keydown", (e) => {
        e.preventDefault();
        switch (e.key) {
            case "ArrowRight":
                nexWord();
                break;
            case "ArrowLeft":
                prevWord();
                break;
            case " ":
                flipCard();
                break;
        }
    });

    swipeEvent(document, {
        onRight: nexWord,
        onLeft: prevWord
    })
    container.querySelectorAll(".box").forEach(e => e.addEventListener("click", flipCard));
    doubleTap(buttonFullscreen, toggleFullscreen);
}

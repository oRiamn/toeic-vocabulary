*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;  
  background: rgba(55, 55, 55, 1);
  font-family: Roboto, Arial, helvetica, sans-serif;
  a {
    text-decoration:none;
    color:#FFF;
    &.rainbow-button {
      width:calc(20vw + 6px);
      height:calc(8vw + 6px);
      background-image: linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%);
      border-radius:5px;
      display:flex;
      align-items:center;
      justify-content:center;
      text-transform:uppercase;
      font-size:3vw;
      font-weight:bold;

      &:after {
        content:attr(alt);
        width:20vw;
        height:8vw;
        background-color:#191919;
        display:flex;
        align-items:center;
        justify-content:center;
      }
      &:hover {
        animation:slidebg 2s linear infinite;
      }
    }
  }
  #container {
    perspective: 1000px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    margin: auto;
    text-align: center;
    justify-content: center;
        
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      justify-content: center;
      width: 80vw;
      height: 80vh;
      border: 3vw solid white;
      border-radius: 3vw;
      backface-visibility: hidden;
      box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.75);
      position: absolute;
      
      &.front {
          background-image: linear-gradient(to right top, #424f41, #435440, #445a3f, #465f3d, #48643b, #47693f, #456e44, #437349, #3c7957, #377e65, #338374, #338781);
      }
      &.back {
        transform: rotateY(180deg);
         background-image: linear-gradient(to right top, #6b70d1, #6a69b9, #6762a2, #625c8c, #5c5676, #52536e, #4a5065, #444c5b, #384b5a, #2b4b56, #1f4a4f, #1a4845);
      }
      .word {
        color: white;
        font-size: 10vw;
        font-weight:bold;
        width: 100%;
        padding: 1em 0;
        text-shadow: 0px 0px 2px rgba(0, 0, 0, 5);
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
         -khtml-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none; 
      }
    }
    &.active {
      .box {
        animation-play-state: running;
        animation-name: shadow;
      }
      .front {
        animation: front 650ms 0s 1 linear forwards;
      }
      .back {
        animation: back 650ms 0s 1 linear forwards;
      }
    }
    &.reverse {
      .box {
        animation-direction: reverse;
        &.front {
          transform: scale(1) rotateY(180deg);
        }
        &.back {
          transform: scale(1) rotateY(360deg);
        }
      }
    }
  }
}
/* Animations */
@keyframes back {
  0% {
    transform: scale(1) rotateY(180deg);
  }

  10% {
    transform: scale(1.000768) rotateY(180deg);
  }

  20% {
    transform: scale(1.024576) rotateY(180deg);
  }

  30% {
    transform: scale(1.125424) rotateY(180.17135717260666deg);
  }

  40% {
    transform: scale(1.149232) rotateY(185.48342952341287deg);
  }

  50% {
    transform: scale(1.15) rotateY(221.6397929434164deg);
  }

  60% {
    transform: scale(1.149232) rotateY(318.3602070565836deg);
  }

  70% {
    transform: scale(1.125424) rotateY(354.51657047658716deg);
  }

  80% {
    transform: scale(1.024576) rotateY(359.8286428273933deg);
  }

  90% {
    transform: scale(1.000768) rotateY(360deg);
  }

  100% {
    transform: scale(1) rotateY(360deg);
  }
}
@keyframes front {
  0% {
    transform: scale(1) rotateY(0deg);
  }

  10% {
    transform: scale(1.000768) rotateY(0deg);
  }

  20% {
    transform: scale(1.024576) rotateY(0deg);
  }

  30% {
    transform: scale(1.125424) rotateY(0.17135717260665195deg);
  }

  40% {
    transform: scale(1.149232) rotateY(5.4834295234128625deg);
  }

  50% {
    transform: scale(1.15) rotateY(41.639792943416424deg);
  }

  60% {
    transform: scale(1.149232) rotateY(138.36020705658356deg);
  }

  70% {
    transform: scale(1.125424) rotateY(174.51657047658713deg);
  }

  80% {
    transform: scale(1.024576) rotateY(179.82864282739334deg);
  }

  90% {
    transform: scale(1.000768) rotateY(180deg);
  }

  100% {
    transform: scale(1) rotateY(180deg);
  }
}
@keyframes buttonClick {
  from {
    box-shadow: rgba(255, 224, 178, 1) 0px 0px 0px 0px;
  }
  to {
    box-shadow: rgba(255, 224, 178, 0) 0px 0px 0px 10px;
  }
}
@keyframes slidebg {
  to {
    background-position:20vw;
  }
}

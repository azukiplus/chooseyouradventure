/*
 * Name: Ashley Mochizuki
 * Date: 4/14/22
 * Section: CSE 154 AE
 *
 * This is the JS to implement the UI for my game.
 */

"use strict";
(function() {

  window.addEventListener('load', init);
  window.addEventListener('load', init2);
  window.addEventListener('load', init3);
  window.addEventListener('load', init4);

  /**
   * Initial functions
   */
  function init() {
    let choices2 = qsa(".choice-2");
    for (let i = 0; i < choices2.length; i++) {
      choices2[i].addEventListener("click", onClickTwo);
    }
    let choices3 = qsa(".choice-3");
    for (let i = 0; i < choices3.length; i++) {
      choices3[i].addEventListener("click", onClickThree);
    }
    let choices4 = qsa(".choice-4");
    for (let i = 0; i < choices4.length; i++) {
      choices4[i].addEventListener("click", onClickFour);
    }
    let choices5 = qsa(".choice-5");
    for (let i = 0; i < choices5.length; i++) {
      choices5[i].addEventListener("click", onClickFive);
    }
    let choices6 = qsa(".choice-6");
    for (let i = 0; i < choices6.length; i++) {
      choices6[i].addEventListener("click", onClickSix);
    }
    let choices7 = qsa(".choice-7");
    for (let i = 0; i < choices7.length; i++) {
      choices7[i].addEventListener("click", onClickSeven);
    }
    let choices8 = qsa(".choice-8");
    for (let i = 0; i < choices8.length; i++) {
      choices8[i].addEventListener("click", onClickEight);
    }
  }

  /**
   * More initial functions
   */
  function init2() {
    let choices9 = qsa(".choice-9");
    for (let i = 0; i < choices9.length; i++) {
      choices9[i].addEventListener("click", onClickNine);
    }
    let choices10 = qsa(".choice-10");
    for (let i = 0; i < choices10.length; i++) {
      choices10[i].addEventListener("click", onClickTen);
    }
    let choices11 = qsa(".choice-11");
    for (let i = 0; i < choices11.length; i++) {
      choices11[i].addEventListener("click", onClickEleven);
    }
    let choices12 = qsa(".choice-12");
    for (let i = 0; i < choices12.length; i++) {
      choices12[i].addEventListener("click", onClickTwelve);
    }
    let choices13 = qsa(".choice-13");
    for (let i = 0; i < choices13.length; i++) {
      choices13[i].addEventListener("click", onClickThirteen);
    }
    let choices14 = qsa(".choice-14");
    for (let i = 0; i < choices14.length; i++) {
      choices14[i].addEventListener("click", onClickFourteen);
    }
  }

  /**
   * Even more initial functions
   */
  function init3() {
    let choices15 = qsa(".choice-15");
    for (let i = 0; i < choices15.length; i++) {
      choices15[i].addEventListener("click", onClickFifteen);
    }
    let choices16 = qsa(".choice-16");
    for (let i = 0; i < choices16.length; i++) {
      choices16[i].addEventListener("click", onClickSixteen);
    }
    let choices17 = qsa(".choice-17");
    for (let i = 0; i < choices17.length; i++) {
      choices17[i].addEventListener("click", onClickSeventeen);
    }
    let choices18 = qsa(".choice-18");
    for (let i = 0; i < choices18.length; i++) {
      choices18[i].addEventListener("click", onClickEighteen);
    }
    let choices19 = qsa(".choice-19");
    for (let i = 0; i < choices19.length; i++) {
      choices19[i].addEventListener("click", onClickNineteen);
    }
  }

  /**
   * Even more initial functions
   */
  function init4() {
    let choices20 = qsa(".choice-20");
    for (let i = 0; i < choices20.length; i++) {
      choices20[i].addEventListener("click", onClickTwenty);
    }
    let choices21 = qsa(".choice-21");
    for (let i = 0; i < choices21.length; i++) {
      choices21[i].addEventListener("click", onClickTwentyOne);
    }
    let choices22 = qsa(".choice-22");
    for (let i = 0; i < choices22.length; i++) {
      choices22[i].addEventListener("click", onClickTwentyTwo);
    }
    let choices23 = qsa(".play-again");
    for (let i = 0; i < choices23.length; i++) {
      choices23[i].addEventListener("click", onPlayAgain);
    }
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns an array of elements matching the given query.
   * @param {string} selector - CSS query selector.
   * @returns {NodeListOf<Element>} - Array of DOM objects matching the given query.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * When choice 2 is picked
   */
  function onClickTwo() {
    id("scene-1").style.display = "none";
    id("scene-3").style.display = "none";
    id("scene-4").style.display = "none";
    id("scene-2").style.display = "block";
  }

  /**
   * When choice 3 is picked
   */
  function onClickThree() {
    id("scene-1").style.display = "none";
    id("scene-4").style.display = "none";
    id("scene-3").style.display = "block";
  }

  /**
   * When choice 4 is picked
   */
  function onClickFour() {
    id("scene-3").style.display = "none";
    id("scene-4").style.display = "block";
  }

  /**
   * When choice 5 is picked
   */
  function onClickFive() {
    id("scene-2").style.display = "none";
    id("scene-6").style.display = "none";
    id("scene-5").style.display = "block";
  }

  /**
   * When choice 6 is picked
   */
  function onClickSix() {
    id("scene-2").style.display = "none";
    id("scene-6").style.display = "block";
  }

  /**
   * When choice 7 is picked
   */
  function onClickSeven() {
    id("scene-6").style.display = "none";
    id("scene-7").style.display = "block";
    let gameEndSeven = document.createElement("gameEnd");
    gameEndSeven.textContent = "x ";
    id("scene-7").appendChild(gameEndSeven);
  }

  /**
   * When choice 8 is picked
   */
  function onClickEight() {
    id("scene-5").style.display = "none";
    id("scene-8").style.display = "block";
    let gameEndEight = document.createElement("gameEnd");
    gameEndEight.textContent = "x ";
    id("scene-8").appendChild(gameEndEight);
  }

  /**
   * When choice 9 is picked
   */
  function onClickNine() {
    id("scene-5").style.display = "none";
    id("scene-9").style.display = "block";
  }

  /**
   * When choice 10 is picked
   */
  function onClickTen() {
    id("scene-9").style.display = "none";
    id("scene-10").style.display = "block";
  }

  /**
   * When choice 11 is picked
   */
  function onClickEleven() {
    id("scene-9").style.display = "none";
    id("scene-11").style.display = "block";
  }

  /**
   * When choice 12 is picked
   */
  function onClickTwelve() {
    id("scene-10").style.display = "none";
    id("scene-11").style.display = "none";
    id("scene-12").style.display = "block";
  }

  /**
   * When choice 13 is picked
   */
  function onClickThirteen() {
    id("scene-12").style.display = "none";
    id("scene-14").style.display = "none";
    id("scene-13").style.display = "block";
  }

  /**
   * When choice 14 is picked
   */
  function onClickFourteen() {
    id("scene-10").style.display = "none";
    id("scene-11").style.display = "none";
    id("scene-14").style.display = "block";
  }

  /**
   * When choice 15 is picked
   */
  function onClickFifteen() {
    id("scene-14").style.display = "none";
    id("scene-15").style.display = "block";
  }

  /**
   * When choice 16 is picked
   */
  function onClickSixteen() {
    id("scene-13").style.display = "none";
    id("scene-16").style.display = "block";
  }

  /**
   * When choice 17 is picked
   */
  function onClickSeventeen() {
    id("scene-12").style.display = "none";
    id("scene-13").style.display = "none";
    id("scene-16").style.display = "none";
    id("scene-17").style.display = "block";
    let gameEndSeventeen = document.createElement("gameEnd");
    gameEndSeventeen.textContent = "x ";
    id("scene-17").appendChild(gameEndSeventeen);
  }

  /**
   * When choice 18 is picked
   */
  function onClickEighteen() {
    id("scene-16").style.display = "none";
    id("scene-18").style.display = "block";
  }

  /**
   * When choice 19 is picked
   */
  function onClickNineteen() {
    id("scene-18").style.display = "none";
    id("scene-19").style.display = "block";
    let gameEndNineteen = document.createElement("gameEnd");
    gameEndNineteen.textContent = "x ";
    id("scene-19").appendChild(gameEndNineteen);
  }

  /**
   * When choice 20 is picked
   */
  function onClickTwenty() {
    id("scene-18").style.display = "none";
    id("scene-20").style.display = "block";
  }

  /**
   * When choice 21 is picked
   */
  function onClickTwentyOne() {
    id("scene-20").style.display = "none";
    id("scene-21").style.display = "block";
    let gameEndTwentyOne = document.createElement("gameEnd");
    gameEndTwentyOne.textContent = "x ";
    id("scene-21").appendChild(gameEndTwentyOne);
  }

  /**
   * When choice 22 is picked
   */
  function onClickTwentyTwo() {
    id("scene-20").style.display = "none";
    id("scene-22").style.display = "block";
    let gameEndTwentyTwo = document.createElement("gameEnd");
    gameEndTwentyTwo.textContent = "x ";
    id("scene-22").appendChild(gameEndTwentyTwo);
    let classes = id("choose-your-path").classList;
    classes.add("finishedGame");
  }

  /**
   * When play again button is clicked
   */
  function onPlayAgain() {
    id("scene-7").style.display = "none";
    id("scene-8").style.display = "none";
    id("scene-15").style.display = "none";
    id("scene-17").style.display = "none";
    id("scene-19").style.display = "none";
    id("scene-21").style.display = "none";
    id("scene-22").style.display = "none";
    id("scene-1").style.display = "block";
  }
})();

// Some helper functions taken from CSE154 slides.
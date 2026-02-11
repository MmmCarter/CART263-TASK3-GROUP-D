setup_D();
/** THEME: DECEPTION  */
function setup_D() {
  console.log("in d");
  /**************************************************** */
  //get the buttons
  activateButtons(`#TEAM_D`, "ani_canvD", aniA, aniB, aniC, aniD);

  /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN A INSIDE HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in mouseclick event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function  -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniA(parentCanvas) {
    console.log("in ani-A -teamD");
    const canvas = document.getElementById(parentCanvas);
    canvas.innerHTML = "";
    canvas.style.position = "relative";
    canvas.style.width = "100%";
    canvas.style.height = "320px";
    canvas.style.overflow = "hidden";
    canvas.style.background = "#6ecbff";

    const grass = document.createElement("div");
    grass.className = "TEAM_D_ANI_A_GRASS";
    grass.style.position = "absolute";
    grass.style.bottom = "0";
    grass.style.left = "0";
    grass.style.width = "100%";
    grass.style.height = "90px";
    grass.style.background = "#2ea44f";
    canvas.appendChild(grass);

    const sun = document.createElement("div");
    sun.className = "TEAM_D_ANI_A_SUN";
    sun.style.position = "absolute";
    sun.style.top = "25px";
    sun.style.right = "40px";
    sun.style.width = "70px";
    sun.style.height = "70px";
    sun.style.borderRadius = "50%";
      sun.style.background = "yellow";
    sun.style.boxShadow = "0 0 20px yellow";
    canvas.appendChild(sun);

    const moon = document.createElement("div");
    moon.className = "TEAM_D_ANI_A_MOON";
    moon.style.position = "absolute";
    moon.style.top = "25px";
    moon.style.right = "40px";
    moon.style.width = "60px";
    moon.style.height = "60px";
    moon.style.borderRadius = "50%";
    moon.style.background = "#e6e6e6";
    moon.style.boxShadow = "0 0 15px #e6e6e6";
    moon.style.display = "none";
    canvas.appendChild(moon);

    const text = document.createElement("div");
    text.className = "TEAM_D_ANI_A_TEXT";
    text.innerText = "what a sunny day";
    text.style.position = "absolute";
    text.style.top = "20px";
    text.style.left = "20px";
    text.style.fontSize = "20px";
    text.style.fontFamily = "Arial, sans-serif";
    text.style.color = "white";
    text.style.textShadow = "1px 1px 2px black";
    canvas.appendChild(text);

    const treePositions = [10, 30, 55, 75, 90];

  treePositions.forEach((pos) => {
    const trunk = document.createElement("div");
    trunk.className = "TEAM_D_ANI_A_TRUNK";
    trunk.style.position = "absolute";
    trunk.style.bottom = "90px";
    trunk.style.left = pos + "%";
    trunk.style.width = "18px";
    trunk.style.height = "90px";
    trunk.style.background = "#8b5a2b";
    canvas.appendChild(trunk);

    const leaves = document.createElement("div");
    leaves.className = "TEAM_D_ANI_A_LEAVES";
    leaves.style.position = "absolute";
    leaves.style.bottom = "150px";
    leaves.style.left = pos - 2 + "%";
    leaves.style.width = "70px";
    leaves.style.height = "70px";
    leaves.style.borderRadius = "50%";
    leaves.style.background = "#1f8f4a";
    canvas.appendChild(leaves);
  });

  let isDay = true;

  canvas.addEventListener("click", function (event) {
    if (event.button !== 0) return;

    isDay = !isDay;

    if (isDay) {
      canvas.style.background = "#6ecbff";
      sun.style.display = "block";
      moon.style.display = "none";
      text.innerText = "what a sunny day";
    } else {
      canvas.style.background = "#0b1b3d";
      sun.style.display = "none";
      moon.style.display = "block";
      text.innerText = "a calm night";
    }
  });
}

  /****************ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN B INSIDE HERE */
  /****************ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creatve, visual pattern using text, divs as shapes, images ... 
   * 2: add in mouseover event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniB(parentCanvas) {
    console.log("in ani-B -teamD");

  }
  /****************ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE HERE */
  /****************ANI C************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
   * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
   * 
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  /* TASK: make an interactive pattern .. colors, shapes, sizes, text, images....
   * using  ONLY key down and/or keyup -- any keys::
   */

  function aniC(parentCanvas) {
    console.log("in ani-C -teamD");

    /*** THIS IS THE CALLBACK FOR KEY DOWN (* DO NOT CHANGE THE NAME *..) */
    windowKeyDownRef = function (e) {
      //code for key down in here
      console.log(e);
      console.log("d-down");
    };

    /*** THIS IS THE CALLBACK FOR KEY UP (*DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
      console.log(e);
      console.log("d-up");
    };
    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
  }

  /****************ANI D************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN D INSIDE HERE */
  /****************ANI D************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in animation using requestAnimationFrame somewhere to make the sketch animate :)
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
  function aniD(parentCanvas) {
    console.log("in ani-D -teamD");
  }

}
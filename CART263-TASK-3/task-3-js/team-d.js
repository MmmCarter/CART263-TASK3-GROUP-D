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
    canvas.style.height = "300px";
    canvas.style.background = "#111";
    canvas.style.overflow = "hidden";
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

    //get the rendered bounding Box of parent and use the width and height
    let boundingBoxParent = parentCanvas.getBoundingClientRect();
    console.log(boundingBoxParent);

    const cellSize = 20;

    //hue values to generate different colors
    let hue = 0;

    //make a grid of cells
    for (let x = 0; x < boundingBoxParent.width; x += cellSize) {
      for (let y = 0; y < boundingBoxParent.height; y += cellSize) {
        //create a div and place in the grid
        let cell = document.createElement("div");
        cell.style.position = "absolute";
        cell.style.left = x + "px";
        cell.style.top = y + "px";
        cell.style.width = cellSize - 2 + "px";
        cell.style.height = cellSize - 2 + "px";
        cell.style.background = "rgba(200, 200, 200, 0.3)";

        //gradient effect for color change
        cell.style.transition = "background 0.8s linear";

        //mouseover event to change color
        cell.addEventListener("mouseover", () => {

          //change color to a random hue
          const color = `hsl(${hue}, 80%, 60%)`;
          cell.style.background = color;
          hue = (hue + 20) % 360;

          //fade back to original color after a short delay
          setTimeout(() => {
            cell.style.background = "rgba(200, 200, 200, 0.3)";
          }, 600);//600ms delay
        });

        parentCanvas.appendChild(cell);
      }
    }
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

    //set background color  of canvas
    parentCanvas.style.backgroundColor = "rgb(30, 30, 40)";

    //control whether the pattern generation is ongoing or not
    let spawnInterval = null;

    //create random color blocks
    function createBlock() {
      const block = document.createElement("div");

      // random position
      const x = Math.random() * parentCanvas.clientWidth;
      const y = Math.random() * parentCanvas.clientHeight;

      //hue
      const hue = Math.floor(Math.random() * 360);

      block.style.position = "absolute";
      block.style.left = x + "px";
      block.style.top = y + "px";
      block.style.width = "30px";
      block.style.height = "30px";
      block.style.background = `hsl(${hue}, 80%, 60%)`;
      block.style.opacity = "0.9";

      parentCanvas.appendChild(block);
    }

    /*** THIS IS THE CALLBACK FOR KEY DOWN (* DO NOT CHANGE THE NAME *..) */
    windowKeyDownRef = function (e) {
      //code for key down in here
      console.log(e);
      console.log("d-down", e.code);

      //generate blocks when we press space
      if (e.code === "Space") {
        // prevent page scrolling
        e.preventDefault();

        //if not generating yet, satrt interval
        if (!spawnInterval) {
          spawnInterval = setInterval(createBlock, 120);
        }
      }

      //clear blocks when we press backspace
      if (e.code === "Backspace") {
        const blocks = parentCanvas.querySelectorAll("div");
        blocks.forEach((b) => b.remove());
      }
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
    parentCanvas.style.position = "relative";
    let ellipses = [];

    for (let i = 0; i < 10; i++) {
      ellipses.push({
        x: Math.random() * (parentCanvas.clientWidth - 50),
        y: Math.random() * (parentCanvas.clientHeight - 50),
        speed: 1 + Math.random() * 2
      });
    }

    function animate() {
      //clear the canvas
      parentCanvas.innerHTML = "";
      //create a new div to represent the ellipse
      ellipses.forEach((ellipse) => {
        let ellipseDiv = document.createElement("div");
        ellipseDiv.style.position = "absolute";
        ellipseDiv.style.width = "50px";
        ellipseDiv.style.height = "50px";
        ellipseDiv.style.borderRadius = "50%";
        ellipseDiv.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        ellipseDiv.style.left = ellipse.x + "px";
        ellipseDiv.style.top = ellipse.y + "px";
        parentCanvas.appendChild(ellipseDiv);

        //update position for next frame
        ellipse.x += ellipse.speed;

        if (ellipse.x + 50 > parentCanvas.clientWidth) {
          ellipse.x = 0; // reset off screen
        }
      });

      //request next frame
      requestAnimationFrame(animate);
    }

    //start the animation
    animate();
  }
}

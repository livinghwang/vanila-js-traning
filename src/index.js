// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>
/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

let h2 = document.querySelector("h2");
const superEventHandler = {
  handleResize: function () {
    h2.innerHTML = "You Just Resized";
    h2.style.color = colors[1];
  },
  handleMouseHover: function () {
    h2.innerHTML = "The mouse is here";
    h2.style.color = colors[2];
  },
  handleMouseGone: function () {
    h2.innerHTML = "The mouse is gone";
    h2.style.color = colors[3];
  },
  handleMouseClick: function (e) {
    if (e.button === 2) {
      h2.innerHTML = "The mouse right is clicked";
      h2.style.color = colors[4];
    }
  }
};

window.addEventListener("resize", superEventHandler.handleResize);
h2.addEventListener("mouseover", superEventHandler.handleMouseHover);
h2.addEventListener("mouseleave", superEventHandler.handleMouseGone);
window.addEventListener("mousedown", superEventHandler.handleMouseClick);

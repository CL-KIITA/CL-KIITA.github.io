//import $ from "https://code.jquery.com/jquery-3.5.1.min.js";
// export for others scripts to use
let act = false;
let cout = 0;
console.log("Web page was loaded. \nNow is " + (act ? "active" : "not active") + ".\non " + cout + " times of toggle, and " + Math.floor((cout + 1) / 2) + " times of set.");
$(":root").click(function () {
  $(this).toggleClass('active');
  act = !act;
  cout++;
  console.log("Menu Button was toggled. \nNow is " + (act ? "active" : "not active") + ".\non " + cout + " times of toggle, and " + Math.floor((cout + 1) / 2) + " times of set.");
});
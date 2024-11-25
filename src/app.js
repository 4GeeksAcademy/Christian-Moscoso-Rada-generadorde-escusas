/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let subjects = ["My dog", "My cat", "My Neighbor", "A Stranger"];
  let actions = ["ate", "stole", "hid", "destroyed"];
  let objects = ["my homework", "my keys", "my lunch", "my proyect"];
  let times = ["yesterday", "this morning", "last night", "a few minutes ago"];

  const generateExcuse = () => {
    let randomSubject = Math.floor(Math.random() * subjects.length);
    let randomAction = Math.floor(Math.random() * actions.length);
    let randomObject = Math.floor(Math.random() * objects.length);
    let randomTime = Math.floor(Math.random() * times.length);

    let excuse =
      subjects[randomSubject] +
      " " +
      actions[randomAction] +
      " " +
      objects[randomObject] +
      " " +
      times[randomTime];
    document.querySelector("#excuse").innerHTML = excuse;
  };
  generateExcuse();
  document
    .querySelector("#generate-btn")
    .addEventListener("click", generateExcuse);
};

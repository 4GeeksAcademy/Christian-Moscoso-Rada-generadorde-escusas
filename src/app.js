/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let subjects = ["A lonely", "A slow", "A two headed"];
  let actions = [
    "merchant kiched",
    "jogger kicked",
    "merchant threw",
    "comedian burned",
    "pinecone yelled"
  ];
  let objects = ["my car", "my sandwich", "at my sandwich", "my proyect"];
  let times = [
    "near the toilet",
    "on the street",
    "in my house",
    "in front of the office"
  ];

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

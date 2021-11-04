var scores = JSON.parse(window.localStorage.getItem("user"));
console.log(scores);
scores.forEach((element) => {
  var usersScore = element.score;
  var scoreDiv = document.createElement("div");
  scoreDiv.innerText = usersScore;
  var currentUser = element.initials;
  var initialsDiv = document.createElement("div");
  initialsDiv.innerText = currentUser;
  var userScore = document.getElementById("user-score");
  var user = document.getElementById("user");
  user.appendChild(initialsDiv);
  userScore.appendChild(scoreDiv);
});

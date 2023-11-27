document.getElementById("button").addEventListener("click", buttonclicked);

let numscorespan = document.getElementById("num-score");

function buttonclicked() {
  document.getElementById("advice").innerHTML = "";
  document.getElementById("percentage").innerHTML = "";

  let numscore = 0;
  let quest1 = document.getElementById("question1").value.toLowerCase();
  if (quest1 === "george washington") {
    document.getElementById("answer1").innerHTML = "CORRECT";
    numscore++;
    numscorespan.innerHTML = numscore;
  } else {
    document.getElementById("answer1").innerHTML = "INCORRECT";
  }

  let quest2 = document.getElementById("question2").value.toLowerCase();

  if (quest2 === "abraham lincoln") {
    document.getElementById("answer2").innerHTML = "CORRECT";
    numscore++;
    numscorespan.innerHTML = numscore;
  } else {
    document.getElementById("answer2").innerHTML = "INCORRECT";
  }

  let quest3 = document.getElementById("question3").value.toLowerCase();

  if (quest3 === "cell") {
    document.getElementById("answer3").innerHTML = "CORRECT";
    numscore++;
    numscorespan.innerHTML = numscore + "/3";
  } else {
    document.getElementById("answer3").innerHTML = "INCORRECT";
    numscorespan.innerHTML = numscore + "/3";
  }

  //percentage calc
  let percentage = (numscore / 3) * 100;
  document.getElementById("percentage").innerHTML = percentage + "%";
  if (percentage < 34) {
    document.getElementById("advice").innerHTML =
      "some more time studying would prove to be helpful";
  } else if (percentage < 67) {
    document.getElementById("advice").innerHTML =
      "you could probably spend some more time to study";
  } else if (percentage < 100) {
    advice.innerHTML = "good... but not perfect";
  } else {
    document.getElementById("advice").innerHTML = "wow! nice job, a 100%!";
  }
}

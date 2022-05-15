var input = document.querySelector(".inputs-value");
var submitBtn = document.querySelector("#submit-btn");
var outputElement = document.querySelector("#output");

var correctans = ["90", "right angled"];

function submitanswer() {
//   console.log(input[0].value);
  var score = 0;
var index=0;
const formresults = new FormData(input);
for(let value of formresults.values()){
    if(value === correctans[index]){
        score= score+1
    }
    index=index+1
    
}
outputElement.innerText = "Score is "+ score
}


submitBtn.addEventListener("click", submitanswer);









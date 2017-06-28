// CLOCK
var clock = document.querySelector(".time");
var fullTime = true;

function displayTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  if (fullTime) {
    clock.innerHTML = hours + ":" + minutes + ":" + seconds;
  } else {
    clock.innerHTML = hours + ":" + minutes;
  }
}

function toggleTimeFormat() {
  fullTime = !fullTime;
}

clock.addEventListener("click", toggleTimeFormat);

setInterval(displayTime, 1000);

// SUM *the task was not very clear, but the result includes correct sum and closures*
function sum(x) {
  var total = 0;
  total += x;
  function add(y) {
    total += y;
    return total;
  }
  return add;
}

var sum1 = sum(1);
console.log(sum1(2));

// ERROR. we need semicolon as without it engine tries to execure function 5()

function() {
  var a = 5;
  alert(a);
};



// SECOND ERROR .as loop is finished before first timeOut fires -
// each timeOut will display  the final var. so we have to create scope for each setTimeout function, which contains i at the moment of its request

for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 0);
}

// or

// for (var i = 0; i < 10; i++) {
//     setTimeout((function(i) {
//         console.log(i);
//     })(i), 0);
// }

var box = document.getElementById('display');

var hasAnswer = false;

function toscreen(x) {
  
  if (x == 0) {
    if (box.value == 0) return;
    box.value = '';
  } else if (box.value == 0) {
    box.value = '';
  } else if (hasAnswer) {
    box.value = '';
  }
  hasAnswer = false;
  
  box.value += x;
  if (x==='c') {
    box.value='0';
  }
}

function answer() {
  var x = eval(box.value);
  if (x == box.value) {
    hasAnswer = false;
  } else {
    hasAnswer = true;
    box.value = x;
  }
}

function power() {
  var x = box.value;
  x = eval(x);
  box.value = eval(x*x);
  hasAnswer=true;
}

function backspace() {
  var x = box.value;
  if (x != 0 && !hasAnswer) {
    box.value = x.slice(0,x.length-1);
  }
}
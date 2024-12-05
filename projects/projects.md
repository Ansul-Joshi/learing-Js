project 1
const color = document.querySelectorAll('.button');
color.forEach(function (color) {
  color.addEventListener('click', function () {
    if (color.id == 'grey') {
      document.body.style.backgroundColor = 'grey';
    } else if (color.id == 'white') {
      document.body.style.backgroundColor = 'white';
    } else if (color.id == 'blue') {
      document.body.style.backgroundColor = 'blue';
    } else if (color.id == 'yellow') {
      document.body.style.backgroundColor = 'yellow';
    }
  });
});

project 2

// function cal(e) {
//   e.preventDefault();
//   const height = parseInt(document.getElementById('height').value);
//   console.log(height);
//   const weight = parseInt(document.getElementById('weight').value);
//   let calculate = weight / (height / 100) ** 2;
//   document.getElementById('results').innerHTML = calculate.toFixed(2);
// }

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  let calculate = weight / (height / 100) ** 2;
  document.getElementById('results').innerHTML = calculate.toFixed(2);
});

const clock = document.getElementById('clock');
setInterval(function () {
  let d = new Date();
  clock.innerHTML = d.toLocaleTimeString();
}, 1000);


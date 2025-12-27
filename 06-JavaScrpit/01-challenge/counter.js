const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const stepBtns = document.querySelectorAll('.step-btn');


let count = 0;
let step = 1;


function updateDisplay() {
    countDisplay.textContent = count;

    if (count > 0) {
        countDisplay.style.color = 'green';
    } else if (count < 0) {
        countDisplay.style.color = 'red';
    } else {
        countDisplay.style.color = 'black';
    }
}

incrementBtn.addEventListener('click', () => {
    count += step;
    updateDisplay();
});


decrementBtn.addEventListener('click', () => {
    count -= step;

    if (count < 0) count = 0; 

    updateDisplay();
});


resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

stepBtns.forEach(button => {
  button.addEventListener('click', () => {
    step = Number(button.dataset.step);
    stepBtns.forEach(btn => btn.classList.remove('active'));    
    button.classList.add('active');
  });
});



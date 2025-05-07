const form = document.getElementById('counterForm');
    const incrementBtn = document.getElementById("incrementBtn");
    const decrementBtn = document.getElementById("decrementBtn");
    const incrementBy5Btn = document.getElementById("incrementBy5Btn");
    const decrementBy5Btn = document.getElementById("decrementBy5Btn");
    const resultElement = document.getElementById('result');
    const resetBtn = document.getElementById("reset");

    let counter = 0;

    incrementBtn.addEventListener('click', function() {
      counter += 1;
      resultElement.textContent = counter;
    });

    decrementBtn.addEventListener('click', function() {
      if (counter > 0) counter -= 1;
      resultElement.textContent = counter;
    });

    incrementBy5Btn.addEventListener('click', function() {
      counter += 5;
      resultElement.textContent = counter;
    });

    decrementBy5Btn.addEventListener('click', function() {
      if (counter >= 5) counter -= 5;
      resultElement.textContent = counter;
    });

    resetBtn.addEventListener('click', function() {
      counter = 0;
      resultElement.textContent = counter;
    });

    // Prevent form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault();
    });
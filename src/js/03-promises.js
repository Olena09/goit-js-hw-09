const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget.elements;
  if (delay.value < 0 || step.value < 0 || amount.value < 0) {
    alert(`Incorrect!`);
  } else {
    for (let i = 0; i < amount.value; i += 1) {
      let position = i + 1;
      const newDelay = Number(delay.value) + step.value * i;
      createPromise(position, newDelay)
        .then(({ position, delay }) => {
          alert(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          alert(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }
  }
  event.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}





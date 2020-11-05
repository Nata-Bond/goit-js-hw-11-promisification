const delay = (ms) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ms) resolve(ms);
      reject(ms);
    }, ms);
  });
  return promise;
};

const logger = (time) => console.log(`resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

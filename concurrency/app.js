const sampleAsyncTask = (task) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${task} completed.`);
      resolve(`${task} resolved`);
    }, Math.random() * 1000);
  });
};

const tasks = [
  sampleAsyncTask("Task 1"),
  sampleAsyncTask("Task 2"),
  sampleAsyncTask("Task 3"),
];

Promise.all(tasks)
  .then((results) => {
    console.log("All tasks completed successfully.");
    console.log("Results:", results);
  })
  .catch((err) => {
    console.error("Error:", err);
  });

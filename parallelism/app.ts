const async = require("async");

type callbackType = (x: null, z: string) => void;

// Simulated asynchronous tasks
const task1 = (callback: callbackType) => {
  console.log("start running task 1");
  setTimeout(() => {
    callback(null, "Task 1 completed");
  }, 3000);
};

const task2 = (callback: callbackType) => {
  console.log("start running task 2");
  setTimeout(() => {
    callback(null, "Task 2 completed");
  }, 3000);
};

const task3 = (callback: callbackType) => {
  console.log("start running task 3");
  setTimeout(() => {
    callback(null, "Task 3 completed");
  }, 3000);
};

// Executing tasks in parallel
async.parallel([task1, task2, task3], (err: unknown, results: unknown) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Results:", results);
  }
});

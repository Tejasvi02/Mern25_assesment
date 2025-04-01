//7. Create an example showing usage of event loop in concurrent execution cycle
console.log("Execution Starts"); // 1. Synchronous execution

setTimeout(function () {
    console.log("First Callback"); // 4. Executes after 3 seconds

    setTimeout(function () {
        console.log("Inner Callback"); // 6. Executes immediately after "First Callback" (0ms delay)
        //but waits for the microtask in the queue which os second callback and third callback
    }, 0);
}, 3000);

setTimeout(function () {
    console.log("Second Callback"); // 5. Executes after 3 seconds
}, 3000);

setTimeout(function () {
    console.log("Third Callback"); // 5. Executes after 3 seconds
}, 3000);

console.log("Execution Ends"); // 2. Synchronous execution

console.log("Node.js is running!");
console.log("current directory:", __dirname);
console.log("Node version:", process.version);

console.log("1. Start of script");
setTimeout(()=> {
    console.log("3. This runs after 2 seconds (from the event queue)");
},2000);

console.log("2. End of script (run immediately, BEFORE the timeout)");
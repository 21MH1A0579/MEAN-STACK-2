function generateRandomStockPriceChange() {
    return Math.floor(Math.random() * 101); 
}

function simulateStockPriceChanges(count) {
    return new Promise((resolve, reject) => {
        let counter = 0;
        const intervalId = setInterval(() => {
            if (counter < count) {
                const stockPriceChange = generateRandomStockPriceChange();
                console.log(`Stock price change: ${stockPriceChange}`);
                counter++;
            } else {
                clearInterval(intervalId); // Stop the interval
                resolve("Simulation complete");
            }
        }, 3000); // Invoke every 3 seconds
    });
}

// Async function to execute the simulation
async function executeSimulation() {
    try {
        console.log("Starting simulation...");
        const result = await simulateStockPriceChanges(5); // Simulate stock price changes for 5 iterations
        console.log(result);
    } catch (error) {
        console.error("Error during simulation:", error);
    }
}

executeSimulation();

// Constants
const ticketPrice = 150; // Price per ticket in Rs.

// Function to calculate total price
function calculateTotalPrice(numberOfTickets) {
    let totalPrice = 0;

    // Condition (b): If seats are 6 or more, booking is not allowed
    if (numberOfTickets >= 6) {
        console.log("Booking is not allowed for 6 or more seats.");
        return totalPrice;
    }

    // Condition (a): If seats to be booked are not more than 2, the cost per ticket remains Rs. 150
    for (let i = 0; i < numberOfTickets; i++) {
        totalPrice += ticketPrice;
    }

    return totalPrice;
}

// Test cases
console.log("Online Movie Ticket Booking");

// Test case 1: Book 1 ticket
console.log("Booking 1 ticket...");
console.log("Total Price: Rs." + calculateTotalPrice(1));

// Test case 2: Book 3 tickets
console.log("\nBooking 3 tickets...");
console.log("Total Price: Rs." + calculateTotalPrice(3));

// Test case 3: Book 6 tickets (not allowed)
console.log("\nBooking 6 tickets...");
calculateTotalPrice(6);

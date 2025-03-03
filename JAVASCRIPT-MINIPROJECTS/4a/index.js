// Constants
const ticketPrice = 150; // Price per ticket in Rs.

// Function to calculate total price
function calculateTotalPrice(numberOfTickets) {
    // Condition (b): If seats are 6 or more, booking is not allowed
    if (numberOfTickets >= 6) {
        console.log("Booking is not allowed for 6 or more seats.");
        return 0;
    }

    // Condition (a): If seats to be booked are not more than 2, the cost per ticket remains Rs. 150
    function calculatePriceWithoutDiscount(numberOfTickets) {
        return numberOfTickets * ticketPrice;
    }

    // Function to calculate discounted price
    function calculateDiscountedPrice(numberOfTickets) {
        const discountedPrice = ticketPrice * 0.9; // 10% discount
        return numberOfTickets * discountedPrice;
    }

    // Calculate total price based on conditions
    let totalPrice;
    if (numberOfTickets <= 2) {
        totalPrice = calculatePriceWithoutDiscount(numberOfTickets);
    } else {
        totalPrice = calculateDiscountedPrice(numberOfTickets);
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

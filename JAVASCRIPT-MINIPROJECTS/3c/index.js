// Constants
const ticketPrice = 150; // Price per ticket in Rs.
const numberOfTickets = 5; // Number of tickets booked
const festiveDiscount = 0.1; // 10% festive season discount

// Calculate total price
const totalPrice = numberOfTickets * ticketPrice;

// Calculate discounted amount
const discountAmount = totalPrice * festiveDiscount;

// Calculate final price after discount
const finalPrice = totalPrice - discountAmount;

// Display results
console.log("Online Movie Ticket Booking");
console.log("Number of Tickets: " + numberOfTickets);
console.log("Price per Ticket: Rs." + ticketPrice);
console.log("Total Price: Rs." + totalPrice);
console.log("Festive Season Discount (10%): Rs." + discountAmount);
console.log("Final Price after Discount: Rs." + finalPrice);

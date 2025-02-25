document.getElementById("getStartedBtn").addEventListener("click", function() {
    window.location.href = "signup.html"; // Redirect to the signup or booking page
});
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    // Simple confirmation message
    document.getElementById("confirmationMessage").style.display = "block";
    document.getElementById("confirmationMessage").innerText = 
        `Thank you, ${name}. Your session is booked for ${date} at ${time}.`;

    // Here, you can send booking details to a server using fetch() if needed.
});


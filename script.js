function calculatePrice() {
    let documents = document.getElementById('documents').value;
    let location = document.getElementById('location').value;
    
    if (documents && location) {
        let basePrice = 10; // Base price per document
        let travelFee = 15;  // Example travel fee
        
        let totalCost = (documents * basePrice) + travelFee;
        document.getElementById('estimate-result').innerText = "Estimated Cost: $" + totalCost;
    } else {
        document.getElementById('estimate-result').innerText = "Please enter valid details.";
    }
}

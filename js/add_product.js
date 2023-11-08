// Add New Product to the Database------------------------------------------------------------
$(document).ready(function() {
    $("#add-new-product").click(function() {
        // Get form data
        var productName = $("#ProductName").val();
        var price = $("#Price").val();
        var wholesalePrice = $("#WholesalePrice").val();
        var quantity = $("#Quantity").val();

        // Basic input validation
        if (!productName || !price || !wholesalePrice || !quantity) {
            alert("Please fill out all required fields.");
            return; // Stop the function execution
        }

        // Other form data
        var description = $("#Description").val();
        var categoryID = $("#categoryID").val();
        var supplierID = $("#supplierID").val();

        // AJAX request
        $.ajax({
            url: 'functions/sales/add_product.php',
            type: 'POST',
            data: {
                name: productName,
                description: description,
                price: price,
                wholesalePrice: wholesalePrice,
                quantity: quantity,
                categoryID: categoryID,
                supplierID: supplierID
            },
            success: function(response) {
                // Handle success
                showSuccessModal(response);
                
                // Clear all input fields after success
                resetInputFields();
            },
            error: function(error) {
                // Handle error
                console.error(error)
                // Clear all input fields after error (if needed)
                resetInputFields();
            }
        });
    });
});

// End of Add New Product to the Database Code -------------------------------------------------------

// Function to show the modal with success message
function showSuccessModal(message) {
    var modal = document.getElementById("successModal");
    var successMessage = document.getElementById("successMessage");
    successMessage.innerHTML = message;
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("successModal");
    modal.style.display = "none";
}

// Close the modal when clicking on the close button
var closeBtn = document.getElementById("close-success-alert");
if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
}

// Close the modal when clicking outside the modal
window.onclick = function(event) {
    var modal = document.getElementById("successModal");
    if (event.target == modal) {
        closeModal();
    }
}

// Function to reset all input fields
function resetInputFields() {
    $("#ProductName").val('');
    $("#Price").val('');
    $("#WholesalePrice").val('');
    $("#Quantity").val('');
    $("#Description").val('');
    $("#reOrderLevel").val('');
    $("#categoryID").val('');
    $("#supplierID").val('');

}
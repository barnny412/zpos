// Add New Product to the Database------------------------------------------------------------
$(document).ready(function() {
    $("#submit-cashing").click(function() {
        console.log('I Have been clicked');
        // Get form data
        var k100 = $("#k100").val();
        var k50 = $("#k50").val();
        var k20 = $("#k20").val();
        var k10 = $("#k10").val();
        var k5 = $("#k5").val();
        var k2 = $("#k2").val();
        var k1 = $("#k1").val();
        var n50 = $("#n50").val();

        // AJAX request
        $.ajax({
            url: 'unctions/cash/add_cash_sale.phpf',
            type: 'POST',
            data: {
                k100: k100,
                k50: k50,
                k20: k20,
                k10: k10,
                k5: k5,
                k2: k2,
                k1: k1,
                n50: n50
            },
            success: function(response) {
                // Handle success
                showSuccessModal(response);
                
                // Clear input fields after success
                resetInputFields();
                
        
            },
            error: function(error) {
                // Handle error
                console.error(error);
                
                // Clear all input fields after error (if needed)
                resetInputFields();
            }
        });
    });
});

// End of Add Cash to the Database Code -------------------------------------------------------

// Function to reset all input fields
function resetInputFields() {
    $("#k100").val('');
    $("#k50").val('');
    $("#k20").val('');
    $("#k10").val('');
    $("#k5").val('');
    $("#k2").val('');
    $("#k1").val('');
    $("#n50").val('');
    $("#cash-total").val('');

    // You can also reset any other input fields if needed.
}

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
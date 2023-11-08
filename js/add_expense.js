// Add New Product to the Database------------------------------------------------------------
$(document).ready(function() {
    $("#submit-expensees").click(function() {
        console.log('I Have been clicked');
        // Get form data
        var expenseAmount = $("#expense_amount").val();
        var categoryID = $("#expense_category_id").val();
        var description = $("#expense_description").val();

        // Basic input validation
        if (!expenseAmount || !description ) {
            alert("Please fill out all required fields.");
            return; // Stop the function execution
        }

        // AJAX request
        $.ajax({
            url: 'functions/expenses/add_expense.php',
            type: 'POST',
            data: {
                expenseAmount: expenseAmount,
                description: description,
                categoryID: categoryID
            },
            success: function(response) {
                // Handle success
                showSuccessModal(response);
                
                // Clear input fields after success
                $("#expense_amount").val('');
                $("#expense_category_id").val(''); 
                $("#expense_description").val('');
            },
            error: function(error) {
                // Handle error
                console.error(error);
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
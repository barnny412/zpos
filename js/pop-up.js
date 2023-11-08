// Add New Category MOdal
$(document).ready(function() {
    // Get the "Add New Category" button using jQuery
    var addButton3 = $("#add-new-supplier");

    // Get the modal element using jQuery
    var modal = $("#addNewSupplierModal");

    // When the "Add New Category" button is clicked, display the modal
    addButton3.click(function() {
        modal.css("display", "block");
    });

    // When the user clicks on the "x" button, close the modal
    var closeButton = $(".close");
    closeButton.click(function() {
        modal.css("display", "none");
    });

    // When the user clicks anywhere outside of the modal, close it
    $(window).click(function(event) {
        if (event.target == modal[0]) {
            modal.css("display", "none");
        }
    });
});

// Add New Supplier MOdal
$(document).ready(function() {
    // Get the "Add New Category" button using jQuery
    var addNewCategoryButton3 = $("#add-new-category");

    // Get the modal element using jQuery
    var modal = $("#addNewCategoryModal");

    // When the "Add New Category" button is clicked, display the modal
    addNewCategoryButton3.click(function() {
        modal.css("display", "block");
    });

    // When the user clicks on the "x" button, close the modal
    var closeButton = $(".close");
    closeButton.click(function() {
        modal.css("display", "none");
    });

    // When the user clicks anywhere outside of the modal, close it
    $(window).click(function(event) {
        if (event.target == modal[0]) {
            modal.css("display", "none");
        }
    });
});
// Function to fetch and display products by type
function fetchPurchaseProductsByType(type, tabId) {
    $.ajax({
        url: 'functions/purchases/get_' + type + '.php', // PHP script to fetch data
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            // Loop through the products and create product cards
            var productDiv = document.getElementById(tabId);
            productDiv.innerHTML = ''; // Clear previous data

            data.forEach(function(product) {
                var card = document.createElement('div');
                card.className = 'purchase-product-card';
                card.innerHTML = `
                    <div class="product-id">${product.ProductID}</div>
                    <div class="product-name">${product.ProductName}</div>
                    <div class="product-price">K${product.WholesalePrice}</div>
                `;
                productDiv.appendChild(card);
            });
        },
        error: function(error) {
            console.log('Error:', error);
        }
    });
}

// Fetch all products when the page loads
$(document).ready(function() {
    fetchPurchaseProductsByType('all_products', 'purchaseTab1');
});

// Fetch drinks when the page loads
$(document).ready(function() {
    fetchPurchaseProductsByType('drinks', 'purchaseTab2');
});

// Fetch cigarettes when the page loads
$(document).ready(function() {
    fetchPurchaseProductsByType('cigarettes', 'purchaseTab6');
});

const elementsWithClass = document.querySelectorAll('.purchase-product-card');

    elementsWithClass.forEach(function(element) {
      element.addEventListener('click', function(event) {
        console.log('Element with class clicked!');

        const pCard = event.target.closest('.purchase-product-card');

    if (pCard) {
        const productName = pCard.querySelector('.product-name').textContent;
        const content = pCard.querySelector('.packet-content').textContent;
        const price = pCard.querySelector('.product-price').textContent.slice(1);
        //const productPrice = parseFloat(pCard.querySelector('.product-price').textContent.slice(1));
        console.log('i have clicked!');

        // Add the product to the cart
        
        
    }
      });
    });

    document.getElementById("add-button2").addEventListener("click", function() {
        // Get the weighed products elements
        const weighedProductSelect = document.getElementById('product-dropdown2');
        const selectedProduct = weighedProductSelect.options[weighedProductSelect.selectedIndex];
        const optionValue = selectedProduct.value;

        const costPrice = document.getElementById('cost-price').value;
        const weight = document.getElementById('weight2').value;
        const productName = selectedProduct.text;
        const productID = optionValue;

        if (isNaN(weight) || weight <= 0) {
            alert('Please enter a valid weight.');
            return;
        }

        //var productID =
        console.log("Product ID:", productID);
        console.log("Product Name:", productName);
        console.log("Product Price:", costPrice);
        console.log("Product Weight:", weight);

        addToPurchaseCart2(productID, productName, costPrice, weight);
        // Clear the weight and cost-price input fields
        costPrice.value = "";
        weight.value = "";
    });

// CODE THAT DEALS WITH CHANGING TABS==============================================================================================    

function changeProductTab(tabId) {
    const productTab = document.querySelectorAll('.products');
    productTab.forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
  }

  function changePurchaseProductTab(tabId) {
    const PurchaseProductTab = document.querySelectorAll('.purchase-products');
    PurchaseProductTab.forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
  }

  function changeMainTab(tabId) {
    const mainTab = document.querySelectorAll('.container');
    mainTab.forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
  }

//==================================================================================================================================  


// CODE THAT DEALS WITH WEIGHED PRODUCTS============================================================================================

// Get the weighed products elements
const weighedProductSelect = document.getElementById('product-dropdown');
const weighedProductWeight = document.getElementById('weight');
const addWeighedProductBtn = document.getElementById('add-button');

// Add click event listener to the "Add" button for weighed products
addWeighedProductBtn.addEventListener('click', () => {
    const selectedProduct = weighedProductSelect.options[weighedProductSelect.selectedIndex];
    const weight = parseFloat(weighedProductWeight.value);
    const optionValue = selectedProduct.value;

    // Split the option value to extract product ID, name, and price
    const productID = optionValue;

    if (isNaN(weight) || weight <= 0) {
        alert('Please enter a valid weight.');
        return;
    }

    // Extract the product name and price from the text content
    const productNameAndPrice = selectedProduct.textContent;
      
    // Split the product name and price into separate parts
    const [productName, productPrice] = productNameAndPrice.split(" - ");

    // Log the product ID, name, and price to the console
    console.log("Product ID:", productID);
    console.log("Product Name:", productName);
    console.log("Product Price:", productPrice);
    console.log("Product Weight:", weight);

    if (productPrice === undefined) {
        alert('Invalid product selected.');
        return;
    }

    const totalPrice = productPrice * weight;

    addToCart2(productID, productName, productPrice, weight);
    weighedProductWeight.value = ''; // Clear the weight input after adding to cart

    console.log(cartItems);
});



//=================================================================================================================================


// Get the products container and the cart table body

const cartTableBody = document.querySelector('.cart table tbody');
const cartTableBody2 = document.querySelector('.purchase-cart table tbody');

// Cart items array to store added products
const cartItems = [];
const cartItems2 = [];

// Function to handle adding a product to the cart
function addToCart(productId ,productName, productPrice) {
    
    // Check if the product is already in the cart
    const existingProduct = cartItems.find(item => item.name === productName);

    if (existingProduct) {
        // Increase the quantity and total of the existing product
        existingProduct.quantity++;
        existingProduct.total = existingProduct.quantity * productPrice;
    } else {
        // Add the product to the cart items array with the generated ID
        cartItems.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1,
            total: productPrice,
        });
    }

    // Update the cart content
    updateCart();
}

// Function to handle adding purchase product to the cart
function addToPurchaseCart(productId ,productName, costPrice) {
    
    // Check if the product is already in the cart
    const existingProduct = cartItems2.find(item => item.name === productName);

    if (existingProduct) {
        // Increase the quantity and total of the existing product
        existingProduct.quantity++;
        existingProduct.total = existingProduct.quantity * costPrice;
    } else {
        // Add the product to the cart items array with the generated ID
        cartItems2.push({
            id: productId,
            name: productName,
            price: costPrice,
            quantity: 1,
            total: costPrice,
        });
    }

    // Update the cart content
    updatePurchaseCart();
}

// Function to handle adding a product to the cart
function addToCart2(productId ,productName, productPrice, weight) {
    
    // Check if the product is already in the cart
    const existingProduct = cartItems.find(item => item.name === productName);

    if (existingProduct) {
        // Increase the quantity and total of the existing product
        existingProduct.quantity+= weight;
        existingProduct.total = existingProduct.quantity * productPrice;
    } else {
        // Add the product to the cart items array with the generated ID
        cartItems.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: weight,
            total: weight * productPrice,
        });
    }

    // Update the cart content
    updateCart();
}

// Function to handle adding a product to the cart
function addToPurchaseCart2(productId ,productName, costPrice, weight) {
    
    // Check if the product is already in the cart
    const existingProduct = cartItems2.find(item => item.name === productName);

    if (existingProduct) {
        // Increase the quantity and total of the existing product
        existingProduct.quantity+= weight;
        existingProduct.total = existingProduct.quantity * costPrice;
    } else {
        // Add the product to the cart items array with the generated ID
        cartItems2.push({
            id: productId,
            name: productName,
            price: costPrice,
            quantity: weight,
            total: 1 * costPrice,
        });
    }

    // Update the cart content
    updatePurchaseCart();
}

// Function to handle changing the quantity in the cart
function changeQuantity(productName, newQuantity) {
    const existingProduct = cartItems.find(item => item.name === productName);

    if (existingProduct) {
        // Update the quantity and total of the existing product
        existingProduct.quantity = newQuantity;
        existingProduct.total = existingProduct.quantity * existingProduct.price;
        updateCart();
    }
}

// Function to handle changing the quantity in the cart
function changeQuantity2(productName, newQuantity) {
    const existingProduct = cartItems2.find(item => item.name === productName);

    if (existingProduct) {
        // Update the quantity and total of the existing product
        existingProduct.quantity = newQuantity;
        existingProduct.total = existingProduct.quantity * existingProduct.price;
        updatePurchaseCart();
    }
}

// Function to delete a cart item
function deleteCartItem(productName) {
    const index = cartItems.findIndex(item => item.name === productName);

    if (index !== -1) {
        cartItems.splice(index, 1);
        updateCart();
    }
}

// Function to delete a cart2 item
function deleteCart2Item(productName) {
    const index = cartItems2.findIndex(item => item.name === productName);

    if (index !== -1) {
        cartItems2.splice(index, 1);
        updatePurchaseCart();
    }
}

// Function to update the cart content
function updateCart() {
    // Clear the cart table body
    cartTableBody.innerHTML = '';

    // Update the cart table with the current cart items
    cartItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>
                <button class="quantity-btn" data-action="increase" data-product="${item.name}">+</button>
                <input type="text" class="quantity-input" value="${item.quantity}" data-product="${item.name}" min="1">
                <button class="quantity-btn" data-action="decrease" data-product="${item.name}">-</button>
            </td>
            <td>$${item.price}</td>
            <td>$${parseFloat(item.total).toFixed(2)}</td>
            <td><button class="delete-btn" data-product="${item.name}">X</button></td>
        `;

        cartTableBody.appendChild(row);
    });


    // Add click event listeners to delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            deleteCartItem(productName);
        });
    });

    // Add click event listeners to quantity buttons
    const quantityButtons = document.querySelectorAll('.quantity-btn');
    quantityButtons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-action');
            const productName = button.getAttribute('data-product');
            const inputElement = cartTableBody.querySelector(`.quantity-input[data-product="${productName}"]`);
            let currentQuantity = parseInt(inputElement.value);

            if (action === 'decrease') {
                if (currentQuantity > 0) {
                    changeQuantity(productName, currentQuantity - 1);
                }
            } else if (action === 'increase') {
                changeQuantity(productName, currentQuantity + 1);
            }
        });
    });

     // Update the total in the cart info div
     const cartTotal = cartItems.reduce((total, item) => total + item.total, 0);
     const cartTotalSpan = document.querySelector('.cart-total');
     cartTotalSpan.textContent = `Total K: ${parseFloat(cartTotal).toFixed(2)}`;
}

// Function to update the Purchase cart content
function updatePurchaseCart() {
    // Clear the cart table body
    cartTableBody2.innerHTML = '';

    // Update the cart table with the current cart items
    cartItems2.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>
                <button class="quantity-btn2" data-action="increase" data-product="${item.name}">+</button>
                <input type="text" class="quantity-input" value="${item.quantity}" data-product="${item.name}" min="1">
                <button class="quantity-btn2" data-action="decrease" data-product="${item.name}">-</button>
            </td>
            <td>$${item.price}</td>
            <td>$${parseFloat(item.total).toFixed(2)}</td>
            <td><button class="delete-btn2" data-product="${item.name}">X</button></td>
        `;

        cartTableBody2.appendChild(row);
    });


    // Add click event listeners to delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            deleteCartItem(productName);
        });
    });

    // Add click event listeners to delete buttons
    const deleteButtons2 = document.querySelectorAll('.delete-btn2');
    deleteButtons2.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            deleteCart2Item(productName);
        });
    });

    // Add click event listeners to quantity buttons
    const quantityButtons2 = document.querySelectorAll('.quantity-btn2');
    quantityButtons2.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-action');
            const productName = button.getAttribute('data-product');
            const inputElement = cartTableBody2.querySelector(`.quantity-input[data-product="${productName}"]`);
            let currentQuantity = parseInt(inputElement.value);
    
            if (action === 'decrease') {
                if (currentQuantity > 0) {
                    changeQuantity2(productName, currentQuantity - 1);
                }
            } else if (action === 'increase') {
                changeQuantity2(productName, currentQuantity + 1);
            }
        });
    });



     // Update the total in the cart info div
     const cartTotal2 = cartItems2.reduce((total, item) => total + item.total, 0);
     const cartTotalSpan = document.querySelector('.cart-total2');
     cartTotalSpan.textContent = `Total K: ${parseFloat(cartTotal2).toFixed(2)}`;
}

// Add click event listener to the products container
document.addEventListener('click', (event) => {
    const productCard = event.target.closest('.product-card');

    if (productCard) {
        const productId = productCard.querySelector('.product-id').textContent;
        const productName = productCard.querySelector('.product-name').textContent;
        const productPrice = parseFloat(productCard.querySelector('.product-price').textContent.slice(1));

        // Add the product to the cart
        addToCart(productId, productName, productPrice);
    }
});

// Add click event listener to the purchases product cards
document.addEventListener('click', (event) => {
    const productCard = event.target.closest('.purchase-product-card');

    if (productCard) {
        const productId = productCard.querySelector('.product-id').textContent;
        const productName = productCard.querySelector('.product-name').textContent;
        const costPrice = parseFloat(productCard.querySelector('.product-price').textContent.slice(1));

        // Add the product to the cart
        addToPurchaseCart(productId, productName, costPrice);
    }
});

// Add Items to Cart using Barcode Scanner============================================================
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('search-input').addEventListener('keydown', function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            var barcode = document.getElementById('search-input').value;

            $.ajax({
                type: 'POST',
                url: 'functions/barcode/processBarcode.php',
                data: { barcode: barcode },
                success: function (response) {
                    console.log("Response from server:", response);

                    try {
                        var product = JSON.parse(response);

                        const productId = product.ProductID;
                        const productName = product.ProductName;
                        const productPrice = product.Price;

                        // Display product information in the console
                        console.log("Product ID: " + productId);
                        console.log("Product Name: " + productName);
                        console.log("Price: $" + productPrice);

                        // Add the product to the cart
                        addToCart(productId, productName, productPrice);
                        updateCart();
                    } catch (error) {
                        console.error("JSON parsing error:", error);
                        // Handle the error, e.g., show an error message to the user
                    }
                    document.getElementById('search-input').value = '';
                }
            });
        }
    });
});


// Add Purchase Items to Cart using Barcode Scanner============================================================
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('purchase-search-input').addEventListener('keydown', function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            var barcode = document.getElementById('purchase-search-input').value;

            $.ajax({
                type: 'POST',
                url: 'functions/barcode/processBarcode2.php',
                data: { barcode: barcode },
                success: function (response) {
                    try {
                        var product = JSON.parse(response);

                        const productId = product.ProductID;
                        const productName = product.ProductName;
                        const costPrice = product.WholesalePrice;

                        // Display product information in the console
                        console.log("Product ID: " + productId);
                        console.log("Product Name: " + productName);
                        console.log("Price: $" + costPrice);

                        // Add the product to the cart
                        addToPurchaseCart(productId, productName, costPrice);
                        updatePurchaseCart();
                    } catch (error) {
                        console.error("JSON parsing error:", error);
                        // Handle the error, e.g., show an error message to the user
                    }
                    document.getElementById('purchase-search-input').value = '';
                }
            });
        }
    });
});


// Get the search input element
const searchInput = document.getElementById('search-input');

// Add input event listener to the search input
searchInput.addEventListener('input', (event) => {
    const searchKeyword = event.target.value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productName = card.querySelector('.product-name').textContent.toLowerCase();
        if (productName.includes(searchKeyword)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

// Get the search input element
const searchInput2 = document.getElementById('purchase-search-input');

// Add input event listener to the search input
searchInput2.addEventListener('input', (event) => {
    const searchKeyword = event.target.value.toLowerCase();
    const productCards = document.querySelectorAll('.purchase-product-card');

    productCards.forEach(card => {
        const productName = card.querySelector('.product-name').textContent.toLowerCase();
        if (productName.includes(searchKeyword)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});


/// Function to generate the receipt content
function generateReceiptContent(cashAmount) {
    const receiptDate = new Date().toLocaleString();

    let receiptContent = `
------------------------------------
        FrontMark Trading LTD
               Receipt
------------------------------------
Date: ${receiptDate}
Receipt No: 
Item Details                  Total
------------------------------------`;

    cartItems.forEach(item => {
        const itemName = item.name;
        const totalPrice = `$${item.total.toFixed(2)}`;
        
        receiptContent += `\n${itemName.padEnd(30)} ${totalPrice.padStart(0)}`;
    });

    const cartTotal = cartItems.reduce((total, item) => total + item.total, 0);
    const amountPaid = cashAmount;
    const change = amountPaid - cartTotal;

    receiptContent += `
------------------------------------
Total K:${cartTotal.toFixed(2).toString().padStart(0)}
Amount Paid:${'$' + amountPaid.toFixed(2).toString().padStart(0)}
Change:${'$' + change.toFixed(2).toString().padStart(0)}
------------------------------------
Thank you for shopping with us!`;

    return receiptContent;
}


// Function to handle the "Process Payment" button click
function processPayment() {

        // Calculate the total amount in the cart
        const cartTotal = cartItems.reduce((total, item) => total + item.total, 0);

        // Show the custom cash input modal
        const cashInputModal = document.getElementById('cash-input-modal');
        cashInputModal.style.display = 'flex';

        const cartTotalElement = document.getElementById('cart-total');
        cartTotalElement.textContent = cartTotal.toFixed(2);

        // Focus on the cash amount input box
        const cashAmountInput = document.getElementById('cash-amount-input');
        cashAmountInput.focus();

        // Add keydown event listener to the cash amount input field
        cashAmountInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            // Trigger a click on the "Confirm" button
            const confirmCashButton = document.getElementById('confirm-cash-button');
            confirmCashButton.click();
        }
    });


    // Add click event listener to the "Confirm" button in the cash input modal
    const confirmCashButton = document.getElementById('confirm-cash-button');
    confirmCashButton.addEventListener('click', () => {
        const cashAmountInput = document.getElementById('cash-amount-input');
        const cashAmount = parseFloat(cashAmountInput.value);

        if (isNaN(cashAmount)) {
            alert('Invalid cash amount. Please enter a valid number.');
            return;
        }

        // Generate the receipt content using the cash amount
        const receiptContent = generateReceiptContent(cashAmount);

        // Close the cash input modal
        cashInputModal.style.display = 'none';

        // Define the customerID and userID based on your application logic
        const customerID = 1; // Replace with the actual customer's ID
        const userID = 1;   
        // Make an AJAX request to process_payment.php in the functions folder
        fetch('functions/sales/process_payment.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'cartTotal=' + cartTotal + '&customerID=' + customerID + '&userID=' + userID,
        })
        .then(response => response.text())
        .then(data => {
            // Parse the XML response
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');
            
            const success = xmlDoc.querySelector('success').textContent;
            const message = xmlDoc.querySelector('message').textContent;
            
            if (success === 'true') {
                console.log('Payment processed and recorded successfully:', message);

                // You can access the SalesID from the XML response
                const salesID = xmlDoc.querySelector('salesID').textContent;
                console.log('SalesID:', salesID);

                // After successful insertion into Sales, insert into SalesDetails
                // Send the salesDetailsData to the insert_sales_details.php using AJAX
                insertSalesDetails(salesID);
                
                // Display the payment details in the custom alert modal
                const paymentDetails = `Total Amount: $${cartTotal.toFixed(2)}<br>Cash Amount: $${cashAmount.toFixed(2)}<br>Change Amount: $${(cashAmount - cartTotal).toFixed(2)}`;
                document.getElementById('payment-details').innerHTML = paymentDetails;

            } else {
                console.error('Failed to record payment:', message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while processing the payment.');
        });

                console.log(cartItems);
                // Iterate through cart items and send sales details data for each item

                    
               

        // Print the receipt
        printReceipt(receiptContent);

        // Clear the cart after successful payment
        //cartItems.length = 0;
        updateCart();
    });
}


function insertSalesDetails(salesID) {
    // Send the salesID and cartItems to the insert_sales_details.php using AJAX
    $.ajax({
        type: 'POST',
        url: 'functions/sales/insert_sales_details.php', // Replace with the actual path to your PHP file
        data: {
            salesID: salesID,
            cartItems: JSON.stringify(cartItems)
        },
        success: function(response) {
            if (response.success) {
                // Handle a successful response from the server
                console.log(response.message); // "Checkout successful."
                var sID = response.salesID;

                // Use the salesID in your JavaScript code
                console.log("salesID: " + sID);
                console.log('Total Price:', response.totalPrice);

            } else {
                // Handle errors here
                console.error(response.message); // Display error message
            }
        },
        error: function(xhr, status, error) {
            // Handle HTTP errors here
            console.error('HTTP Error:', error);
        }
    });

    // Show the custom alert modal
    const customAlert = document.getElementById('custom-alert');
    customAlert.style.display = 'flex';
}

// Function to print the receipt
function printReceipt(content) {
    const receiptWindow = window.open('', '_blank', 'width=300,height=400');
    receiptWindow.document.write('<pre>' + content + '</pre>');
    receiptWindow.document.close();
    receiptWindow.print();
    receiptWindow.close();
}

// Add click event listener to the "Process Payment" button
const processPaymentButton = document.getElementById('process-payment-btn');
processPaymentButton.addEventListener('click', processPayment);

// Add click event listener to the "OK" button in the custom alert
const closeAlertButton = document.getElementById('close-alert');
closeAlertButton.addEventListener('click', () => {
    console.log('i have been clicked');
    // Clear the cart after successful payment
    cartItems.length = 0;
    updateCart();
    const customAlert = document.getElementById('custom-alert');
    customAlert.style.display = 'none';
    $("#cash-amount-input").val('');
});

// Add click event listener to the "Cancel" button in the cash input modal
const cancelCashButton = document.getElementById('cancel-cash-button');
cancelCashButton.addEventListener('click', () => {
    const cashInputModal = document.getElementById('cash-input-modal');
    cashInputModal.style.display = 'none';
});

function updateTotalStocks() {
    var qty = parseFloat(document.getElementById("quantity").value);
    var pcksize = parseFloat(document.getElementById("pack-size").value);
    var totalStocks= qty * pcksize;
    document.getElementById("total-stocks").value = totalStocks;
    updateTotalPurchase();
}

function updateTotalPurchase() {
    var qty = parseFloat(document.getElementById("quantity").value);
    var wholesalePrice = parseFloat(document.getElementById("wholesale-price").value);
    var totalPurchase = qty * wholesalePrice;
    document.getElementById("total-purchase-price").value = totalPurchase;
}

function updateResult() {
    var num1 = parseFloat(document.getElementById("k100").value);
    var num2 = parseFloat(document.getElementById("k50").value);
    var num3 = parseFloat(document.getElementById("k20").value);
    var num4 = parseFloat(document.getElementById("k10").value);
    var num5 = parseFloat(document.getElementById("k5").value);
    var num6 = parseFloat(document.getElementById("k2").value);
    var num7 = parseFloat(document.getElementById("k1").value);
    var num8 = parseFloat(document.getElementById("n50").value);

    var totalCash = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8;

    document.getElementById("cash-total").value = totalCash;
}


// Add click event listener to the "Confirm" button in the cash input modal
const savePurchaseButton = document.getElementById('save-purchase-btn');
savePurchaseButton.addEventListener('click', () => {
    console.log('I have been clicked');

    // Calculate the total amount in the cart
    const cartTotal2 = cartItems2.reduce((total, item) => total + item.total, 0);

    // Define the customerID and userID based on your application logic
    const supplierID = 1; // Replace with the actual customer's ID
    const userID = 1;   
    // Make an AJAX request to process_payment.php in the functions folder
    fetch('functions/purchases/process_purchase.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'cartTotal=' + cartTotal2 + '&supplierID=' + supplierID + '&userID=' + userID,
    })
    .then(response => response.text())
    .then(data => {
        // Parse the XML response
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        
        const success = xmlDoc.querySelector('success').textContent;
        const message = xmlDoc.querySelector('message').textContent;
        
        if (success === 'true') {
            console.log('Payment processed and recorded successfully:', message);

            // You can access the SalesID from the XML response
            const purchaseID = xmlDoc.querySelector('purchaseID').textContent;
            console.log('PurchaseID:', purchaseID);

            // After successful insertion into Sales, insert into SalesDetails
            // Send the salesDetailsData to the insert_sales_details.php using AJAX
            insertPurchasesDetails(purchaseID);
            

        } else {
            console.error('Failed to record payment:', message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while processing the payment.');
    });

            console.log(cartItems2);
            // Iterate through cart items and send sales details data for each item
   
            updatePurchaseCart();
});


function insertPurchasesDetails(purchaseID) {
    // Send the salesID and cartItems to the insert_sales_details.php using AJAX
    $.ajax({
        type: 'POST',
        url: 'functions/purchases/insert_purchase_details.php', // Replace with the actual path to your PHP file
        data: {
            purchaseID: purchaseID,
            cartItems: JSON.stringify(cartItems2)
        },
        success: function(response) {
            if (response.success) {
                // Handle a successful response from the server
                console.log(response.message); // "Checkout successful."
                var sID = response.purchaseID;

                console.log("Purchase: " + sID);

            } else {
                // Handle errors here
                console.error(response.message); // Display error message
            }
        },
        error: function(xhr, status, error) {
            // Handle HTTP errors here
            console.error('HTTP Error:', error);
        }
    });

    // Show the custom alert modal
    const customAlert = document.getElementById('purchase-custom-alert');
    customAlert.style.display = 'flex';
}

// Add click event listener to the "OK" button in the custom alert
const closePurchaseAlertButton = document.getElementById('p-close-alert');
closePurchaseAlertButton.addEventListener('click', () => {
    console.log('i have been clicked');
    // Clear the cart after successful payment
    cartItems2.length = 0;
    updatePurchaseCart();
    const customAlert = document.getElementById('purchase-custom-alert');
    customAlert.style.display = 'none';
});




// End of POS Script

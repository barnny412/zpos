<div class="custom-modal" id="cash-input-modal">
        <div class="modal-container">
            <div class="modal-content">
                <p>Total: K <span id="cart-total">0</span></p>
                <h2>Enter Cash Amount</h2>
                <input type="number" id="cash-amount-input" placeholder="Enter cash amount">
                <button id="confirm-cash-button">Confirm</button>
                <button id="cancel-cash-button">Cancel</button>
            </div>
        </div>   
</div>

<div class="custom-modal" id="sales-return-modal">
        <div class="modal-container">
        <h1>Sales Returns Form</h1>
        <form action="process_return.php" method="post">
            <label for="original_sales_id">Original Sales ID:</label>
            <input type="text" name="original_sales_id" id="original_sales_id" required><br>

            <label for="product_id">Product ID:</label>
            <input type="text" name="product_id" id="product_id" required><br>

            <label for="quantity_returned">Quantity Returned:</label>
            <input type="number" name="quantity_returned" id="quantity_returned" required><br>

            <label for="reason">Reason for Return:</label>
            <textarea name="reason" id="reason" required></textarea><br>

            <input type="submit" value="Submit">
        </form>
        </div>   
</div>

    <div class="custom-alert" id="custom-alert">
        <div class="alert-content">
            <h2>Payment Successful!</h2>
            <p id="payment-details"></p>
            <button id="close-alert">OK</button>
        </div>
    </div>

    <div class="custom-alert" id="purchase-custom-alert">
        <div class="alert-content">
            <h2>Success</h2>
            <p id="payment-details">Purchases Saved successfully</p>
            <button id="p-close-alert">OK</button>
        </div>
    </div>

    <div id="successModal" class="modal">
    <div class="modal-content">
        <h2>Success</h2>
        <p id="successMessage"></p>
        <button id="close-success-alert">OK</button>
    </div>
</div>


<div id="addNewCategoryModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <!-- Add your form for adding a new category here -->
        <form id="add-category-form">
            <!-- Add your form fields (e.g., category name, description) here -->
            <input type="text" id="categoryName" name="categoryName" placeholder="Supplier Name">
            <button type="submit">Add Category</button>
        </form>
    </div>
</div>

<div id="addNewSupplierModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <!-- Add your form for adding a new category here -->
        <form id="add-category-form">
            <!-- Add your form fields (e.g., category name, description) here -->
            <input type="text" id="supplierName" name="supplierName" placeholder="Supplier Name" >
            <button type="submit">Add Supplier</button>
        </form>
    </div>
</div>




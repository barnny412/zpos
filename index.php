<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FrontMark POS</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <header class="header">
        <div class="header-left">
            <div class="logo">
            </div>
            <div class="pos-name">FrontMark POS</div>
            <div class="tab-nav-buttons">
                <button onclick="changeMainTab('mainTab1')">Sales</button>
                <button onclick="changeMainTab('mainTab2')">Purchases</button>
                <button onclick="changeMainTab('mainTab3')">Expenses</button>
                <button onclick="changeMainTab('mainTab4')">Add New Product</button>
            </div>
        </div>
        <div class="header-right">
            <div class="tab-nav-buttons">
                <button onclick="changeMainTab('mainTab5')">Cashing</button>
            </div>
            <div class="user">Barnny</div>
            <div class="logout">
                <button id="logoutBtn">Logout</button>
            </div>
        </div>
    </header>


    <div class="container active" id="mainTab1">
        <div class="left">
            <div class="search-bar">
                <input type="text" id="search-input" placeholder="Search products or Scan Using Barcode Reader" autofocus>
            </div>
            <div class="weighed-products-head">Weighed Products
            </div>
            <div class="weighed-products">
                <div class="dropdown">
                    <select id="product-dropdown">
                    <option value="1">Select Product</option>
                    <?php
                        // Include your database connection file here
                        include("config.php");

                        // Fetch categories from the database
                        $query = "SELECT ProductID, ProductName, Price FROM products where CategoryID = 4";
                        $stmt = $db->query($query);

                        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                            echo '<option value="' . $row['ProductID'] . '">' . $row['ProductName'] . ' - ' . $row['Price'] . '</option>';
                        }
                    ?>
                    </select>
                </div>
                <div class="weight-input">
                    <input type="number" id="weight" placeholder="Enter weight">
                </div>
                <button id="add-button">Add</button>
            </div>
            
            <!-- Content -->
            <div class="content">
                <!-- All Products -->
                <div class="products active" id="tab1">
                    
                </div>
                <!-- Drinks -->
                <div class="products" id="tab2">
                    
                </div>
                <!-- Baked Foods -->
                <div class="products" id="tab3">
                    
                </div>
                <!-- Vegetables -->
                <div class="products" id="tab4">

                    
                </div>
                <!-- All Butchery -->
                <div class="products" id="tab5">
                    
                </div>
                <!-- Cigarrets -->
                <div class="products" id="tab6">
                    
                </div>

            </div>
            <div class="bottom-menu">
                <button class="menu-button" onclick="changeProductTab('tab1')">All Products</button>
                <button class="menu-button" onclick="changeProductTab('tab2')">Drinks</button>
                <button class="menu-button" onclick="changeProductTab('tab3')">Baked Foods</button>
                <button class="menu-button" onclick="changeProductTab('tab4')">Vegetables</button>
                <button class="menu-button" onclick="changeProductTab('tab5')">Butchery</button>
                <button class="menu-button" onclick="changeProductTab('tab6')">Cigarettes</button>
            </div>
        </div>
        
        <div class="right">
            <!-- Table for the cart -->
            <div class="cart">
                <div class="cart-table">
                    <table>
                        <thead>
                            <tr>
                                <th class="id-header">Id</th>
                                <th class="product-header">Product</th>
                                <th class="qty-header">Qty</th>
                                <th class="price-header">Price</th>
                                <th class="total-header">Total</th>
                                <th class="action-header">Del</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Cart items will be dynamically added here -->
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="bottom-right">
                <div class="cart-info">
                    <!-- Add cart information here -->
                    <div class="cart-summary">
                        <span class="cart-total">Total:</span>
                    </div>
    
                </div>
                <div class="process-payment">
                    <button id="process-payment-btn">Process Payment</button>
                </div>
            </div>
        </div>
    </div>

    <div class="container" id="mainTab2">
        <div class="left">
            <div class="search-bar">
                <input type="text" id="purchase-search-input" placeholder="Search products...">
            </div>
            <div class="weighed-products-head">Weighed Products</div>
            <div class="weighed-products">
                <div class="dropdown">
                    <select id="product-dropdown2">
                        <option value="1">Select Product</option>
                        <?php
                            // Include your database connection file here
                            include("config.php");

                            // Fetch categories from the database
                            $query = "SELECT ProductID, ProductName, Price FROM products where CategoryID = 4";
                            $stmt = $db->query($query);

                            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                                echo '<option value="' . $row['ProductID'] . '">' . $row['ProductName'] . '</option>';
                            }
                        ?>
                    </select>
                </div>
                <div class="weight-input">
                    <input type="number" id="cost-price" placeholder="Price">
                </div>
                <div class="weight-input">
                    <input type="number" id="weight2" placeholder="Weight">
                </div>
                <button id="add-button2">Add</button>
            </div>
            
            <!-- Content -->
            <div class="content">
                <!-- All Products -->
                <div class="purchase-products active" id="purchaseTab1">
                       
                </div>
                <!-- Drinks -->
                <div class="purchase-products" id="purchaseTab2">
                    
                </div>
                <!-- Baked Foods -->
                <div class="purchase-products" id="purchaseTab3">
                    
                </div>
                <!-- Vegetables -->
                <div class="purchase-products" id="purchaseTab4">
                    
                </div>
                <!-- All Butchery -->
                <div class="purchase-products" id="purchaseTab5">
                    
                </div>
                <!-- Cigarrets -->
                <div class="purchase-products" id="purchaseTab6">
                    
                </div>

            </div>
            <div class="bottom-menu">
                <button class="purchase-menu-button" onclick="changePurchaseProductTab('purchaseTab1')">All Products</button>
                <button class="purchase-menu-button" onclick="changePurchaseProductTab('purchaseTab2')">Drinks</button>
                <button class="purchase-menu-button" onclick="changePurchaseProductTab('purchaseTab3')">Baked Foods</button>
                <button class="purchase-menu-button" onclick="changePurchaseProductTab('purchaseTab4')">Vegetables</button>
                <button class="purchase-menu-button" onclick="changePurchaseProductTab('purchaseTab5')">Butchery</button>
                <button class="purchase-menu-button" onclick="changePurchaseProductTab('purchaseTab6')">Cigarettes</button>
            </div>
        </div>
        
        <div class="right-purchases">
            <!-- Table for the cart -->
            <div class="purchase-cart" id="purchase-cart">
                <div class="cart-table">
                    <table>
                        <thead>
                            <tr>
                                <th class="id-header">Id</th>
                                <th class="product-header">Product</th>
                                <th class="qty-header">Qty</th>
                                <th class="price-header">Price</th>
                                <th class="total-header">Total</th>
                                <th class="action-header">Del</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Cart items will be dynamically added here -->
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="bottom-right">
                <div class="cart-info">
                    <!-- Add cart information here -->
                    <div class="cart-summary">
                        <span class="cart-total2">Total:</span>
                    </div>
                </div>
                <div class="process-payment">
                    <button id="save-purchase-btn">Save Purhases</button>
                </div>
            </div>
        </div>

        
    </div>

    <div class="container" id="mainTab3">
        <div class="left">
            <div class="expense-container">
            <h2>Expenses</h2>
            <br>
                    
                        <div class="form-group">
                            <label for="expense_amount">Expense Amount:</label>
                            <input class="expense" type="number" id="expense_amount" name="expense_amount" step="0.01" min="0" placeholder="Enter Amount here" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="expense_category">Expense Category:</label>
                            <select class="expense" id="expense_category_id" name="expense_category">
                                <option value="1">Category</option>
                                <?php
                                                // Include your database connection file here
                                                include("config.php");

                                                // Fetch categories from the database
                                                $query = "SELECT ExpenseCategoryID, CategoryName FROM 	expensecategory";
                                                $stmt = $db->query($query);

                                                while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                                                    echo '<option value="' . $row['ExpenseCategoryID'] . '">' . $row['CategoryName'] . '</option>';
                                                }
                                            ?>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="expense_description">Description:</label>
                            <input class="expense" type="text" id="expense_description" name="expense_description" step="0.01" min="0" placeholder="Description" required>
                        </div>
                        
                        <br>
                        <div class="form-row">
                            <button class="submit-expenses" id="submit-expensees">Submit</button>
                        </div>
                    
            </div>
        </div>
        <div class="right">
            
        </div>

    </div>

    <div class="container" id="mainTab4">
        <div class="left">

            <div class="expense-container">
                <h2>Add New Product</h2>
                <br>
                <div class="new-product-container">
                            
                            <div class="form-group">
                                <label>Product Name:</label>
                                <input type="text" id="ProductName" name="ProductName" placeholder="Product Name">
                            </div>
                            <div class="product-section">
                                <div class="form-group">
                                    <label>Price:</label>
                                    <input type="number" id="Price" name="Price" min="0" placeholder="Price">
                                </div>
                                
                                <div class="form-group">
                                    <label>Wholesale Price:</label>
                                    <input type="number" id="WholesalePrice" name="WholesalePrice" step="0.01" min="0" placeholder="Wholesale Price" required>
                                </div>
                            </div>

                            
                            <div class="form-group">
                                <label>Number in Pack:</label>
                                <input type="number" id="Quantity" name="Quantity" step="0.01" min="0" placeholder="Number in Pack">
                            </div>
                            
                            <div class="form-group">
                                <label>Description:</label>
                                <input type="text" id="Description" name="Description" placeholder="Description">
                            </div>

                            <div class="form-group">
                                <label>Re-Order Level:</label>
                                <input type="text" id="reOrderLevel" name="reOrderLevel" placeholder="Re-Order Level">
                            </div>

                            <div class="form-group">
                                    <label>Category:</label>
                                    <div class ="group">
                                        <select id="categoryID" name="categoryID">
                                            <option value="1">Category</option>
                                            <?php
                                                // Include your database connection file here
                                                include("config.php");

                                                // Fetch categories from the database
                                                $query = "SELECT CategoryID, CategoryName FROM category";
                                                $stmt = $db->query($query);

                                                while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                                                    echo '<option value="' . $row['CategoryID'] . '">' . $row['CategoryName'] . '</option>';
                                                }
                                            ?>
                                        </select>
                                        <div>
                                            <button class="add-small" id="add-new-category"><b>+</b></button>
                                        </div>
                                    </div>
                                </div>
                            
                                <div class="form-group">
                                    <label>Supplier:</label>
                                    <div class ="group">
                                        <select id="supplierID" name="supplierID">
                                            <option value="1">Supplier</option>
                                            <?php
                                                // Include your database connection file here
                                                include("config.php");

                                                // Fetch categories from the database
                                                $query = "SELECT SupplierID, supplierName FROM supplier";
                                                $stmt = $db->query($query);

                                                while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                                                    echo '<option value="' . $row['SupplierID'] . '">' . $row['supplierName'] . '</option>';
                                                }
                                            ?>
                                        </select>
                                        <div>
                                            <button class="add-small" id="add-new-supplier"><b>+</b></button>
                                        </div>
                                    </div>
                                </div>
                        <button class="submit-product" id="add-new-product">Submit</button>
                    </div>
                    
            </div>
        </div>

        <div class="right">
            
        </div>
        
    </div>

    <div class="container" id="mainTab5">
        <div class="left">
            
            <div class="denomination-container">
                <div class="sec1">
                    <div class="form-group">
                        <label>K 100</label>
                        <input type="number"id="k100" placeholder="K100s">
                    </div>
                    <div class="form-group">
                        <label>K 50</label>
                        <input type="number" id="k50" placeholder="K50s">
                    </div>
                    <div class="form-group">
                        <label>K 20</label>
                        <input type="number"id="k20" placeholder="K20s">
                    </div>
                    <div class="form-group">
                        <label>K 10</label>
                        <input type="number" id="k10" placeholder="K10s">
                    </div>
                </div>
                <div class="sec1">
                    <div class="form-group">
                        <label>K 5</label>
                        <input type="number"id="k5" placeholder="K5s">
                    </div>
                    <div class="form-group">
                        <label>K 2</label>
                        <input type="number" id="k2" placeholder="K2s">
                    </div>
                    <div class="form-group">
                        <label>K 1</label>
                        <input type="number"id="k1" placeholder="K1.00s">
                    </div>
                    <div class="form-group">
                        <label>Ngwee 0.50</label>
                        <input type="number" id="n50" placeholder="K0.50s" oninput="updateResult()">
                    </div>
                </div>
                <div class="form-group">
                    <div class="cash-total">
                        <h3>Total Cash</h3>
                        <input type="number" id="cash-total" placeholder="Total">
                    </div>
                   
                </div>
                
                
            </div>
            <button class="submitBtn" id="submit-cashing">Submit</button>
        </div>
        <div class="right">
            
        </div>
    </div>


    <?php include "includes/custom_modals.php"?>
    
    <footer>
        <p>&copy; 2023 FrontMark Trading Limited</p>
    </footer>
	<script src="js/app.js"></script>
    <script src="js/add_product.js"></script> 
    <script src="js/add_expense.js"></script> 
    <script src="js/add_cash_sale.js"></script> 
    <script src="js/pop-up.js"></script>     
    <script src="js/get_products.js"></script>  
    <script src="js/get_purchase_products.js"></script>  
     
</body>
</html>

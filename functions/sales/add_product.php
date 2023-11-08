<?php
// Include your database connection file here
include '../../config.php';

// Retrieve data from AJAX request
$productName = $_POST['name'];
$description = $_POST['description'];
$price = $_POST['price'];
$wholesalePrice = $_POST['wholesalePrice'];
$quantity = $_POST['quantity'];
$reOrderLevel = $_POST['reOrderLevel'];
$categoryID = $_POST['categoryID'];
$supplierID = $_POST['supplierID'];

try {
    // Prepare SQL statement
    $sql = "INSERT INTO products (ProductName, Description, Price, WholesalePrice, Quantity, ReorderLevel, CategoryID, SupplierID) 
            VALUES (:name, :description, :price, :wholesalePrice, :quantity, :reOrderLevel, :categoryID, :supplierID)";

    $stmt = $db->prepare($sql);

    // Bind parameters
    $stmt->bindParam(':name', $productName);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':price', $price);
    $stmt->bindParam(':wholesalePrice', $wholesalePrice);
    $stmt->bindParam(':quantity', $quantity);
    $stmt->bindParam(':reOrderLevel', $reOrderLevel);
    $stmt->bindParam(':categoryID', $categoryID);
    $stmt->bindParam(':supplierID', $supplierID);

    // Execute the query
    if ($stmt->execute()) {
        // Provide a response indicating success
        $message = "New Product $productName successfully added to the Database";
        echo $message; 
    } else {
        $response = ["message" => "Error adding product."];
        echo json_encode($response);
    }
} catch (PDOException $e) {
    echo "Database error: " . $e->getMessage();
}
?>

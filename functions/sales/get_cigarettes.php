<?php
// Connect to your database
include '../../config.php';

// Fetch product data from the database
$query = "SELECT * FROM products where CategoryID = 3 AND QuantityInStock > 0";
$stmt = $db->prepare($query);
$stmt->execute();
$products = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return data as JSON
header('Content-Type: application/json');
echo json_encode($products);
?>

<?php
// Include your database connection file here
include '../../config.php';

// Fetch product data from the database
$query = "SELECT * FROM products where CategoryID = 3";
$stmt = $db->prepare($query);
$stmt->execute();
$products = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return data as JSON
header('Content-Type: application/json');
echo json_encode($products);
?>

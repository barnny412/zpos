<?php
if (isset($_POST['barcode'])) {
    $barcode = $_POST['barcode'];

    // Database connection parameters
    $dbHost = 'localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'demo_db';

    try {
        // Connect to the database
        $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUsername, $dbPassword);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Perform a database lookup
        $query = "SELECT ProductID, ProductName, Price FROM products WHERE Barcode = :barcode";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':barcode', $barcode);
        $stmt->execute();

        $product = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($product) {
            // Return product information as JSON
            echo json_encode($product);
        } else {
            echo "Barcode not found in the database.";
        }

        $pdo = null; // Close the database connection
    } catch (PDOException $e) {
        echo "Database error: " . $e->getMessage();
    }
} else {
    echo "Invalid request";
}
?>

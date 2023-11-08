<?php

include '../../config.php';

// Check if the request is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the salesID and cartItems from the POST data
    $salesID = $_POST['salesID'];
    $cartItemsJSON = $_POST['cartItems'];

    // Decode the JSON data
    $cartItems = json_decode($cartItemsJSON, true);

        // Initialize an array to store inserted sales details
        $insertedSalesDetails = [];

        // Iterate through cart items and insert into the salesdetails table
        foreach ($cartItems as $item) {
            $productID = $item['id'];
            $quantity = $item['quantity'];
            $unitPrice = $item['price'];

            // Construct the SQL query to insert into salesdetails
            $sql = "INSERT INTO salesdetails (ProductID, Quantity, UnitPrice, SalesID) VALUES (?, ?, ?, ?)";

            // Prepare the SQL statement
            $stmt = $db->prepare($sql);

            // Bind parameters
            $stmt->bindParam(1, $productID, PDO::PARAM_INT);
            $stmt->bindParam(2, $quantity, PDO::PARAM_INT);
            $stmt->bindParam(3, $unitPrice, PDO::PARAM_STR);
            $stmt->bindParam(4, $salesID, PDO::PARAM_INT); // Assuming $salesID is available

            // Execute the prepared statement
            $result = $stmt->execute();

            // Handle any errors or log successful insertions here
            if ($result) {
                // Insert was successful, add the sales detail to the response array
                $insertedSalesDetails[] = array(
                    'ProductID' => $productID,
                    'Quantity' => $quantity,
                    'UnitPrice' => $unitPrice,
                    'SalesID' => $salesID
                );

                // Deduct the sold quantity from QuantityInStock in the products table
                // Multiply the sold quantity by QuantityInStock in the products table
                $updateSql = "UPDATE Products SET QuantityInStock = QuantityInStock + (? * Quantity) WHERE ProductID = ?";
                $updateStmt = $db->prepare($updateSql);
                $updateStmt->execute([$quantity, $productID]);
                
            } else {
                // Insert failed for this item
                // You can handle this error case as needed
            }
        }

        // Calculate the total price
        $totalPrice = calculateTotalPrice($cartItems);

        // Construct the response
        $response = array(
            'success' => true,
            'message' => 'Sales details inserted successfully',
            'salesID' => $salesID,
            'salesDetails' => $insertedSalesDetails,
            'totalPrice' => $totalPrice
        );

        // Send the JSON response
        header('Content-Type: application/json');
        echo json_encode($response);

} else {
    // Handle other request methods (e.g., GET) or invalid requests here
    $response = array(
        'success' => false,
        'message' => 'Invalid request method'
    );

    // Send an error JSON response
    header('Content-Type: application/json');
    http_response_code(400); // Bad Request
    echo json_encode($response);
    exit; // Terminate script execution
}

// Function to calculate the total price from cart items
function calculateTotalPrice($cartItems) {
    $totalPrice = 0;
    foreach ($cartItems as $item) {
        $totalPrice += $item['quantity'] * $item['price'];
    }
    return $totalPrice;
}
?>

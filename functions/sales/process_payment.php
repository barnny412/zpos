<?php
// Connect to your database
include '../../config.php';

// Parse incoming data from the AJAX request
$cartTotal = floatval($_POST['cartTotal']);
$customerID = intval($_POST['customerID']);
$userID = intval($_POST['userID']);

try {
    // Insert a record into the Sales table
    $insertQuery = "INSERT INTO sales (TotalAmount, CustomerID, UserID) 
                    VALUES (:totalAmount, :customerID, :userID)";

    $stmt = $db->prepare($insertQuery);
    $stmt->bindParam(':totalAmount', $cartTotal, PDO::PARAM_STR);
    $stmt->bindParam(':customerID', $customerID, PDO::PARAM_INT);
    $stmt->bindParam(':userID', $userID, PDO::PARAM_INT);

    // Execute the query
    if ($stmt->execute()) {

        // Retrieve the last inserted SalesID
        $salesID = $db->lastInsertId();
        
        

        $response = "<response>";
        $response .= "<success>true</success>";
        $response .= "<message>Payment processed and recorded successfully</message>";
        $response .= "<salesID>{$salesID}</salesID>"; // Include SalesID in the response
        $response .= "</response>";
    } else {
        $response = "<response>";
        $response .= "<success>false</success>";
        $response .= "<message>Failed to record payment</message>";
        $response .= "</response>";
    }

    // Send an XML response back to the AJAX request
    header('Content-Type: text/xml');
    echo $response;
} catch (PDOException $e) {
    $response = "<response>";
    $response .= "<success>false</success>";
    $response .= "<message>Database error: " . $e->getMessage() . "</message>";
    $response .= "</response>";
    
    // Send an XML response back to the AJAX request
    header('Content-Type: text/xml');
    echo $response;
}


?>

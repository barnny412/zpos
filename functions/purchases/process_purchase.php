<?php
// Include your database connection file here
include '../../config.php';

// Parse incoming data from the AJAX request
$cartTotal = floatval($_POST['cartTotal']);
$supplierID = intval($_POST['supplierID']);
$userID = intval($_POST['userID']);

try {
    // Insert a record into the Sales table
    $insertQuery = "INSERT INTO purchases (TotalAmount, SupplierID, UserID) 
                    VALUES (:totalAmount, :supplierID, :userID)";

    $stmt = $db->prepare($insertQuery);
    $stmt->bindParam(':totalAmount', $cartTotal, PDO::PARAM_STR);
    $stmt->bindParam(':supplierID', $supplierID, PDO::PARAM_INT);
    $stmt->bindParam(':userID', $userID, PDO::PARAM_INT);

    // Execute the query
    if ($stmt->execute()) {

        // Retrieve the last inserted SalesID
        $purchaseID = $db->lastInsertId();
        
        

        $response = "<response>";
        $response .= "<success>true</success>";
        $response .= "<message>Payment processed and recorded successfully</message>";
        $response .= "<purchaseID>{$purchaseID}</purchaseID>"; // Include SalesID in the response
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

<?php
// Include your database connection file here
include '../../config.php';

// Retrieve data from AJAX request
$description = $_POST['description'];
$expenseAmount = $_POST['expenseAmount'];
$categoryID = $_POST['categoryID'];

try {
    // Prepare SQL statement
    $sql = "INSERT INTO expenses (Description, TotalAmount, CategoryID) 
            VALUES (:description, :expenseAmount, :categoryID)";

    $stmt = $db->prepare($sql);

    // Bind parameters
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':expenseAmount', $expenseAmount);
    $stmt->bindParam(':categoryID', $categoryID);

    // Execute the query
    if ($stmt->execute()) {
        // Provide a response indicating success
        $message = "Expense successfully submitted";
        echo $message; 
    } else {
        $response = ["message" => "Error submitting Expense."];
        echo json_encode($response);
    }
} catch (PDOException $e) {
    echo "Database error: " . $e->getMessage();
}
?>

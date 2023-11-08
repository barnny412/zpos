<?php
// Include your database connection file here
include '../../config.php';

// Retrieve data from AJAX request
$k100 = $_POST['k100'];
$k50 = $_POST['k50'];
$k20 = $_POST['k20'];
$k10 = $_POST['k10'];
$k5 = $_POST['k5'];
$k2 = $_POST['k2'];
$k1 = $_POST['k1'];
$n50 = $_POST['n50'];

try {
    // Prepare SQL statement
    $sql = "INSERT INTO cash (K100, K50, K20, K10, K5, K2, K1, N50) 
            VALUES (:k100, :k50, :k20, :k10, :k5, :k2, :k1, :n50)";

    $stmt = $db->prepare($sql);

    // Bind parameters
    $stmt->bindParam(':k100', $k100);
    $stmt->bindParam(':k50', $k50);
    $stmt->bindParam(':k20', $k20);
    $stmt->bindParam(':k10', $k10);
    $stmt->bindParam(':k5', $k5);
    $stmt->bindParam(':k2', $k2);
    $stmt->bindParam(':k1', $k1);
    $stmt->bindParam(':n50', $n50);

    // Execute the query
    if ($stmt->execute()) {
        // Provide a response indicating success
        $message = "Cash Sale successfully submitted";
        echo $message; 
    } else {
        $response = ["message" => "Error submitting Cash Sale."];
        echo json_encode($response);
    }
} catch (PDOException $e) {
    echo "Database error: " . $e->getMessage();
}
?>

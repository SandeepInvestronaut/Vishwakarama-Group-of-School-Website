<!DOCTYPE html>
<html>

<head>
    <title>Insert Page page</title>
</head>

<body>
<?php

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "vgs-form-leads";

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $db);

// Check connection
if ($conn === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

// Taking all values from the form data(input)
$name = mysqli_real_escape_string($conn, $_REQUEST['name']);
$email = mysqli_real_escape_string($conn, $_REQUEST['email']);
$message = mysqli_real_escape_string($conn, $_REQUEST['message']);

// SQL query to insert the data into the table
$sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";

// Check if the query is successful
if (mysqli_query($conn, $sql)) {
    // Redirect to the Thank You page
    header("Location: ../thankyou.html");
    exit();
} else {
    echo "ERROR: Hush! Sorry $sql. " . mysqli_error($conn);
}

// Close connection
mysqli_close($conn);
?>


</body>

</html>
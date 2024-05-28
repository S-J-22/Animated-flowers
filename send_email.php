<?php
// Set the recipient email address
$to = "recipient@example.com";

// Get the user's response from the form
$response = $_POST['response'];

// Set the email subject
$subject = "User Response";

// Set the email message
$message = "User Response: " . $response;

// Set additional headers
$headers = "From: sender@example.com" . "\r\n" .
           "Reply-To: sender@example.com" . "\r\n" .
           "X-Mailer: PHP/" . phpversion();

// Send the email
mail($to, $subject, $message, $headers);
?>

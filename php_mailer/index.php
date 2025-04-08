<?php
// Allow requests from any origin (for testing) or specific domain
header("Access-Control-Allow-Origin: http://localhost:3000"); // Replace with your front-end domain
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

error_reporting(0);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';

// Set headers to allow JSON response
header("Content-Type: application/json");

try {


     
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Invalid request method.');
    }

     
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    
    // Sanitize and extract form fields
    $name       = htmlspecialchars($data['fullname'] ?? ''); // Handle if 'page_title' is not present
    $email   = htmlspecialchars($data['email']);
    $message      = $data['message'];
    $phone      = htmlspecialchars($data['phone']);
    $service  = htmlspecialchars($data['service'] ?? ''); // Handle if 'page_title' is not present
    // Validate form fields

    if (empty($name) || empty($email) || empty($message) || empty($phone)) {
        throw new Exception('All fields are required.');
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Invalid email format.');
    }

    // Initialize PHPMailer
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = 'smtp.mallorcaweddingsandevents.com';           // SMTP server
    $mail->SMTPAuth   = true;                           // Enable SMTP authentication
    $mail->Username   = 'sending@mallorcaweddingsandevents.com'; // Your Gmail email address
    $mail->Password   = '%a2w9fA08';        // Your Gmail password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Encryption method
    $mail->Port       = 465;                            // TCP port to connect to

    // Send email to admin
    $mail->setFrom('sending@mallorcaweddingsandevents.com', 'Mallorcaweddingsandevents');
    $mail->addAddress('info@mallorcaweddingsandevents.com');
    $mail->addAddress('adnankhan125@gmail.com');
                     
     // Prepare admin email content
    $mail->isHTML(true);
    $mail->Subject = 'Inquiry - ' . $name;

    $html = "
    Hello Admin,
    <p>The following fields were submitted:</p>
    <b>Name:</b> {$name}<br>
    <b>Email:</b> {$email}<br>";

  
    if (!empty($phone)) {
        $html .= "<b>Phone:</b> {$phone}<br>";
    }

    if (!empty($service)) {
        $html .= "<b>Service:</b> {$service}<br>";
    }

    if (!empty($message)) {
        $html .= "<b>Message:</b> {$message}<br>";
    }

    
    $html .= "<br>Warm regards,<br>
        CreaMallorcaweddingsandeventstiveLogoDesign<br>
        sending@mallorcaweddingsandevents.com";

    $mail->Body = $html;

    // Send admin email
    if (!$mail->send()) {
        throw new Exception('Failed to send admin email.');
    }

  

    // Send customer confirmation email
    if ($mail->send()) {
        
        // Respond with a success message in JSON format
        echo json_encode(['success' => true, 'message' => 'Emails sent successfully']);
    } else {
        throw new Exception('Failed to send confirmation email.');
    }
} catch (Exception $e) {
    // Log error and respond with a JSON error message
    error_log("Mailer Error: {$e->getMessage()}");
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}

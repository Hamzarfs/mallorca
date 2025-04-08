<?php
header("Access-Control-Allow-Origin: https://mallorca.digilitsolutions.com/");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

error_reporting(0);

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

try {
    // Validate request method
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Invalid request method.');
    }

    // Get and validate form data
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $name = htmlspecialchars($data['name'] ?? '');
    $email = htmlspecialchars($data['email'] ?? '');

    // Validate required fields
    if (empty($name) || empty($email)) {
        throw new Exception('Name and email are required.');
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Invalid email format.');
    }

    // Initialize PHPMailer with your working SMTP config
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'test@digilitsolutions.com';
    $mail->Password = 'Redfsol@123';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;



    // Send confirmation to user
    $mail->setFrom('test@digilitsolutions.com', 'Mallorca Weddings and Events');
    $mail->addAddress($email, $name);
    
    $mail->isHTML(true);
    $mail->Subject = 'Your Wedding Brochure Download';

    $mail->Body = "
        <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
            <h2 style='color: #4E321A;'>Dear $name,</h2>
            <p style='font-size: 16px;'>Thank you for requesting our wedding brochure!</p>
            <p style='margin: 25px 0;'>
                <a href='https://mallorcaweddingsandevents.com/wedding-brochure.pdf' 
                   style='background-color: #4E321A; color: #F3EBE0; padding: 12px 25px; 
                          text-decoration: none; border-radius: 5px; display: inline-block;'>
                    Download Brochure
                </a>
            </p>
            <p style='font-size: 14px; color: #666;'>
                Can't click the button? Copy this link:<br>
                https://mallorcaweddingsandevents.com/wedding-brochure.pdf
            </p>
            <p style='font-size: 14px;'>
                Warm regards,<br>
                Mallorca Weddings and Events Team
            </p>
        </div>
    ";

    // Plain text version
    $mail->AltBody = "Dear $name,\n\nThank you for requesting our wedding brochure!\n\n" .
                     "Download link: https://mallorcaweddingsandevents.com/wedding-brochure.pdf\n\n" .
                     "Best regards,\nMallorca Weddings and Events Team";

    // Send notification to admin
    $adminMail = clone $mail;
    $adminMail->clearAddresses();
    // $adminMail->addAddress('info@mallorcaweddingsandevents.com');
    $adminMail->addAddress('hamzasarwar.rfs@gmail.com');
    $adminMail->Subject = 'New Brochure Download - ' . $name;
    $adminMail->Body = "
        <p>A new user has requested the wedding brochure:</p>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
    ";

    // Send both emails
    $mail->send();      // To customer
    $adminMail->send(); // To admin

    echo json_encode(['success' => true, 'message' => 'Brochure sent successfully']);

} catch (Exception $e) {
    error_log("Brochure Mail Error: " . $e->getMessage());
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
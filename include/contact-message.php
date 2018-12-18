<?php

/* Namespace alias */
use PHPMailer\PHPMailer\PHPMailer;
$mailHost = 'smtp.gmail.com';
$mailUsername = getenv('WALLISCONSULTANCY_MAIL_USERNAME');
$mailPassword = getenv('WALLISCONSULTANCY_MAIL_PASSWORD');
/* Include the Composer generated autoload.php file. */
require './vendor/autoload.php';

//initialise variables
$name = $email = $message = "";


  // require_once('phpmailer/class.phpmailer.php');
  // $mail = new PHPMailer();
	// $mail->IsSendmail(); // telling the class to use SendMail transport
	$mail = new PHPMailer;
	//Tell PHPMailer to use SMTP
	$mail->isSMTP();
	//Enable SMTP debugging
	// 0 = off (for production use)
	// 1 = client messages
	// 2 = client and server messages
	$mail->SMTPDebug = 0;
	$mail->Host = $mailHost;
	$mail->Port = 587;
	$mail->SMTPSecure = 'tls';
	$mail->SMTPAuth = true;
	$mail->Username = $mailUsername;
	$mail->Password = $mailPassword;

// Get variables after submit has happened
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = ucwords(tidyInput($_POST['fullname']));
  $email = tidyInput($_POST['email']);
  $message = htmlspecialchars($_POST['text']);
}

//Gets rid of added spaces at end, takes / off and ensures that Javascript cannot be used.
function tidyInput($input) {
  $input = trim($input);
  $input = stripslashes($input);
  $input = htmlspecialchars($input);
  return $input;
}
  //validate
if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$validForm = true;
		if (empty($name)) {
		  $nameError = "- Required";
		  $validForm = false;
		}
		if (empty($email)) {
		  $emailError = "- Required";
		  $validForm = false;
		}
		if (empty($message)) {
		  $messageError = "Required";
		  $validForm = false;
		}
  }


		//Page switcher
		if (!$validForm) {
		  include("include/contact-message-error.php");
		}
		else {
		  include("include/contact-message-success.php");
		  $mail->Subject = "Contact Form - $name";
		  $mail->From       = "contact-form@wallisconsultancy.co.uk";
		  $mail->FromName   = "contact-form@wallisconsultancy.co.uk";

		  $body  = file_get_contents('include/contact-form.html');
		  $body  = str_replace("[\]",'',$body);
		  $body  = str_replace("{name}",$name,$body);
		  $body  = str_replace("{email}",$email,$body);
		  $body  = str_replace("{message}",$message,$body);
		  //change address to dads
			$mail->AddAddress("mw@wallisconsultancy.co.uk", "Mike Wallis");
			$mail->AddCC("jamesemwallis@yahoo.co.uk", "James");
			// $mail->AddAddress("jamesemwallis@yahoo.co.uk", "Wallis");
			$mail->isHTML(true);
			$mail->Body = $body;
		  // $mail->MsgHTML($body);
		  if(!$mail->Send()) {
				// echo "Mailer Error: " . $mail->ErrorInfo;
		  } else {
		    // echo "Message sent!";
		  }
	} //else close
 //validate close

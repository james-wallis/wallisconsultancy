<?php

/* Namespace alias */
use PHPMailer\PHPMailer\PHPMailer;
$mailHost = 'smtp.gmail.com';
$mailUsername = getenv('MAIL_USERNAME');
$mailPassword = getenv('MAIL_PASSWORD');
$mailDebug = 0;
/* Include the Composer generated autoload.php file. */
require './vendor/autoload.php';

//initialise variables
$name = $jointname = $dob = $dob2 = $number = $email = $address1 = $address2 =
  $postcode = $bankname = $accno = "";


  // require_once('phpmailer/class.phpmailer.php');
	$mail = new PHPMailer;
	//Tell PHPMailer to use SMTP
	$mail->isSMTP();
	//Enable SMTP debugging
	// 0 = off (for production use)
	// 1 = client messages
	// 2 = client and server messages
	$mail->SMTPDebug = $mailDebug;
	$mail->Host = $mailHost;
	$mail->Port = 587;
	$mail->SMTPSecure = 'tls';
	$mail->SMTPAuth = true;
	$mail->Username = $mailUsername;
	$mail->Password = $mailPassword;
	$customerMail = new PHPMailer;
	//Tell PHPMailer to use SMTP
	$customerMail->isSMTP();
	//Enable SMTP debugging
	// 0 = off (for production use)
	// 1 = client messages
	// 2 = client and server messages
	$customerMail->SMTPDebug = $mailDebug;
	$customerMail->Host = $mailHost;
	$customerMail->Port = 587;
	$customerMail->SMTPSecure = 'tls';
	$customerMail->SMTPAuth = true;
	$customerMail->Username = $mailUsername;
	$customerMail->Password = $mailPassword;
  // $mail->IsSendmail(); // telling the class to use SendMail transport
	// $customerMail->IsSendmail();

// Get variables after submit has happened
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = ucwords(tidyInput($_POST['fullname']));
  $jointname = ucwords(tidyInput($_POST['jointname']));
  $dob = ucwords(tidyInput($_POST['dob']));
  $dob2 = ucwords(tidyInput($_POST['dob2']));
  $number = tidyInput($_POST['number']);
  $email = tidyInput($_POST['email']);
  $address1 = ucwords(tidyInput($_POST['address1']));
  $address2 = ucwords(tidyInput($_POST['address2']));
  $address3 = ucwords(tidyInput($_POST['address3']));
  $postcode = strtoupper(tidyInput($_POST['postcode']));
  $bankname = ucwords(tidyInput($_POST['bankname']));
  $accno = strtoupper(tidyInput($_POST['accno']));
  $product = tidyInput($_POST['product']);
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
		  $nameErr = "- Required";
		  $validForm = false;
		}
		if (empty($dob)) {
		  $dobErr = "- Required";
		  $validForm = false;
		}
		if (empty($number)) {
		  $numberErr = "- Required";
		  $validForm = false;
		}
		if (empty($email)) {
		  $emailErr = "- Required";
		  $validForm = false;
		}
		if (empty($address1)) {
		  $addressErr = "- Required";
		  $validForm = false;
		}
		if (empty($postcode)) {
		  $postcodeErr = "- Required";
		  $validForm = false;
		}
		if (empty($bankname)) {
		  $banknameErr = "- Required";
		  $validForm = false;
		}
		if (empty($accno)) {
		  $accnoErr = "- Required";
		  $validForm = false;
		}
		if (empty($product)) {
		  $productErr = "- Please Select a Product";
		  $validForm = false;
		}

		//Page switcher
		if (!$validForm) {
		  include("include/ppi-claimnow.php");
		}
		else {
			include("include/ppi-submitclaim.php");
		  $mail->Subject = "Letter of Authority - $name";
		  $mail->From       = "claimsubmitted@wallisconsultancy.co.uk";
		  $mail->FromName   = "claimsubmitted@wallisconsultancy.co.uk";

			$body  = file_get_contents('include/contents.html');
			$body  = str_replace("[\]",'',$body);
		  $body  = str_replace("{fullname}",$name,$body);
		  $body  = str_replace("{dob}",$dob,$body);
		  $body  = str_replace("{dob2}",$dob2,$body);
		  $body  = str_replace("{product}",$product,$body);
		  $body  = str_replace("{contactnumber}",$number,$body);
		  $body  = str_replace("{emailaddress}",$email,$body);
		  $body  = str_replace("{download}","<a href='http://www.wallisconsultancy.co.uk/forms/$lettername'>Download here</a>",$body);
		  $body  = str_replace("{download2}","<a href='http://www.wallisconsultancy.co.uk/forms/$lettername2'>Download here</a>",$body);
      $mail->AddReplyTo("mw@wallisconsultancy.co.uk", "Mike Wallis");
		  $mail->AddAddress("mw@wallisconsultancy.co.uk", "Mike Wallis");
		  //$mail->AddCC('mail@mark-wallis.com', 'Mark Wallis');
			$mail->AddCC('jamesemwallis@yahoo.co.uk', 'James Wallis');
			$mail->isHTML(true);
			$mail->Body = $body;
		  $mail->AltBody    = "Link: http://www.wallisconsultancy.co.uk/forms/" . $lettername; // optional, comment out and test
			
		  // $mail->MsgHTML($body);
		  // if(!$mail->Send()) {
		  //   echo "Mailer Error: " . $mail->ErrorInfo;
		  // } else {
		  //   echo "Message sent!";
		  // }
			//Customer Email with Links
			$customerMail->Subject = "Letter of Authority - $name";
		  $customerMail->From       = "claimsubmitted@wallisconsultancy.co.uk";
		  $customerMail->FromName   = "claimsubmitted@wallisconsultancy.co.uk";

		  $body  = file_get_contents('include/customer-contents.html');
		  $body  = str_replace("[\]",'',$body);
		  $body  = str_replace("{fullname}",$name,$body);
		  $body  = str_replace("{emailaddress}",$email,$body);
		  $body  = str_replace("{download}","<a href='http://www.wallisconsultancy.co.uk/forms/$lettername'>Download here</a>",$body);
		  $body  = str_replace("{download2}","<a href='http://www.wallisconsultancy.co.uk/forms/$lettername2'>Download here</a>",$body);
		  //change address to customer email
      $customerMail->AddReplyTo("mw@wallisconsultancy.co.uk", "Mike Wallis");
		  $customerMail->AddAddress("$email", "$name");
		  // $customerMail->AddCC('jamesemwallis@yahoo.co.uk', 'James Wallis');

		  $customerMail->AltBody    = "Link: http://www.wallisconsultancy.co.uk/forms/" . $lettername; // optional, comment out and test
			$customerMail->isHTML(true);
			$customerMail->Body = $body;
		  // $customerMail->MsgHTML($body);
		  // if(!$customerMail->Send()) {
		  //   echo "Customer Mailer Error: " . $mail->ErrorInfo;
		  // } else {
		  //   echo "Customer Message sent!";
		  // }
			//Customer Email End

	} //else close
} //validate close

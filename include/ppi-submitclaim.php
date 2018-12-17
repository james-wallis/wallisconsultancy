
<?php


	//generate letter
	$letter  = file_get_contents('letterofauthority4.rtf');
	$letter  = preg_replace("%NAME%",$name,$letter);
	$letter  = preg_replace("%JOINTNAME%",$jointname,$letter);
	$letter  = preg_replace("%DOB%",$dob,$letter);
	$letter  = preg_replace("%DOB2%",$dob2,$letter);
	$letter  = preg_replace("%PRODUCT%",$product,$letter);
	$letter  = preg_replace("%BANK%",$bankname,$letter);
	$letter  = preg_replace("%ACCOUNT1%",$accno,$letter);
	$letter  = preg_replace("%ADDRESS1%",$address1,$letter);
	$letter  = preg_replace("%ADDRESS2%",$address2,$letter);
	$letter  = preg_replace("%ADDRESS3%",$address3,$letter);
	$letter  = preg_replace("%POSTCODE%",$postcode,$letter);

	//letter name
	$lettername = str_replace(" ","_",$name . "_" . $bankname . "_" . $accno . "_" . date("dmyHi"));
	$lettername = preg_replace('/[^A-Za-z0-9_\-]/', '_', $lettername). "_loa.doc";


	$fh = fopen("/var/www/html/forms/" . $lettername, "wb") or die("Unable to open file!");
	fwrite($fh, $letter);
	fclose($fh);



	$letter  = file_get_contents('disclosure.rtf');
	$letter  = preg_replace("%NAME%",$name,$letter);
	$letter  = preg_replace("%JOINTNAME%",$jointname,$letter);
	$letter  = preg_replace("%DOB%",$dob,$letter);
	$letter  = preg_replace("%DOB2%",$dob2,$letter);
	$letter  = preg_replace("%PRODUCT%",$product,$letter);
	$letter  = preg_replace("%BANK%",$bankname,$letter);
	$letter  = preg_replace("%ACCOUNT1%",$accno,$letter);
	$letter  = preg_replace("%ADDRESS1%",$address1,$letter);
	$letter  = preg_replace("%ADDRESS2%",$address2,$letter);
	$letter  = preg_replace("%ADDRESS3%",$address3,$letter);
	$letter  = preg_replace("%POSTCODE%",$postcode,$letter);

	//letter name
	$lettername2 = str_replace(" ","_",$name . "_" . $bankname . "_" . $accno . "_" . date("dmyHi"));
	$lettername2 = preg_replace('/[^A-Za-z0-9_\-]/', '_', $lettername2). "_dis.doc";


	$fh = fopen("/var/www/html/forms/" . $lettername2, "wb");
	fwrite($fh, $letter);
	fclose($fh);

?>
<!-- Main Content start-->
 <div class="content">
		<div class="container">
			 <div class="row">
					<div class="posts-block col-lg-8 col-md-8 col-sm-8 col-xs-12">
						<article>
							 <h2 class="title">Please Print, Sign and Return your Letter of Authority &amp; Disclosure Statement </h2>
							 <div class="post-content">
								<h4>Click on the link below to download your letter of authority. You will need to print, sign and return this to me by post before I can start the process of getting your money back.</h4>
								<p>Your Letter of Authority: <strong><a target="_blank" style="font-size:18px" href="/forms/<?php echo $lettername?>">Download here</a></strong></p>
								<p>Disclosure Statement: <strong><a target="_blank" style="font-size:18px" href="/forms/<?php echo $lettername2?>">Download here</a></strong></p>
								<address>
									<h4>Return Address: </h4>
									<p>Mike Wallis</p>
									<p>Brynhyfryd, Vicarage Road,</p>
									<p>Potten End, Herts</p>
									<p>HP4 2QZ</p>
								</address>
								<p>
									Please note that during the period of our engagement this and other information about your personal and financial
							    situation may be requested from you to enable us to take your business with us forward. By accepting our Terms of
							    Business, you expressly consent that we may carry out such processing (whether obtaining, recording or holding) of
							    such data as is necessary to enable us to carry out your instructions. Your personal data will be treated as strictly
							    confidential and will only be shared with your express consent. We keep data for 6 years from the date that your
							    involvement with the consultancy ceases. Please see our Privacy Notice for more information.
								</p>
								<p>Thanks, I look forward to receiving your signed Letter of Authority &amp; Disclosure Statement so I can get started on your claim.</p>
								<h3>Mike Wallis</h3>
							 </div>
						</article>
					</div>
					<!-- Left Section End -->

			 </div>
		</div>
 </div>
 <!-- Main Content end-->

<!DOCTYPE html>
<!--[if IE 8]>			<html class="ie ie8"> <![endif]-->
<!--[if IE 9]>			<html class="ie ie9"> <![endif]-->
<!--[if gt IE 9]><!-->	<html> <!--<![endif]-->

	<?php
		error_reporting(E_PARSE);

		// Rewrite Section
		//defaults
		$atab = "home";
		if (isset($_GET['atab'])) $atab = $_GET['atab'];
		// echo $atab;
		//rewrite
		if( $_GET['rewrite'] != "")
		{
			$request = str_replace("&","and",$_GET['rewrite']);
			$request = explode("/",$request);
		}

		$sitename 	= "Wallis Consultancy";
		$robots		= "noodp, index, follow";
		$keywords	= "Mediation, Family Mediation, Neighbour Mediation, Workplace Mediation, Experienced Mediator, Mediation in Hertfordshire, Interim Management, Interim Management in Hertfordshire, Business Support in Hertfordshire, Business Support";
		$desc 		= "Mediation and Business Support by an experienced personable profesional.";
		$image		= "http://www.wallisconsultancy.co.uk/images/mike-wallis2.png";

		//Switch for different pages
		switch ($atab)
		{
			case "mediation":
				$title		= "Mediation Services";
				$section 	= "Mediation Services";
				$canonical 	= "/mediation/index.html";
				$page 		= "include/mediation.php";
				break;

			case "terms":
				$title 		= "Terms and Conditions";
				$section 	= "Terms and Conditions";
				$canonical 	= "/terms/index.html";
				$robots		= "nofollow";
				$page 		= "include/terms.php";
				break;

			case "privacynotice":
				$title 		= "Data Privacy Notice";
				$section 	= "Data Privacy Notice";
				$canonical 	= "/privacynotice/index.html";
				$page 		= "include/privacynotice.php";
				break;
			
			case "complaint":
				$title 		= "Complaint";
				$section 	= "Complaint";
				$robots		= "nofollow";
				$page 		= "include/complaint.php";
				break;

			case "message":
				$title 		= "Contact Mike";
				$section 	= "Contact Mike";
				$robots		= "nofollow";
				$page 		= "include/contact-message.php";
				break;

			default:
				$title 		= "Home";
				$section 	= "Home";
				$canonical 	= "/";
				$page 		= "include/home.php";
				break;
		}
	?>


	<?php include("include/head.php"); ?>

	<body class="boxed page">
		<div class="wrap">

			<?php
				include("include/header.php");
				include("include/breadcrumb.php");
			?>

			<div id="main">
				<?php include($page); ?>
			</div>


			<?php
				include("include/footer.php");
			?>
		</div>

		<!-- The Scripts -->
		<script src="/js/jquery.min.js"></script>
		<script src="/js/jquery-migrate-1.2.1.min.js"></script>
		<script src="/js/jquery-ui.js"></script>
		<script src="/js/bootstrap.js"></script>
		<script src="/js/jquery.parallax.js"></script>
		<script src="/js/jquery.wait.js"></script>
		<script src="/js/modernizr-2.6.2.min.js"></script>
		<script src="/js/modernizr.custom.js"></script>
		<script src="/js/custom.js"></script>
   </body>

   <script type="text/javascript">

	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-32922140-1']);
	  _gaq.push(['_trackPageview']);

	  (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();

	</script>
</html>

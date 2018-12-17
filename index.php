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
		$keywords	= "lowest ppi claim fees, ppi claim low fee, ppi claims lowest fee, ppi cheapest fees, ppi low fee, lowest ppi fee, ppi company lowest fee";
		$desc 		= "The quick and easy way to claim your PPI charges back. FEE only 10% on SUCCESS - NO UP FRONT COSTS. A personal service from a retired senior banker.";
		$image		= "http://www.wallisconsultancy.co.uk/images/mike-wallis2.png";

		//Switch for different pages
		switch ($atab)
		{
			case "mike-wallis":
				$title 		= "About Me";
				$section 	= "About Me";
				$canonical 	= "/mike-wallis/index.html";
				$page 		= "include/mike-wallis.php";
				break;

			case "other-services-interim-management":
				$title 		= "Intermin Management";
				$section 	= "Other Services";
				$canonical 	= "/other-services/interim-management/index.html";
				$page 		= "include/other-services-interim-management.php";
				break;

			case "other-services-additional":
				$title 		= "Additional Services";
				$section 	= "Other Services";
				$canonical 	= "/other-services/additional-services/index.html";
				$page 		= "include/other-services-additional.php";
				break;

			case "other-services-mediation":
				$title		= "Mediation Services";
				$section 	= "Other Services";
				$canonical 	= "/other-services/mediation/index.html";
				$page 		= "include/other-services-mediation.php";
				break;

			case "mis-sold-savings-plan":
				$title 		= "Mis-Sold Savings Plan";
				$desc 		= "The Quick and Easy way to claim compensation for Mis-Sold Products! FEE only 10% on SUCCESS - NO UP FRONT COSTS. A personal service from a retired senior banker.";
				$section 	= "Mis-Sold Products";
				$canonical 	= "/mis-sold-savings-plan/index.html";
				$page 		= "include/mis-sold-savings-plan.php";
				break;

			case "mis-sold-packaged-products":
				$title 		= "Mis-Sold Packaged Products";
				$desc 		= "The Quick and Easy way to claim compensation for Mis-Sold Products! FEE only 10% on SUCCESS - NO UP FRONT COSTS. A personal service from a retired senior banker.";
				$section 	= "Mis-Sold Products";
				$canonical 	= "/mis-sold-packaged-products/index.html";
				$page 		= "include/mis-sold-packaged-products.php";
				break;

			case "mis-sold-savings-plan-pricing":
				$title 		= "Our Pricing";
				$section 	= "Mis-Sold Products";
				$canonical 	= "/mis-sold-savings-plan/pricing/index.html";
				$page 		= "include/mis-sold-savings-plan-pricing.php";
				break;

			case "mis-sold-products-irsa":
				$title 		= "Mis-Sold IRSA";
				$desc 		= "Claim back your IRSA (Interest Rate Swap Arrangement) costs and compensation if your business turnover is E2m (approx £1.6m) FEE only 10% on SUCCESS - NO UP FRONT COSTS.";
				$section 	= "Mis-Sold Products";
				$canonical 	= "/mis-sold-products/irsa/index.html";
				$page 		= "include/mis-sold-products-irsa.php";
				break;

			case "ppi-service-delivery":
				$title 		= "Service Delivery";
				$section 	= "Complaints";
				$canonical 	= "/ppi-claims/service-delivery/index.html";
				$robots		= "nofollow";
				$page 		= "include/ppi-service-delivery.php";
				break;

			case "ppi-pricing":
				$title 		= "PPI Pricing";
				$section 	= "PPI";
				$canonical 	= "/ppi-claims/pricing/index.html";
				$page 		= "include/ppi-pricing.php";
				break;

			case "ppi-claim-now":
				$title 		= "Claim Now";
				$section 	= "PPI";
				$canonical 	= "/submitclaim/index.html";
				$robots		= "nofollow";
				$page 		= "include/ppi-claim-now.php";
				break;

			case "ppi-faq":
				$title 		= "PPI Frequently Asked Questions";
				$section 	= "PPI";
				$canonical 	= "/ppi-claims/faq/index.html";
				$page 		= "include/ppi-faq.php";
				break;

			case "mis-sold-faq":
				$title		= "General Frequently Asked Questions";
				$section	= "Mis-Sold Products";
				$canonical = "/mis-sold-products/faq/index.html";
				$page 		= "include/mis-sold-faq.php";
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

			case "submitclaim":
				$title 		= "Submit Claim";
				$section 	= "Submit Claim";
				$canonical 	= "aaaa";
				$robots		= "nofollow";
				$page 		= "include/submit.php";
				break;

			default:
				$title 		= "No Win, No Fee";
				$section 	= "Welcome";
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
				if($section == "About Me" || $section == "Other Services") {
					include("include/submit-contact-footer.php");
				}
				else
				{
					include("include/footer.php");
				}
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

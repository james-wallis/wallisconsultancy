
<!-- Footer Start -->
<footer id="footer">
	 <!-- Footer Top Start -->
	 <div class="footer-top">
			<div class="container">
				 <div class="row">
						<section class="col-lg-4 col-md-4 col-xs-12 col-sm-6 footer-two">
							<h3>Contact Me</h3>
							<ul class="contact-us">
								 <li>
										<i class="fa fa-phone"></i>
										<p><strong>Phone: </strong>07891760244</p>
								 </li>
								 <li>
										<i class="fa fa-envelope"></i>
										<p><strong>Email:</strong>mw@wallisconsultancy.co.uk</p>
								 </li>
								 <li>
									 <i class="fa fa-compass"></i>
									 <p><strong>Address: </strong>Brynhyfryd, Vicarage Road,<br>Potten End, Herts, HP4 2QZ.</p>
								 </li>
							</ul>
						</section>
						<section class="col-lg-8 col-md-8 col-xs-12 col-sm-12 footer-three">
							<h3>Send me a message</h3>
							<form class="reply" id="contact" action="/contact-message/index.html" method="POST">
                <div class="form-control-div col-lg-5 col-md-5 col-xs-12 col-sm-12 no-padding-left">
                  <label>Name:</label>
  								<input class="form-control" id="name" name="fullname" type="text" value="<?php echo $nameError; ?>" required/>
								  <label>Email:</label>
  								<input class="form-control" type="email" id="email" name="email" <?php echo $emailError; ?> required/>

                  <button class="btn btn-normal btn-color submit pull-right form-button" type="submit">Send</button>
                </div>
                <div class=" form-control-div col-lg-7 col-md-7 col-xs-12 col-sm-12 no-padding-right">
                    <label>Message:</label>
                    <textarea class="form-control" id="text" name="text" rows="1" cols="2" required="" <?php echo $messageError; ?>></textarea>
										<button class="btn btn-normal btn-color submit pull-right form-button-mobile" type="submit">Send</button>
								</div>
							</form>
						</section>
				 </div>
			</div>
	 </div>
	 <!-- Footer Top End -->
	 <!-- Footer Bottom Start -->
	 <div class="footer-bottom">
			<div class="container">
				 <div class="row">
						<div class="col-lg-3 col-md-3 col-xs-12 col-sm-12 footer-linkedin-div">
							<a href="https://www.linkedin.com/in/mike-wallis-b82a9140/" target="_blank">Connect on LinkedIn</a>
						</div>
						<div class="col-lg-9 col-md-9 col-xs-12 col-sm-12 terms-complaints-privacy-div">
							<a href="/terms/index.html">Terms &amp Conditions</a> 
							<!-- <i id="seperator" class="fa fa-circle" aria-hidden="true"></i>  -->
							<a href="/complaint/index.html">Complaints</a>
							<!-- <i id="seperator" class="fa fa-circle" aria-hidden="true"></i>  -->
							<a href="/privacynotice/index.html">Data Privacy Notice</a>
						</div>

				 </div>
			</div>
	 </div>
	 <!-- Footer Bottom End -->
</footer>
<!-- Scroll To Top -->
<a href="#" class="scrollup"><i class="fa fa-angle-up"></i></a>
</div>
<!-- Wrap End -->

<!-- Main Content start-->
 <div class="content">
		<div class="container">
			 <div class="row">
					<div class="posts-block col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<article>
							 <h2 class="title">Claim Now</h2>
							 <div class="post-content">
								 <p>In order to help process your application quicker, please complete the detail below and click on <strong>'Generate a Letter Of Authority and Disclosure Statement'</strong>. You should then print, sign and return the Letter of Authority for me to act to me by post so that I can start the claim. Once received then I will telephone you for any further background information needed to support the claim. Please note that any claims documentation should be read carefully and retained.</p>
								 <form method="post" action="/submitclaim/index.html" class="reply" id="claimnow">

									 <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                     <label>Name <span><?php echo $nameErr; ?></span></label>
                     <input type="text" name="fullname"  class="form-control"value="<?php echo $name; ?>" >

                     <label>Date of Birth (1st Jan 1980) <span><?php echo $dobErr; ?></span></label>
                     <input type="text" name="dob"  class="form-control"value="<?php echo $dob; ?>" >

                     <label>Joint Name</label>
                     <input type="text" name="jointname"  class="form-control"value="<?php echo $jointname; ?>">

                     <label>Date of Birth</label>
                     <input type="text" name="dob2"  class="form-control"value="<?php echo $dob2; ?>">

                     <label>Contact Number <span><?php echo $numberErr; ?></span></label>
                     <input type="text" name="number"  class="form-control"value="<?php echo $number; ?>" >

                     <label>Email Address <span><?php echo $emailErr; ?></span></label>
                     <input type="text" name="email"  class="form-control"value="<?php echo $email; ?>" >

                     <label>Address 1 <span><?php echo $addressErr; ?></span></label>
                     <input type="text" name="address1"  class="form-control"value="<?php echo $address1; ?>" >
                     <input type="text" name="address2"  class="form-control"value="<?php echo $address2; ?>" >
                     <input type="text" name="address3"  class="form-control"value="<?php echo $address3; ?>"><br>

                     <label>Postcode <span><?php echo $postcodeErr; ?></span></label>
                     <input type="text" name="postcode"  class="form-control"value="<?php echo $postcode; ?>" >

                     <label>Bank or Financial Institution <span><?php echo $banknameErr; ?></span></label>
                     <input type="text" name="bankname"  class="form-control"value="<?php echo $bankname; ?>" >

                     <label>Account or Ref Number <span><?php echo $accnoErr; ?></span></label>
                     <input type="text" name="accno"  class="form-control"value="<?php echo $accno; ?>" >

                     <label>Product <span><?php echo $productErr; ?></span></label>
                      <select name="product" class="form-control">
                         <option value="">Select Product</option>
                         <option <?php if($product == "Payment Protection Insurance") {echo "selected";} ?> value="Payment Protection Insurance">Payment Protection Insurance</option>
                         <option <?php if($product == "Mortgage Protection Insurance") {echo "selected";} ?> value="Mortgage Protection Insurance">Mortgage Protection Insurance</option>
                         <option <?php if($product == "Package Bank Account") {echo "selected";} ?> value="Package Bank Account">Package Bank Account</option>
                      </select>
                     <button class="btn btn-normal btn-color submit" type="submit">Generate Letter of Authority &amp; Disclosure Statement</button>
									</div>
                </form>
							</div>
						</article>
					</div>
					<!-- Left Section End -->

			 </div>
		</div>
 </div>
 <!-- Main Content end-->

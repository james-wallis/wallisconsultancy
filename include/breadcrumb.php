<!-- Title, Breadcrumb Start-->
<div class="breadcrumb-wrapper">
   <div class="container">
      <div class="row">
         <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6">
            <h1><?php echo $title; ?></h1>
         </div>
         <div class="col-lg-6 col-md-6 hidden-xs col-sm-6">
            <div class="breadcrumbs pull-right">
               <ul>
                  <li>You are here:</li>
                  <li><?php echo $section; ?></li>
                  <?php if($section!=$title) {echo "<li>$title</li>";} ?>
               </ul>
            </div>
         </div>
      </div>
   </div>
</div>
<!-- Title, Breadcrumb End-->

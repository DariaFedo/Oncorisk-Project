<?php include 'phpcomponents/head.php'?>
 </head>

 <body>
  <!-- Navigation -->
  <?php include "phpcomponents/navbar.php"?>

  <!-- Page Content -->
  <div class="container py-5 fillpage">

   <form name="sentMessage" id="contactForm" novalidate>
    <div class="control-group form-group">
     <div class="controls">
      <label id="contact-email-header">Email Address:</label>
      <input
       type="email"
       class="form-control"
       id="email"
       required
       data-validation-required-message="Please enter your email address."
      />
     </div>
    </div>
    <div class="control-group form-group">
     <div class="controls">
      <label id="contact-email-desc">Message:</label>
      <textarea
       rows="10"
       cols="100"
       class="form-control"
       id="message"
       required
       data-validation-required-message="Please enter your message"
       maxlength="999"
       style="resize: none;"
      ></textarea>
     </div>
    </div>
    <div id="success"></div>
    <!-- For success/fail messages -->
    <button type="submit" class="btn btn-primary" id="contact-send-button">
     Send Message
    </button>
   </form>
  </div>

      <!-- Footer -->
      <?php include 'phpcomponents/footer.php'?>

          <!-- Cookie -->
    <?php include 'phpcomponents/cookie.php'?>

    <!--jQuery i18n Javascript-->
    <?php include 'phpcomponents/i18njsliblaries.php'?>

  <!--Page JavaScript-->
  <script src="js/jqBootstrapValidation.js"></script>
  <script src="js/contact.js"></script>
 </body>
</html>

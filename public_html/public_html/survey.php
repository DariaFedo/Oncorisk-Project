<?php include 'phpcomponents/head.php'?>

  <!-- Survey engine-->
  <script src="https://unpkg.com/survey-jquery"></script>
  <!-- Page JS -->
  <script src="./../js/surveyjs.js"></script>

  <!-- Page styles -->
  <link rel="stylesheet" href="/css/survey.css">
 </head>

 <body>
    <!-- Navigation -->
    <?php include "phpcomponents/navbar.php"?>

  <div class="container my-5 d-lg-flex">
   <div id="surveyContainer" class="px-3">
     Survey
   </div>
   <div id="survey-facts">
    <h3 class="factheader text-center" id="survey-fact-header">Fun fact</h3>
    <p class="p-2 text-justify" id="survey-fact-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, molestias quod iure suscipit inventore reiciendis nam modi dolor nemo velit.</p>
   </div>
  </div>

  <div class="credits container d-flex my-3">
   <span id="survey-credits">
    Survey prepared based on reserach from
   </span>
   <a
    class="mx-3 text-primary"
    id="survey-credits-link"
    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3236020/"
   >This site
   </a>
  </div>

  <!-- Footer -->
  <?php include 'phpcomponents/footer.php'?>

  <!-- Cookie -->
  <?php include 'phpcomponents/cookie.php'?>

  <!--jQuery i18n Javascript-->
  <?php include 'phpcomponents/i18njsliblaries.php'?>

 </body>
</html>

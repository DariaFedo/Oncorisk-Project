<?php include 'phpcomponents/head.php'?>
  <!-- Custom styles for this template -->
  <link href="css/indexpagestyles.css" rel="stylesheet" />
 </head>

 <body>
  <!-- Navigation -->
  <?php include "phpcomponents/navbar.php"?>

  <header>
   <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
   >
    <div class="carousel-inner" role="listbox">
     <!-- Slide One - Set the background image for this slide in the line below -->
     <div
      class="carousel-item active"
      style="background-image: url('./Assets/background1.jpg');"
     ></div>
     <!-- Slide Two - Set the background image for this slide in the line below -->
     <div
      class="carousel-item"
      style="background-image: url('./Assets/background2.jpg');"
     ></div>
     <!-- Slide Three - Set the background image for this slide in the line below -->
     <div
      class="carousel-item"
      style="background-image: url('./Assets/background3.jpg');"
     ></div>
     <!-- Slide Four - Set the background image for this slide in the line below -->
     <div
      class="carousel-item"
      style="background-image: url('./Assets/background4.jpg');"
     ></div>
     <div
      class="carousel-item"
      style="background-image: url('./Assets/background5.jpg');"
     ></div>
    </div>
    <a
     class="carousel-control-prev"
     href="#carouselExampleIndicators"
     role="button"
     data-slide="prev"
    >
     <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span>
     <span class="sr-only">Previous</span> -->
    </a>
    <a
     class="carousel-control-next"
     href="#carouselExampleIndicators"
     role="button"
     data-slide="next"
    >
     <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span>
     <span class="sr-only">Next</span> -->
    </a>

    <div class="mycontainer text-center">
     <h1
      class="text-uppercase text-light text-center font-weight-bolder mediascaling"
      id="header-main-text"
     ></h1>
     <a href="survey.php" id="start-survey-button" class="display-1 text-light btn-primary my-3 btn btn-large">
     </a>
    </div>
   </div>
  </header>

  <!-- Page Content -->
  <div class="container my-5">
   <div class="row">
    <div class="col-lg-6">
     <h2 class="my-3" id="about-paragraph-header">O naszym projekcie</h2>
     <p class="text-justify" id="about-paragraph-content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis
      doloremque non cum id reprehenderit, quisquam totam aspernatur tempora
      minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis
      doloremque non cum id reprehenderit, quisquam totam aspernatur tempora
      minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis
      doloremque non cum id reprehenderit, quisquam totam aspernatur tempora
      minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.
     </p>
    </div>

    <div class="col-lg-6 my-3 align-self-center">
     <h3 class="text-center" id="counter-1"></h3>
     <h1
      class="display-4 text-center font-weight-bold text-danger"
      id="visitorsNumber"
     ></h1>
     <h3 class="text-center" id="counter-2"></h3>
    </div>
   </div>
  </div>

   <div class="bg-light my-5 p-4">
    <h1 id="partners" class="text-uppercase text-center">Partnerzy</h1>

    <div class="mx-auto d-md-flex flex-wrap justify-content-around">
    <!-- FirstCard -->
     <div class="partner-container my-2 mx-auto">
      <div class="partner-card">
       <a href="#"><div class="partner-image person"></div></a>
       <h5 id="first-partner-title" class="partner-name text-uppercase text-center">
        My First Partner
       </h5>
      </div>
      <p  id="first-partner-desc" class="partner-description text-justify">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi
       quod dolores sit quis? Unde sint sunt repellat atque. Doloribus quaerat
       dolores doloremque molestiae odio facilis eaque voluptatum culpa. Eum?
       Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
     </div>
    <!-- Second card -->
     <div class="partner-container my-2 mx-auto">
      <div class="partner-card">
        <a href="#"><div class="partner-image person"></div></a>
       <h5 id="second-partner-title" class="partner-name text-uppercase text-center">
        My Second Partner
       </h5>
      </div>
      <p  id="second-partner-desc" class="partner-description text-justify">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi
       quod dolores sit quis? Unde sint sunt repellat atque. Doloribus quaerat
       dolores doloremque molestiae odio facilis eaque voluptatum culpa. Eum?
       Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
     </div>
     <!-- Third card -->
     <div class="partner-container my-2 mx-auto">
      <div class="partner-card">
        <a href="#"><div class="partner-image person"></div></a>
       <h5 id="third-partner-title" class="partner-name text-uppercase text-center">
        My Third Partner
       </h5>
      </div>
      <p id="third-partner-desc" class="partner-description text-justify">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi
       quod dolores sit quis? Unde sint sunt repellat atque. Doloribus quaerat
       dolores doloremque molestiae odio facilis eaque voluptatum culpa. Eum?
       Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
     </div>
    </div>

    <h1 id="sponsors" class="text-uppercase text-center">Sponsorzy</h1>

    <div class="mx-auto d-md-flex flex-wrap justify-content-around">
    <!-- FirstCard -->
     <div class="partner-container my-2 mx-auto">
      <div class="partner-card">
        <a href="#"><div class="partner-image person"></div></a>
       <h5 id="first-sponsor-title" class="partner-name text-uppercase text-center">
        My First Sponsor
       </h5>
      </div>
      <p id="first-sponsor-desc" class="partner-description text-justify">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi
       quod dolores sit quis? Unde sint sunt repellat atque. Doloribus quaerat
       dolores doloremque molestiae odio facilis eaque voluptatum culpa. Eum?
       Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
     </div>
    <!-- Second card -->
     <div class="partner-container my-2 mx-auto">
      <div class="partner-card">
        <a href="#"><div class="partner-image person"></div></a>
       <h5 id="second-sponsor-title" class="partner-name text-uppercase text-center">
        My Second Sponsor
       </h5>
      </div>
      <p id="second-sponsor-desc" class="partner-description text-justify">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi
       quod dolores sit quis? Unde sint sunt repellat atque. Doloribus quaerat
       dolores doloremque molestiae odio facilis eaque voluptatum culpa. Eum?
       Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
     </div>
     <!-- Third card -->
     <div class="partner-container my-2 mx-auto">
      <div class="partner-card">
        <a href="#"><div class="partner-image person"></div></a>
       <h5 id="third-sponsor-title" class="partner-name text-uppercase text-center">
        My Third Sponsor
       </h5>
      </div>
      <p id="third-sponsor-desc" class="partner-description text-justify">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi
       quod dolores sit quis? Unde sint sunt repellat atque. Doloribus quaerat
       dolores doloremque molestiae odio facilis eaque voluptatum culpa. Eum?
       Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
     </div>
    </div>


</div>
  </div>

    <!-- Footer -->
    <?php include 'phpcomponents/footer.php'?>

    <!-- Cookie -->
    <?php include 'phpcomponents/cookie.php'?>

    <!--jQuery i18n Javascript-->
    <?php include 'phpcomponents/i18njsliblaries.php'?>

  <!--Page JavaScript-->
  <script src="js/index.js"></script>

 </body>
</html>

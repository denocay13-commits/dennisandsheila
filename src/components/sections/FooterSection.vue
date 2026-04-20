<template>
  <section id="footer-section" class="footer-dm">
    <!-- TOP FLORAL DIVIDER -->
    <div class="footer-divider">
      <img :src="divider" alt="Floral divider" />
    </div>

    <!-- IMAGE -->
    <div class="footer-photo-wrap">
      <div class="footer-photo-frame">
        <img :src="footerPhoto" alt="Wedding photo" class="footer-photo" />

        <!-- GRADIENT FADE -->
        <div class="footer-photo-fade top"></div>
        <div class="footer-photo-fade bottom"></div>
      </div>
    </div>

    <!-- TEXT CONTENT -->
    <div class="footer-content">
      <h2 class="footer-script-title">Reminders</h2>

      <p class="footer-reminder-line">
        BE ON TIME | FINISH THE EVENT | ENJOY AND HAVE FUN
      </p>

      <h2 class="footer-script-title footer-share-title">Snap &amp; Share</h2>

      <p class="footer-share-text">
        Share the love, we want to see the day through your eyes!<br />
        Kindly tag your photos
      </p>

      <p class="footer-hashtag">#Dennis&Sheila</p>

      <!-- SOCIAL -->
      <div class="footer-socials">
        <a href="#" class="footer-social">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="footer-social">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>

    <!-- CREDIT BAR -->
    <div class="footer-credit-bar">
      <div class="footer-credit-inner">
        <div class="footer-credit-logo">DC</div>
        <div class="footer-credit-text">
          This website was created by
          <a href="#">DENNIS DIGITAL</a><br />
          Beautiful assets by <a href="#">Freepik</a> and
          <a href="#">PngTree</a>
        </div>
      </div>
    </div>

    <!-- CORNERS -->
    <img :src="cornerLeft" class="footer-corner left" />
    <img :src="cornerRight" class="footer-corner right" />
  </section>
</template>

<script setup>
import divider from '../../assets/images/decor/floral-divider.png'
import cornerLeft from '../../assets/images/decor/corner-bottom-left.png'
import cornerRight from '../../assets/images/decor/corner-bottom-right.png'
import footerPhoto from '../../assets/hero.JPG'
</script>
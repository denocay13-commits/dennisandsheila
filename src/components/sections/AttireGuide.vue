<template>
  <section id="attire" class="section attire-section">
    <div class="attire-bg-layer"></div>

    <img
      :src="divider"
      alt="Floral divider"
      class="floral-divider floral-divider--between-sections"
    />

    <div class="attire-title-wrap">
      <span class="attire-script">attire</span>
      <h2 class="attire-title">GUIDE</h2>
    </div>

    <div class="attire-sponsor-wrap">
      <div class="attire-side-text left">
        <p class="attire-role">NINONG'S</p>
        <p class="attire-copy">BARONG &<br />BLACK PANTS</p>
      </div>

      <div class="attire-figures">
        <img :src="ninongImg" alt="Ninong attire" class="attire-figure ninong" />
        <img :src="ninangImg" alt="Ninang attire" class="attire-figure ninang" />
      </div>

      <div class="attire-side-text right">
        <p class="attire-role">NINANG'S</p>
        <p class="attire-copy">FORMAL DRESS</p>
      </div>
    </div>

    <div class="attire-swatches">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="attire-guest-title">
      <span class="attire-script guest">Guests</span>
      <p class="guest-formal">FORMAL ATTIRE</p>
    </div>

    <div class="attire-guest-wrap">
      <div class="attire-side-text left guest-text">
        <p class="attire-copy">
          GRAY OR TAUPE<br />
          LONG-SLEEVES SHIRT/<br />
          POLO SHIRT/ PANTS/<br />
          SUIT
        </p>
      </div>

      <div class="attire-guest-figures">
        <img :src="guestMaleImg" alt="Male guest attire" class="attire-guest-figure male" />
        <img :src="guestFemaleImg" alt="Female guest attire" class="attire-guest-figure female" />
      </div>

      <div class="attire-side-text right guest-text">
        <p class="attire-copy">LONG DRESS OR<br />COCKTAIL DRESS</p>
      </div>
    </div>

    <p class="attire-note">
      WE KINDLY REQUEST YOU TO WEAR THESE COLORS AND DRESS IN FORMAL
      ATTIRE TO OUR SPECIAL DAY. STRICTLY NO T-SHIRTS, SHORTS, DENIMS,
      AND SLIPPERS
    </p>

    <div class="attire-swatches bottom">
      <span></span>
      <span></span>
    </div>

    <img
      :src="divider"
      alt="Floral divider"
      class="floral-divider floral-divider--between-sections"
    />
  </section>
</template>

<script setup>
import divider from '../../assets/images/decor/floral-divider.png'
import ninongImg from '../../assets/images/attire/ninong.png'
import ninangImg from '../../assets/images/attire/ninang.png'
import guestMaleImg from '../../assets/images/attire/male.png'
import guestFemaleImg from '../../assets/images/attire/female.png'
</script>
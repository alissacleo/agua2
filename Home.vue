<script setup>
import TheHeader from './components/TheHeader.vue'
import Square from './components/SquareSimple.vue'
import TheWelcome from './components/TheWelcome.vue'
import TheFooter from './components/TheFooter.vue'
import GoogleReviews from './components/GoogleReviews.vue'


</script>

<template>
  <header>
    <TheHeader />
  </header>

  <main>
    <TheWelcome />
    <Square />
    <div id="details" class="section no-pad-b">
      <div class="details" >        
        <h2 class="center upper h2">Event Details</h2>
        <div class="with-image">
          <img alt="Alissa & Carlos" class="logo" src="/team4.png" width="356" height="356" />
          <div>
            <h3 class="h3">Cuban Salsa Mondays 💙</h3>
            <p>Monday classes at <a href="https://maps.app.goo.gl/fcpxkQD1vxNaPoyy8" target="_blank" rel="noopener">Rod Evans Centre, 160 Hay St, East Perth</a></p>

            <p class="h3">6:30 . Beginner & Improver</p>
            <p>At 6:30pm we offer two Casino (Cuban Salsa) classes: <strong>Beginner</strong> for our brand new dancers and 
              <strong>Improver</strong> as the next step. Enjoy an open practica from 7:30 - 7:45. No partner or experience needed!</p>
            <br>
            <p class="h3">7:45 . Intermediate</p>
            <p>From 7:45 - 9:00pm we offer an <strong>Intermediate</strong> class designed to refine your technique while showing you new and interesting figures and ways to combine them in your social dance.</p>
            <br>
            <p class="h3" id="terms">8 Week Terms</p>
            <p>Each term is 8 weeks long followed by a 1 week break</p>
            <p>2026 Term 5 - Oct 5 - Nov 23</p>
            <br>
          </div>
        </div>
      </div>
    </div>

    <div id="special" class="section white no-pad-b">
      <h2 class="center upper h2">Special Events</h2>
      <div class="with-image image-right">
        <img alt="Alissa & Carlos" class="logo" src="/team2.png" width="356" height="356" />
        <div>
          <p class="h3">Twilight Markets 💙</p>
          <p>Friday Oct 23rd<br>
            Dance under the stars in the city!<br>
            Forrest Chase @ 6pm
          </p>
          <br>
          <p class="h3">Scarborough Sandpit 💙</p>
          <p>Sunday Nov 22</p>
          <p>Casino class & latin social
          </p>
          <br>
        </div>
      </div>
    </div>
    <div class="section light" style="padding-bottom: 0">
      <h2 class="center upper">About Agua!</h2>
      <div class="with-image image-left">
        <img alt="Alissa & Carlos" class="logo" src="/team.png" width="356" height="339" />
        <div>
          <p class="smol">
            <strong>Why Agua?</strong><br>
            Agua means water.  In Cuba, if you're burning up the dance floor, we shout for ¡Agua! to handle the fire 💦<br><br>

            <strong>Who is Agua?</strong><br>
            The dream team = Alissa Cleo + Carlos Bontes 💙
            <br><br>
            <a href="https://www.instagram.com/dancewithalissacleo/" target="_blank" rel="noopener" title="Dance with Alissa Cleo on Instagram">Alissa</a> began teaching Cuban dance in the USA in 2014.
            She moved to Australia in 2017, founded <em>Hedland Social Dance</em> & then joined the <em>Salsanation</em> team in 2019.
            In 2023, Alissa created <em>Agua!</em> a collaborative project to share love for Timba music & Afro Cuban movement.
            <br><br>
            <a href="https://www.instagram.com/charly_bontes/" target="_blank" rel="noopener" title="Carlos Bontes on Instagram">Carlos</a> started dancing Casino in 2013 in Chile, where he explored Cuban rhythms.
            In 2017, he joined <em>Rumba Salsera</em> and participated in various performances.
            He moved to Australia in 2019 and joined <em>Agua!</em> in 2024, where he aims to promote his passion for Timba and Cuban Salsa with Agua!
            <br><br>
            Agua! loves to partipate in local, community events like the Rueda Flashmob.  We also love to travel!  
            In 2024, Agua! taught at the ODAC conference in Singapore.  In 2025 Agua! performed in Hanoi, Vietnam, and Alissa taught in Hobart, Tasmania, twice. ✈️💙
            <br><br>
            <strong>Private Classes</strong><br>
            Agua! offers private classes for individuals & couples looking to level up. Get in touch to schedule. 💦
          </p>
          <br>
        </div>
      </div>
    </div>
    <div class="section white">
      <GoogleReviews />
    </div>
  </main>

  <footer>
    <TheFooter />
  </footer>

</template>

<style>
header {
  line-height: 1.5;
}

header .logo {
  display: block;
  margin: 0 auto;
  max-width: 50vw;
  height: auto;
}

#details {
  padding-bottom: 20px;
}
#details > .details {  
  max-width: 1280px;
  margin: 0 auto;
}

</style>

<style lang="css" src="~/style/main.css"/>
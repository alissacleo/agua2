<script>
export default {
  data() {
    return {
      showStudent: false,
    };
  },
  methods: {
    toggle() {
      this.showStudent= !this.showStudent;
    },
  },
};
</script>

<template>
  <div class="section light">
    <h2 class="center strong upper" id="square">Book a Class</h2>  
    <br>
    <div class="center">
      <div class="ui buttons big">
        <button
          class="ui button toggle"
          @click="toggle"
          :class="[!showStudent ? 'active' : '']"
        >Standard Price</button>
        <button
          class="ui button toggle"
          @click="toggle"
          :class="[showStudent ? 'active' : '']"
        >Concession</button>
      </div>
    </div>

    <br>

    <div id="standard" class="tier" :class="[!showStudent ? 'active' : 'inactive']">
      <h3 class="center h2">Monday Drop In</h3>
      <div class="square">
        <div class="box">
          <p class="center h2 bg"><strong>$25</strong></p>
          <p class="center">Buy it on the day via Square, PayID or cash</p>
          <p class="center">Intermediate plus* - <strong>3hrs for $35</strong>!</p>
        </div>
      </div>
      <p class="center smol">*Intermediate plus: Intermediate students can also attend Beginner & Improver classes as a refresher!</p>

      <br>
      <h3 class="center h2">Buy a Term</h3>
      <p class="center">Attend a full <strong>8 week term</strong> for a <strong>10% discount</strong>. See our <a href="#terms">term schedule</a>. Checkout via Square.</p>
      <div class="square term">
        <div class="box">
          <a href="https://square.link/u/sUvoHfOa" target="_square" rel="noopener"></a>
          <p class="center h2 bg"><strong>$180/term</strong></p>
          <p class="center"><strong>Beginner or Improver</strong></p>
          <div><span class="ui button big">Buy now</span></div>         
        </div>
        <div class="box">
          <a href="https://square.link/u/0yjNCxtF" target="_square" rel="noopener"></a>
          <p class="center h2 bg"><strong>$180/term</strong></p>
          <p class="center"><strong>Intermediate</strong></p>
            <div><span class="ui button big">Buy now</span></div>      
        </div>
        <div class="box">
          <a href="https://square.link/u/v4rZ0P8K" target="_square" rel="noopener"></a>
          <p class="center h2 bg"><strong>$250/term</strong></p>
          <p class="center"><strong>Intermediate Plus*</strong> (2 levels)</p>
            <div><span class="ui button big">Buy now</span></div>   
        </div>
      </div>
      <p class="center smol">*Intermediate plus: Intermediate students can also attend Beginner & Improver classes as a refresher!</p>
      
      <br>
      <!-- <h3 class="center h2">Monday Memberships</h3>
      <p class="center">Automatically pay for your class each week.  Subscriptions can be paused as needed.  Checkout via Square.</p>
      <div class="square membership">
        <div class="box">
          <a href="https://square.link/u/kUWkLR2o" target="_square" rel="noopener"></a>
          <p class="center h2 bg"><strong>$20/week</strong></p>
          <p class="center"><strong>Beginner or Improver</strong></p>
          <div><span class="ui button big">Buy now</span></div>
        </div>
        <div class="box">
          <a href="https://square.link/u/gQV5368m" target="_square" rel="noopener"></a>
          <p class="center h2 bg"><strong>$20/week</strong></p>
          <p class="center"><strong>Intermediate</strong></p>
          <div><span class="ui button big">Buy now</span></div>  
        </div>
        <div class="box">
          <a href="https://square.link/u/rZGEZ3zI" target="_square" rel="noopener"></a>
          <p class="center h2 bg"><strong>$28/week</strong></p>
          <p class="center"><strong>Intermediate Plus*</strong> (2 levels)</p>
          <div><span class="ui button big">Buy now</span></div>  
        </div>
      </div>
      <p class="center smol">*Intermediate plus: Intermediate students can also attend Beginner & Improver classes as a refresher!</p>
      
      <br> -->
      <!-- <p class="center">Intermediate** students can add the beginner class for $10 with "Double" bookings.  Checkout via Square.</p>
      <div class="square drop-in">
        <a href="https://square.link/u/sUvoHfOa" target="_square" rel="noopener">
          <img src="../630.jpg" width="300">
          <span>Beginner</span>
          <span>Single</span>
          <span>$25</span>
        </a>
        <a href="https://square.link/u/eyZJthfv" target="_square" rel="noopener">
          <img src="../730.jpg" width="300">
          <span>Intermediate**</span>
          <span>Single</span>
          <span>$25</span>
        </a>
        <a href="https://square.link/u/LuF3WzSm" target="_square" rel="noopener">
          <img src="../double.jpg" width="300">
          <span>Intermediate**</span>
          <span>Double</span>
          <span>$35</span>
        </a>
      </div> -->
<!-- 
      <h3 class="center strong">Buy a Term</h3>
      <p class="center">Attend a full <strong>8 week term</strong> for a <strong>10% discount</strong>. Checkout via Square.</p>
      <div class="square term">
        <a href="https://square.link/u/kUWkLR2o" class="box" target="_square" rel="noopener">
          <img src="../punchcard.jpg" width="300">
          <span>Full Term</span>
          <span>Beginner / Improver</span>
          <span>$180 (10% off)</span>
        </a>
        <a href="https://square.link/u/0yjNCxtF" class="box" target="_square" rel="noopener">
          <img src="../punchcard.jpg" width="300">
          <span>Full Term</span>
          <span>Intermediate</span>
          <span>$180 (10% off)</span>
        </a>
        <a href="https://square.link/u/v4rZ0P8K" class="box" target="_square" rel="noopener">
          <img src="../punchcard.jpg" width="300">
          <span>Full Term</span>
          <span>Intermediate Plus</span>
          <span>$250 (10% off)</span>
        </a>
      </div> -->

      <!-- <h3 class="center strong">Memberships</h3>
      <p class="center">Automatically pay for your class each week.  Subscriptions can be paused as needed.  Checkout via Square.</p>
      <div class="square membership">
        <a href="https://square.link/u/gQV5368m" class="box" target="_square" rel="noopener">
          <img src="../membership.jpg" width="300">
          <span>Weekly Subscription</span>
          <span>Single</span>
          <span>$20 (20% off)</span>
        </a>
        <a href="https://square.link/u/rZGEZ3zI" class="box" target="_square" rel="noopener">
          <img src="../membership.jpg" width="300">
          <span>Weekly Subscription</span>
          <span>Double</span>
          <span>$28 (20% off)</span>
        </a>
      </div> -->
    </div>


    <div id="concession" class="tier" :class="[showStudent ? 'active' : 'inactive']">
      <h3 class="center h2">Monday Drop In</h3>
      <div class="square">
        <div class="box">
          <p class="center h2 bg"><strong>$20</strong></p>
          <p class="center">Buy it on the day via Square, PayID or cash</p>
          <p class="center">Intermediate plus* - <strong>3hrs for $30</strong>!</p>
        </div>
      </div>
      <p class="center smol">*Intermediate plus: Intermediate students can also attend Beginner & Improver classes as a refresher!</p>

      <br>
      <h3 class="center h2">Buy a Term</h3>
      <p class="center">Attend a full <strong>8 week term</strong> for a <strong>10% discount</strong>. See our <a href="#terms">term schedule</a>. Checkout via Square.</p>
      <div class="square term">
        <div class="box">
          <a href="https://square.link/u/kUWkLR2o" target="_square" rel="noopener"></a>
          <p class="center h2 bg"><strong>$145/term</strong></p>
          <p class="center"><strong>Beginner or Improver</strong></p>
          <div><span class="ui button big">Buy now</span></div>         
        </div>
        <div class="box">
          <a href="https://square.link/u/0yjNCxtF" target="_square" rel="noopener"></a>
          <p class="center h2 bg"><strong>$145/term</strong></p>
          <p class="center"><strong>Intermediate</strong></p>
            <div><span class="ui button big">Buy now</span></div>      
        </div>
        <div class="box">
          <a href="https://square.link/u/v4rZ0P8K" target="_square" rel="noopener"></a>
          <p class="center h2 bg"><strong>$215/term</strong></p>
          <p class="center"><strong>Intermediate Plus*</strong> (2 levels)</p>
            <div><span class="ui button big">Buy now</span></div>   
        </div>
      </div>
      <p class="center smol">*Intermediate plus: Intermediate students can also attend Beginner & Improver classes as a refresher!</p>
      
      <br>
      <h3 class="center h2">Monday Memberships</h3>
      <p class="center">Automatically pay for your class each week.  Subscriptions can be paused as needed.  Checkout via Square.</p>
      <div class="square membership">
        <div class="box">
          <a href="https://square.link/u/8uSTBeC1" target="_square" rel="noopener"></a>
          <p class="center h2 bg"><strong>$16/week</strong></p>
          <p class="center"><strong>Beginner or Improver</strong></p>
          <div><span class="ui button big">Buy now</span></div>
        </div>
        <div class="box">
          <a href="https://square.link/u/8uSTBeC1" target="_square" rel="noopener"></a>
          <p class="center h2 bg"><strong>$16/week</strong></p>
          <p class="center"><strong>Intermediate</strong></p>
          <div><span class="ui button big">Buy now</span></div>  
        </div>
        <div class="box">
          <a href="https://square.link/u/5tkrF0Ib" target="_square" rel="noopener"></a>
          <p class="center h2 bg"><strong>$24/week</strong></p>
          <p class="center"><strong>Intermediate Plus*</strong> (2 levels)</p>
          <div><span class="ui button big">Buy now</span></div>  
        </div>
      </div>
      <p class="center smol">*Intermediate plus: Intermediate students can also attend Beginner & Improver classes as a refresher!</p>
      
      <br>
      <!-- <h3 class="center strong">Monday Drop In Tickets - Concession/Student Rates</h3>
      <p class="center">Drop in tickets can be purchased on the day via Square, PayID or cash</p>
      <p class="center"><strong>Drop in price: $20</strong></p>
      <p class="center">Intermediate students can attend Beginner or Improver classes for $10 - 3 hrs of dance for $30!</p> -->
      <!-- <p class="center">Intermediate** students can add the beginner class for $10 with "Double" bookings.  Checkout via Square.</p>
      <div class="square drop-in">
        <a href="https://square.link/u/sUvoHfOa" target="_square" rel="noopener">
          <img src="../630.jpg" width="300">
          <span>Beginner</span>
          <span>Single</span>
          <span>$20</span>
        </a>
        <a href="https://square.link/u/eyZJthfv" target="_square" rel="noopener">
          <img src="../730.jpg" width="300">
          <span>Intermediate**</span>
          <span>Single</span>
          <span>$20</span>
        </a>
        <a href="https://square.link/u/LuF3WzSm" target="_square" rel="noopener">
          <img src="../double.jpg" width="300">
          <span>Intermediate**</span>
          <span>Double</span>
          <span>$30</span>
        </a>
      </div> -->

      <!-- <h3 class="center strong">Buy a Term</h3>
      <p class="center">Attend a full 8 week term for a 10% discount. Checkout via Square.</p>
      <div class="square membership">
        <a href="https://square.link/u/kUWkLR2o" target="_square" rel="noopener">
          <img src="../punchcard.jpg" width="300">
          <span>Full Term</span>
          <span>Beginner or Improver</span>
          <span>$145 (10% off)</span>
        </a>
        <a href="https://square.link/u/v4rZ0P8K" target="_square" rel="noopener">
          <img src="../punchcard.jpg" width="300">
          <span>Full Term</span>
          <span>Double</span>
          <span>$215 (10% off)</span>
        </a>
      </div>

      <h3 class="center strong">Memberships</h3>
      <p class="center">Automatically pay for your class each week.  Subscriptions can be paused as needed.  Checkout via Square.</p>
      <div class="square membership">
        <a href="https://square.link/u/8uSTBeC1" target="_square" rel="noopener">
          <img src="../membership.jpg" width="300">
          <span>Weekly Subscription</span>
          <span>Single</span>
          <span>$16 (20% off)</span>
        </a>
        <a href="https://square.link/u/5tkrF0Ib" target="_square" rel="noopener">
          <img src="../membership.jpg" width="300">
          <span>Weekly Subscription</span>
          <span>Intermediate Plus</span>
          <span>$24 (20% off)</span>
        </a>
      </div> -->

    </div>

    <br>
    
    <!-- <h3 class="center strong">Merch</h3>
    <div class="square merch">
      <a href="https://square.link/u/kUWkLR2o">
        <img src="" width="300">
        <span>Agua! Tee</span>
        <span>$70</span>
      </a>
    </div> -->
  </div>
</template>

<style scoped>
#square {
  padding-top: 3rem;
}
.tier > h3 {
  margin: 1rem auto 0;
}
.tier > p {
  margin: 0 auto 0.5rem;
}
h2, h3 {
  text-transform: uppercase;
}

.square {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
.box {
  position: relative;
  flex-grow: 1;
  display: block;
  max-width: 304px;
  min-width: 200px;
  background: #fff;
  border: 2px solid var(--agua-blue);
  border-radius: 4px;
}
.box > * {
  display: block;
  text-align: center;
  color: var(--agua-blue);
  line-height: 1.1;
  padding: 1rem 1rem 0;
  margin: 0 auto;
}
.box .bg {
  padding: 1rem 2rem;
  background: var(--agua-blue);
  color: #fff;
  font-weight: bold;
}
.box a {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.box > *:last-child {
  padding: 1rem;
}
.button {
  background: var(--agua-blue);
  color: #fff;
}
.square + .smol {
  margin: 0.4rem auto;
}

.inactive {
  display: none;
}

.ui.button.toggle.active:hover,
.ui.button.toggle.active, .ui.buttons .button.toggle.active, 
.ui.toggle.buttons .active.button {
  background-color: var(--agua-blue) !important;
  color: #fff !important;
  opacity: 1;
}
.ui.button.toggle {
  background-color: #83979f !important;
  color: #fff !important;
  opacity: 0.7
}

</style>
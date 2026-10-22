<template>
  <div class="section light no-pad-b">
    <h2 class="center strong upper" id="square">Book a Class</h2>      

    <br>

    <div class="with-image image-right">
      <img alt="Alissa & Carlos" class="logo" src="/team5.png" width="356" height="356" />
      <div class="day">
        <!-- <h3 class="center h2">Mondays</h3> -->
        <h3 class="center h3">Cuban Salsa Mondays</h3>
        <div class="flex">
          <div class="square">
            <div class="box">
              <a href="https://square.link/u/pP2l6SCg" target="_square" rel="noopener" class="overlay"><span>Buy ticket via Square</span></a>
              <p class="center h2 bg"><strong>Casual</strong></p>
              <p class="center">Buy it on the day via Square, PayID or cash</p>
              <div><span class="ui button big">Buy now</span></div> 
            </div>
          </div>
          <div class="square">
            <div class="box">
              <a href="https://square.link/u/6KMhFBkT" target="_square" rel="noopener" class="overlay"><span>Buy ticket via Square</span></a>
              <p class="center h2 bg"><strong> Term</strong></p>
              <p class="center">Buy a <strong>term</strong> for a <strong>discount</strong>. See our <a href="#terms">term schedule</a></p>
              <div><span class="ui button big">Buy now</span></div> 
            </div>
          </div>
        </div>
        <br>
        <p class="center smol" style="margin-bottom: 0">Intermediate students can attend other classes for free</p>
        <p class="center smol">Discounts available via coupon code - ask us!</p>
        <br></br>
      </div>
    </div>
<!---
    <br>

    <div class="day">
      <h3 class="center h2">Thursdays</h3>
      <div class="xflex wrap">
        <div class="bachata">
          <h3 class="center h3">Bachata</h3>
          <div class="flex">
            <div class="square">
              <div class="box">
                <a href="https://square.link/u/M3wW5jMl" target="_square" rel="noopener" class="overlay"><span>Buy ticket via Square</span></a>
                <p class="center h2 bg"><strong>Casual</strong></p>
                <p class="center">Buy it on the day via Square, PayID or cash</p>
                <div><span class="ui button big">Buy now</span></div> 
              </div>
            </div>
            <div class="square">
              <div class="box">
                <a href="https://square.link/u/ilxRTCna" target="_square" rel="noopener" class="overlay"><span>Buy ticket via Square</span></a>
                <p class="center h2 bg"><strong>Term</strong></p>
                <p class="center">Attend a <strong>4 week term</strong> for a <strong>discount</strong>.</p>
                <div><span class="ui button big">Buy now</span></div> 
              </div>
            </div>
          </div>
          <br>
          <p class="center smol" style="margin-bottom: 0">Improver students can attend Beginner classes for free</p>
          <p class="center smol" style="margin-bottom: 0">Uni student discounts available via coupon code - ask us!</p>
          <p class="center smol" style="margin-bottom: 0">Bring someone new to class for a discount - ask us!</p>
          <br>
        </div>
        <div class="special">
          <h3 class="center h3">Son</h3>
          <div class="flex">
            <div class="square">
              <div class="box">
                <a href="https://square.link/u/Ub8kt4Gp" target="_square" rel="noopener" class="overlay"><span>Buy ticket via Square</span></a>
                <p class="center h2 bg"><strong>Casual</strong></p>
                <p class="center">Buy it on the day via Square, PayID or cash</p>
                <div><span class="ui button big">Buy now</span></div> 
              </div>
            </div>
            <div class="square">
              <div class="box">
                <a href="https://square.link/u/Ub8kt4Gp" target="_square" rel="noopener" class="overlay"><span>Buy ticket via Square</span></a>
                <p class="center h2 bg"><strong>Term</strong></p>
                <p class="center">Attend a <strong>4 week term</strong> for a <strong>discount</strong>.</p>
                <div><span class="ui button big">Buy now</span></div> 
              </div>
            </div>
          </div>
          <br>
          <p class="center smol">Discounts available via coupon code - ask us!</p>
        </div>
      </div>  
    </div>    
  -->
  </div>
</template>

<style scoped>
/* #square {
  padding-top: 3rem;
} */
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
  padding: 1rem;
  background: var(--agua-blue);
  color: #fff;
  font-weight: bold;
}
.box a.overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-indent: -100vw;
  overflow: hidden;
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

.day .smol {
  padding: 0;
}
</style>
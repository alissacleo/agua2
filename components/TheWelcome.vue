<script setup>
import WelcomeItem from './WelcomeItem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import StarIcon from './icons/IconStar.vue'
</script>

<template>
  <div class="section white">
    <h2 class="center strong upper">Classes & Events</h2>
  <div class="welcome">
    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>Mondays</template>
      Monday classes at <a href="https://maps.app.goo.gl/fcpxkQD1vxNaPoyy8" target="_blank" rel="noopener">Rod Evans Centre</a><br>
      6:30pm <strong>Cuban Salsa</strong> Intro & Improver<br>
      7:45pm <strong>Cuban Salsa</strong> Intermediate<br>
      <a href="#square">Book online</a> or pay at the door
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <StarIcon />
      </template>
      <template #heading>Private classes</template>

     Level up your partner dance or styling.<br>
     We also offer <a href="/weddings/" target="_blank">Wedding dance classes</a><br>
     <a href="https://wa.me/0409887749">Reserve your spot</a> 💙
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Rueda at the Park</template>

      Join the Rueda at the Park <a href="https://www.facebook.com/share/g/14pb6zMvyp/" target="_blank">Facebook group</a> or <a href="https://chat.whatsapp.com/CFMApMExxwn4nOe5nZiwb2" target="_blank">WhatsApp chat</a> for updates on Rueda de Casino meetups 💦
    </WelcomeItem>
  </div>
  <div class="center">
    <a href="#details" class="ui button big">Monday Details</a>
    <br>
    <br>
   <!-- <a href="#privates" class="ui button big">Book a private class</a>
    <br>
    <br>-->
    <p>Let's dance! 💙 <a href="https://www.instagram.com/agua.cuban.dance/" target="_blank" rel="noopener">Follow Agua!</a> for classes, meet ups, socials & special events</p>
  </div>
  <br>
</div>
</template>

<style>
h2 {
  padding-top: 2rem;
}
.welcome {
  padding-bottom: 2rem;
}
@media screen and (min-width: 1024px) {
  .welcome {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
.white .button {
  background: var(--agua-blue-light);
  color: var(--vt-c-black);
}
.white .button:hover,
.white .button:active,
.white .button:focus
 {
  background: var(--agua-teal);
  color: var(--vt-c-black);
}
</style>

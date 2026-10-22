<script setup>
import ReviewCard from './ReviewCard.vue'
import StarIcon from './icons/IconStar.vue'
</script>

<template>
  <div class="section center">
    <h2 class="center strong upper">Reviews</h2>
    <div class="reviews flex flex-wrap">
        <ReviewCard>
            <template #name>Charlotte L</template>
            Amazing people. Amazing dancing! These guys really bring the vibe ✨
            <template #source>Google</template>
        </ReviewCard>
        <ReviewCard>
            <template #name>Maria C</template>
            Best cuban salsa classes in Perth! Alissa and Carlos are fun, dedicated and experienced dancers and teachers 😍 they run the best events and bootcamps as well! There’s always so much going on at Agua
            <template #source>Google</template>
        </ReviewCard>
        <ReviewCard>
            <template #name>Sarah K</template>
            Had an absolutely fabulous time in classes, well explained, heaps of fun, very inclusive and will definitely back for the next round!
            <template #source>Google</template>
        </ReviewCard>
        <ReviewCard>
            <template #name>Norelle M</template>
            Alissa and Carlos are both amazing dancers, teachers AND beautiful people! They bring such a passion and energy with them, super inclusive with options for all levels.<br>

            I had enjoyed a few dances with both of them seeing them out and about at socials and came to classes after doing linear salsa and loved their focus on having fun with dance and the music, rather than it all being about technique (though they definitely teach technique too)! And their smiles are infectious!<br>

            Highly recommend both their weekly classes and workshops when they run them 😁
            <template #source>Google</template>
        </ReviewCard>
        <ReviewCard>
            <template #name>Malek Y</template>
            Great classes<br>
            Great Vibe<br>
            Great energy<br>
            Great bicep vein
            <template #source>Google</template>
        </ReviewCard>
        <ReviewCard>
            <template #name>Alex C</template>
            Alissa & Carlos illuminate the dance floor from their passion for salsa and they are patient, fun and supportive at the studio. Highly recommend Agua to any beginner, intermediate and beyond.
Caution : highly addictive ;)
            <template #source>Google</template>
        </ReviewCard>
        <ReviewCard>
            <template #name>Jesus L</template>
            Great salsa company! Very passionate instructors. What I like the most is that the lessons are done in a private venue with very friendly instructors. Couldn’t recommend it enough💃🕺
            <template #source>Google</template>
        </ReviewCard>
        <ReviewCard>
            <template #name>Claudia B</template>
            I love love love this dance school! The teachers are so kind, friendly and fun. 🤩 And without even knowing it, we learn so much at each class. They are very attuned to students and know when we can absorb more technique, or need a bit more musicality and fun. Their offerings are so varied that it never gets boring. Absolutely recommend! 😍
            <template #source>Google</template>
        </ReviewCard>
        <ReviewCard>
            <template #name>Natina I</template>
            Agua's salsa classes are fun, full of energy, and provide expert instruction. Alissa and Carlos are passionate about dance and their passion is evident in every class. They make everyone feel welcome and comfortable regardless of skill level. I love their classes because they are able to break down complex steps making learning approachable and enjoyable. I always have a great time and walk away feeling like I learnt something new. Thanks Alissa and Carlos.
            <template #source>Google</template>
        </ReviewCard>
    </div>
  </div>
</template>
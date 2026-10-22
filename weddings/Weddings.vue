<script setup>
import GoogleReviews from '~/components/GoogleReviews.vue'
import CommunityIcon from '~/components/icons/IconCommunity.vue'
import SupportIcon from '~/components/icons/IconSupport.vue'
import StarIcon from '~/components/icons/IconStar.vue'
</script>

<template>
    <div>
        <div class="header">
            <a class="swap" href="../"><img alt="Agua logo" class="swap-logo" src="/agua-logo-white.svg" width="68" height="56" /></a>
            <img alt="Agua logo" class="logo" src="/Agua-wedding-logo.png" width="287" height="206" />
            <h1 class="center">Wedding dances with Agua!</h1>
            <p class="center">Private dance classes for your first dance</p>
            <div class="contact flex">
                <div class="social">   
                    <a href="https://www.instagram.com/dancewithalissacleo/" target="_blank" rel="noopener" title="Dance with Alissa Cleo on Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"
                        style="fill:currentColor">
                        <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                    </svg>
                    </a>
                </div>
                <div class="social">
                    <a href="https://www.facebook.com/agua.cuban.dance/" target="_blank" rel="noopener" title="Agua! Cuban Dance on Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"
                        style="fill:currentColor">
                        <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                    </svg>
                    </a>
                </div>
                <div class="social">
                    <a href="https://www.youtube.com/c/DancewithAlissaCleo" target="_blank" rel="noopener" title="Dance with Alissa Cleoe on Youtube">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"
                        style="fill:currentColor">
                        <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
                    </svg>
                    </a>
                </div>
                <div class="social">
                    <a href="https://wa.me/61409887749" target="_blank" rel="noopener" title="Chat with Alissa on WhatsApp">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" height="20" width="20" viewBox="0 0 308 308" xml:space="preserve">
                        <path d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156   c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687   c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887   c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153   c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348   c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802   c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922   c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0   c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458   C233.168,179.508,230.845,178.393,227.904,176.981z"/>
                        <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716   c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396   c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z    M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188   l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677   c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867   C276.546,215.678,222.799,268.994,156.734,268.994z"/>
                    </svg>
                    </a>
                </div>
                
                <div class="social">
                    <a href="https://open.spotify.com/playlist/64YxLVUX8fJ8KblvbqwpC4?si=MF3aCw4KRbW9j2aVafCbaA" target="_blank" rel="noopener" title="Agua! Cuban Dance on Spotify">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="margin-left: -2px">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <circle cx="12" cy="12" r="9"/>
                        <path d="M8 11.973c2.5-1.473 5.5-.973 7.5.527M9 15c1.5-1 4-1 5 .5M7 9c2-1 6-2 10 .5"/>
                    </svg>
                    </a>
                </div>
                
                <div class="social">
                    <a href="https://www.tiktok.com/@alissacleo" target="_blank" rel="noopener" title="Agua! Cuban Dance on TikTok">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" width="20" height="20" viewBox="0 0 512 512" >
                        <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"/>
                    </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="section center white">
            <h2>You're getting married!<span> <br><em>Make your first dance fun and memorable</em></span></h2>
            <div class="welcome">
                <div class="item">
                    <i><StarIcon /></i>
                    <h3>Really learn to dance</h3>
                    <p><em>Two left feet? Not anymore</em><br>                
                    Learn partner dance basics you'll actually use. At shows, in the kitchen, or to a good song at the pub, these techniques work.</p>
                </div>
                <div class="item">
                    <i><SupportIcon /></i>
                    <h3>Match your song</h3>
                    <p><em>Your wedding song, your way</em><br>
                    We'll find steps to match <strong>your</strong> song. Connect with each other, don't worry about a specific style/choreography (unless you want to).</p>
                </div>
                <div class="item">
                    <i><SupportIcon /></i>
                    <h3>Videos provided</h3>
                    <p><em>Practice makes progress</em><br>
                    Personalised video recaps of each class are yours to keep.  Practice for the wedding first dance and refresh for your anniversary.</p>
                </div>
            </div>
        </div>
        <div class="section center clay">
            <h2>Private in-home studio in Northbridge</h2>
            <h3>Comfort & convenience</h3>
            <p>We'll meet in my cozy in-home dance studio, located close the CBD with ample street parking for you 💙</p><br>
            <p>Enjoy a professional dance floor and mirrors without the pressure of dancing in a pro studio.  Feel like you're dancing at home!  Being relaxed and comfortable during your dance classes is key to learning and - more importantly - enjoying!</p>
        </div>
        <!--<div class="section center clay">
            <h2>Private in-home studio in Victoria Park</h2>
            <h3>Comfort & convenience</h3>
            <p>We'll meet in my cozy in-home dance studio, located just 4km from the CBD with a reserved parking spot just for you 💙</p><br>
            <p>Enjoy a professional dance floor and mirrors without the pressure of dancing in a pro studio.  Feel like you're dancing at home!  Being relaxed and comfortable during your dance classes is key to learning and - more importantly - enjoying!</p>
        </div>-->
        <div class="section center white">
            <h2>Make it a party</h2>
            <h3>Invite your family and bridal party to learn with you!</h3>
            <p>Traditions like father-daughter and mother-son dances (and pressure on the bridal party to get the dance floor started) could cause anxiety.</p><br>
            <p><strong>Why not have fun and make memories with your loved ones?</strong>  Some of my favorites first dance preparations have been group classes with parents, siblings and friends.
            Laughter, smiles, and mutual support can make this a great experience.</p> 
            
        </div>
        <div class="section sage no-pad-b"">
            <h2>Meet your instructor</h2>
            <div class="with-image image-right">
                <img alt="Alissa" class="logo" src="/alissa.png" width="356" height="445" />
                <div>
                    <h3>Combined wedding & dance experience</h3>
                    <p>Hi!  I'm Alissa. I worked as a wedding photographer in Seattle for over 10 years, and dabbled as a wedding coordinator so I've seen a lot of wedding first dances.
                    <em>Confession:</em> I will cry during a father-daughter dance if they play "I loved her first"</p>
                    <br>
                    <p>I started teaching partner dances like Blues, Zouk and Salsa back in 2014 and have owned my own dance school in Perth, <a href="https://aguacuban.dance">Agua! Cuban Dance</a> since 2023.</p>
                    <br>
                    <p>I believe partner dancing is often overcomplicated.  It should be natural and fun. 
                    Once you learn the basics of how to communicate with each other non-verbally ("let's step to the right" or "let's do a slow turn"), partner dance can be freeing and help you connect deeply with your partner.
                    For me, one improv concept sums it up: <strong>"Yes, and..."</strong>  
                    It means we keep an open mind and do our best to accept whatever happens and turn it into something fun, without strict expectations for ourselves, our partner or the dance.</p>
                    <br>
                </div>
            </div>
        </div>
        <div class="section center">
            <h2>Packages</h2>

            <div class="packages" style="gap:4rem">
                <div>
                    <h3 class="dark">Couples classes</h3>
                    <p class="h4">Standard class<br>$120/hr ($100/hr cash)</p>
                
                    <br> 
                    <h4>One month package</h4>
                    <p>Four weekly 1 hour classes</p>
                    <p class="h4">$432 ($400 cash)</p>

                    <br>
                    <p class="h4">Let's dance! package</p>
                    <p>Six weekly 1 hour classes</p>
                    <p class="h4">$648 ($600 cash)</p>
                </div>

                <div>
                    <h3 class="dark">Group classes</h3>
                    <h4>3 - 6 people, 1hr class</h4>
                    <p class="h4">$40 per person</p>

                    <br>
                    <h4>7 - 10 people, 1hr class</h4>
                    <p class="h4">$30 per person</p>
                </div>
            </div>

            <br>
            <br>
            <p>I can create custom plans if you'd like longer classes or more/less classes per week.  I can also travel to you in some circumstances.  Let me know what suits you and let's make it work!</p>

        </div>
        <div class="section sage">
            <h2>FAQ</h2>

            <h3>Can we use any song?</h3>
            <p>Yes!  I recommend picking a song that is meaningful to you.  If you feel connected to the song, you'll really enjoy the dance.</p>
            <p>Here's a <a href="https://open.spotify.com/playlist/0NnzbOVkDdqwZvJaWnW7SI?si=JllJeWh8QzGkX5KqRoXBzA&utm_source=copy-link&pi=D_xa5lkOS-KMi" target="_blank" rel="noopener">Spotify playlist</a> of songs my wedding couples have picked in the past, if you're curious</p>

            <br>
            <h3>How does the first dance work?</h3>
            <p>Typically:</p>
            <ul style="text-align: left">
            <li>DJ or MC asks your guests to be seated and invites you to the floor</li>
            <li>You make your way to the floor and dance</li>
            <li>DJ or MC invites the bridal party to the dance floor or announces the next event</li>
            </ul>  
            <br>
            <p>Some tips: The DJ may start the song just after the announcement.  Don't plan on starting to dance the second the song starts.  
            You might be stuck talking to an uncle and need 30 seconds or a minute to make your way to the floor.
            After the first dance you can transition into another event while everyone is organised (and now emotional after watching you), like cake cutting, father-daughter mother-son dances, bouquet toss or opening the dance floor.</p>

            <br>
            <h3>How long do we dance?</h3>
            <p>It's standard for the first dance to last only a minute or two (which can feel like a long time but is over in a second), but you can dance as long as you want, it's your day.</p>

            <br>
            <h3>Can we trim the song?</h3>
            <p>If you want to use just a section of a song instead of starting from the beginning, I can help you cut the song or provide some instructions for DJ or MC.</p>
            <br>
            <h3>Can you help us pick?</h3>
            <p>Absolutely.  If you have a few songs in mind and can't decide, I can help you pick a song that will suit your vibe and the mood you want on the day.</p>
        </div>
        <div class="section white center">
            <GoogleReviews/>
        </div>
        <div class="section clay center">
            <h2 class="center">Wedding class enquiry form</h2>
            <div data-tf-live="01M5HX1TGD4DM3QW4R78TBXRQV"></div>
        </div>
        <div class="section center">
            <h2 class="center">Get Social</h2>
            <p><a href="../">Check out our Cuban Salsa classes</a></p><br>
            <p class="center">Let's dance! 💙 <a href="https://www.instagram.com/agua.cuban.dance/" target="_blank" rel="noopener">Follow Agua!</a> for classes, meet ups, socials & special events</p>
            <div class="contact flex">
                <div class="social">   
                    <a href="https://www.instagram.com/dancewithalissacleo/" target="_blank" rel="noopener" title="Dance with Alissa Cleo on Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"
                        style="fill:currentColor">
                        <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                    </svg>
                    </a>
                </div>
                <div class="social">
                    <a href="https://www.facebook.com/agua.cuban.dance/" target="_blank" rel="noopener" title="Agua! Cuban Dance on Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"
                        style="fill:currentColor">
                        <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                    </svg>
                    </a>
                </div>
                <div class="social">
                    <a href="https://www.youtube.com/c/DancewithAlissaCleo" target="_blank" rel="noopener" title="Dance with Alissa Cleoe on Youtube">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"
                        style="fill:currentColor">
                        <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
                    </svg>
                    </a>
                </div>
                <div class="social">
                    <a href="https://wa.me/61409887749" target="_blank" rel="noopener" title="Chat with Alissa on WhatsApp">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" height="20" width="20" viewBox="0 0 308 308" xml:space="preserve">
                        <path d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156   c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687   c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887   c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153   c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348   c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802   c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922   c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0   c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458   C233.168,179.508,230.845,178.393,227.904,176.981z"/>
                        <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716   c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396   c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z    M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188   l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677   c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867   C276.546,215.678,222.799,268.994,156.734,268.994z"/>
                    </svg>
                    </a>
                </div>
                
                <div class="social">
                    <a href="https://open.spotify.com/playlist/64YxLVUX8fJ8KblvbqwpC4?si=MF3aCw4KRbW9j2aVafCbaA" target="_blank" rel="noopener" title="Agua! Cuban Dance on Spotify">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="margin-left: -2px">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <circle cx="12" cy="12" r="9"/>
                        <path d="M8 11.973c2.5-1.473 5.5-.973 7.5.527M9 15c1.5-1 4-1 5 .5M7 9c2-1 6-2 10 .5"/>
                    </svg>
                    </a>
                </div>
                
                <div class="social">
                    <a href="https://www.tiktok.com/@alissacleo" target="_blank" rel="noopener" title="Agua! Cuban Dance on TikTok">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" width="20" height="20" viewBox="0 0 512 512" >
                        <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"/>
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.header .logo {
    display: block;
    margin: 1rem auto -12px;
    height: auto;
}
.welcome {
  padding: 2rem 0;
}
.welcome h3 {
    font-size: 1.4em
}
.packages > div {
    padding-bottom: 2rem;
}
@media screen and (min-width: 1024px) {
  .welcome {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:2rem;
  }
  .packages {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}
@media screen and (max-width: 575px) {
    .header .logo {
        width: 268px;
        transform: translateX(21px);
    }
    .header h1 {
        max-width: 307px;
        line-height: 1;
        padding: 12px 0;
    }
}

a.swap {
    background: blue;
    display: block;
    border-radius: 50%;
    position: absolute;
    padding: 6.4rem 2rem 2rem 6.6rem;
    top: -6rem;
    left: -6rem;
}
.swap:hover {
    transform: scale(1.2);
}
.swap .swap-logo {
    margin: 0;
    display: block;
    width: 72px;
    height: auto;
}
</style>

<style lang="css" src="~/style/weddings.css"/>

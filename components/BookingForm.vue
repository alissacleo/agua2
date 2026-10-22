<script setup>
import { computed, ref, onMounted, watch } from 'vue'
import { supabase } from '../lib/supabaseClient'

const services = ref([])
async function getServices() {
  const { data } = await supabase.from('services').select()
  services.value = data
  console.log("services: " + services.value)
}
const bookings = ref([])
async function getBookings() {
  const { data } = await supabase.from('bookings').select()
  bookings.value = data
  console.log("bookings: " + bookings.value)
}


onMounted(() => {
   getServices()
   getBookings()
})

const booking = ref({
  customer_name: '',
  customer_email: '',
  teacher: '',
  service_id: '',
  booking_date: '',
  start_time: ''
})

function bookedDatesFor(...teachers) {
  const teacherSet = new Set(teachers)
  return new Set(
    bookings.value
      .filter(b => teacherSet.has(b.teacher))
      .map(b => b.booking_date)
  )
}

const alissaBookedDates = computed(() => bookedDatesFor('Alissa', 'Both'))
const carlosBookedDates = computed(() => bookedDatesFor('Carlos', 'Both'))
const bothBookedDates = computed(() => bookedDatesFor('Alissa', 'Carlos', 'Both'))

const targetDate = new Date('2026-09-01T00:00:00')
let currentDate = new Date(); // Start from today
const Thursdays = [];
const TuesdaysThursdays = [];

while (currentDate <= targetDate) {
    const dayOfWeek = currentDate.getDay();
    const formattedDate = currentDate.toISOString().split('T')[0]

    // 2 = Tuesday, 4 = Thursday
    if (dayOfWeek === 4) {
        Thursdays.push(formattedDate);
    }
    if (dayOfWeek === 2 || dayOfWeek === 4) {
        TuesdaysThursdays.push(formattedDate);
    }
    // Increment by 1 day
    currentDate.setDate(currentDate.getDate() + 1);
}

const availableAlissa = computed(() => {
  return TuesdaysThursdays.filter(date => !alissaBookedDates.value.has(date))
})

const availableCarlos = computed(() => {
  return Thursdays.filter(date => !carlosBookedDates.value.has(date))
})

const availableBoth = computed(() => {
  return Thursdays.filter(date => !bothBookedDates.value.has(date))
})

watch(() => booking.value.teacher, () => {
  booking.value.booking_date = ''
})

const isSubmitting = ref(false)
const bookingError = ref('')
const bookingSuccess = ref(false)
const successDetails = ref(null)

function formatBookingDate(date) {
  return new Date(`${date}T00:00:00`).toDateString()
}

function formatBookingTime(time) {
  const hour = Number(time.split(':')[0])
  if (hour === 18) return '6:00pm'
  if (hour === 19) return '7:00pm'
  return time
}

async function submitBooking() {
  bookingError.value = ''
  bookingSuccess.value = false
  successDetails.value = null
  isSubmitting.value = true

   try {
    const response = await fetch('/.netlify/functions/createBooking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        customer_name: booking.value.customer_name,
        customer_email: booking.value.customer_email,
        teacher: booking.value.teacher,
        service_id: booking.value.service_id,
        booking_date: booking.value.booking_date,
        start_time: booking.value.start_time
      })
    })

    const result = await response.json()

    if (!response.ok) {
      console.error('Booking function error:', result)
      throw new Error(result.error || 'Booking failed')
    }

    successDetails.value = {
      customer_name: booking.value.customer_name,
      teacher: booking.value.teacher,
      booking_date: booking.value.booking_date,
      start_time: booking.value.start_time
    }
    bookingSuccess.value = true
    await getBookings()

    booking.value = {
      customer_name: '',
      customer_email: '',
      teacher: '',
      service_id: '',
      booking_date: '',
      start_time: ''
    }
  } catch (error) {
    bookingError.value = error.message
  } finally {
    isSubmitting.value = false
  }

  console.log('Booking submitted:', booking.value)
}
</script>

<template>
    <div id="privates" class="section white center">
        <h2 class="center upper h2">Book a private class</h2>

        <p
            v-if="bookingSuccess && successDetails"
            class="booking-message booking-message--success"
            role="status"
        >
            Thanks, {{ successDetails.customer_name }}! Your class with {{ successDetails.teacher }} on
            {{ formatBookingDate(successDetails.booking_date) }} at
            {{ formatBookingTime(successDetails.start_time) }} is confirmed.
        </p>
        <p v-if="bookingError" class="booking-message booking-message--error" role="alert">
            {{ bookingError }}
        </p>

        <form @submit.prevent="submitBooking">
            <p class="smol">Cuban Salsa, Son, Rumba, styling and wedding dances</p>

            <select id="service" v-model="booking.service_id" required>
                <option disabled value="">Choose a service</option>
                <option v-for="service in services" :key="service.id" :value="service.id">{{ service.name }}</option>
            </select>
            <p class="smol">
              All classes are 1 hour long<br>
              Solo and couple: $100/hr<br>
              Group: $40/person<br>
              Payable by cash or PayID on day of class
            </p>


            <select id="teacher" v-model="booking.teacher" required>
                <option disabled value="">Choose an instructor</option>
                <option value="Alissa" selected>Instructor: Alissa</option>
                <option value="Carlos" v-if="booking.service_id != 'a168af2d-7763-4b85-a9fe-4200c28fb502'">Instructor: Carlos</option>
                <option value="Both" v-if="booking.service_id != 'a168af2d-7763-4b85-a9fe-4200c28fb502'">Instructor: Alissa & Carlos</option>
            </select>
            <select v-if="booking.teacher === 'Alissa'" id="booking_date" v-model="booking.booking_date" required>
                <option disabled value="">Choose a date</option>
                <option v-for="date in availableAlissa" :key="date" :value="date">{{ formatBookingDate(date) }}</option>
            </select>

            <select v-else-if="booking.teacher === 'Carlos'" id="booking_date" v-model="booking.booking_date" required>
                <option disabled value="">Choose a date</option>
                <option v-for="date in availableCarlos" :key="date" :value="date">{{ formatBookingDate(date) }}</option>
            </select>

            <select v-else-if="booking.teacher === 'Both'" id="booking_date" v-model="booking.booking_date" required>
                <option disabled value="">Choose a date</option>
                <option v-for="date in availableBoth" :key="date" :value="date">{{ formatBookingDate(date) }}</option>
            </select>

            <select id="start_time" v-model="booking.start_time" required>
                <option disabled value="">Choose a time</option>
                <option value="18:00:00">6:00pm</option>
                <option value="19:00:00">7:00pm</option>
            </select>

            <input id="customer_name" v-model="booking.customer_name" placeholder="Your name" required autocomplete="true"/>
            <input id="customer_email" v-model="booking.customer_email" type="email" placeholder="Email" required />

            <button type="submit" :disabled="isSubmitting">
                {{ isSubmitting ? 'Booking…' : 'Book now' }}
            </button>
        </form>
    </div>
</template>

<style>
    form {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 600px;
        margin: 2rem auto;
        gap: 1rem;
    }
    input, select, button {
        border-radius: 16px;
        padding: 1rem;
        border: 2px solid var(--agua-blue);
        outline: none;
    }
    button {
        background: var(--agua-blue);
        color: #fff;
    }
    button:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
    .booking-message {
        max-width: 600px;
        margin: 0 auto 1rem;
        padding: 1rem;
        border-radius: 16px;
        border: 2px solid var(--agua-blue);
    }
    .booking-message--success {
        background: var(--agua-blue-light);
        color: var(--agua-blue);
    }
    .booking-message--error {
        border-color: #b00020;
        color: #b00020;
        background: #fff5f5;
    }
</style>
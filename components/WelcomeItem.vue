<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  position: relative;
  max-width: 425px;
  margin: 2rem auto;
}

.details {
  flex: 1;
  font-size: 16px;
  margin-left: 0.5rem;
}

i {
  margin-top: -2px;
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.4rem;
  /* font-weight: 500; */
  margin-bottom: 0.4rem;
  color: var(--color-heading);
  text-transform: uppercase;
  line-height: 1.2;
}


</style>

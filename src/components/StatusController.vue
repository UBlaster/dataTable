<template>
  <div class="status__wrapper">
    <div class="status__container">
      <div v-if="props.status === 'SUCCEED'" class=" status__succeed">
        Succeed
      </div>
      <div v-if="props.status === 'ERROR'" class="status__error">
        Error
      </div>
      <div v-if="props.status === 'PROCESSING'" class="status__processing">
        <DotLoading></DotLoading>
      </div>
      <div v-if="props.status === 'EMPTY'" class="status__empty">
        Empty
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import DotLoading from '@/components/UI/DotLoading.vue';


const props = defineProps({
  status: {
    type: String,
    default: "EMPTY"
  }
})



</script>

<style scoped lang="scss">
.status {
  &__wrapper {
    display: flex;
    justify-content: center;
  }

  &__container,
  &__succeed,
  &__error,
  &__empty {
    width: auto;
    padding: 0.5rem;
    border-radius: 1.9rem;
  }

  &__succeed {
    background-color: var(--color-background-green)
  }

  &__error {
    background-color: var(--color-background-red)
  }

  &__empty {
    background-color: var(--color-background-grey-dark)
  }
}
</style>
<script setup lang="ts">
import { computed } from "vue"

  const props = defineProps<{price:number, amount:number}>()
  const total = computed(() => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(props.price * props.amount);
});

</script>
<template>
  <span>{{ total }}</span>
</template>
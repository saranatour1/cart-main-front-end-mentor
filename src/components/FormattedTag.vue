
<script setup lang="ts">
import { computed } from "vue";
  const props = defineProps<{num:number}>()
  const total = computed(() => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(props.num);
});
</script>
<template>
  <span>{{ total }}</span>
</template>
<script setup lang="ts">
import { CartItem } from '../data';
import { EmptyCart, FullCart } from '.';
defineProps<{ cartProducts: CartItem[] }>()
const emits = defineEmits<{ 'pop-item': [name: string] }>()
const handlePopItem = (name: string) => {
  emits("pop-item", name)
}
</script>
<template>
  <div class="p-300 bg-white rounded-xl flex flex-col gap-y-300 max-md:w-full">
    <p class=" text-preset-2 text-red-0">Your Cart ({{ cartProducts.length }})</p>
    <EmptyCart v-if="cartProducts.length === 0" />
    <FullCart :products="cartProducts" @pop-item="handlePopItem" />
  </div>
</template>
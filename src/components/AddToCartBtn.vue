<script setup lang="ts">
import addToCartIcon from "../assets/icon-add-to-cart.svg";
import { Add, Subtract } from './index';

const props = defineProps<{ startAdding: boolean }>();
const emits = defineEmits(['start-cart', 'decrement', 'increment']);
</script>
<template>
  <button @click="emits('start-cart')" :disabled="startAdding" :class="{ '!bg-red-0': startAdding }"
    class="group flex items-center justify-center p-150 gap-x-100 bg-white border border-rose-400 rounded-[62.4375rem] w-full max-w-[10rem] hover:border-red-0 transition-colors">
    <img v-if="!startAdding" :src="addToCartIcon" alt="add to cart Icon" />
    <span v-if="!startAdding" class="text-preset-4 group-hover:text-red-0 transition-colors">
      Add to Cart
    </span>

    <span class="flex items-center justify-between w-full" v-if="startAdding">
      <Subtract @click="emits('decrement')" />
      <span class="text-preset-4 text-white">
        <slot />
      </span>
      <Add @click="emits('increment')" />
    </span>
  </button>
</template>
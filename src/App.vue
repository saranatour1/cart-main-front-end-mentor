<script setup lang="ts">
// Supports weights 300-700
import '@fontsource-variable/red-hat-text';
import { reactive } from 'vue';
import { Item } from "./components/index";
import { CartItem, products } from './data/index'
import { Cart } from './components/index';
const cart = reactive<CartItem[]>([]);

const updateCart = (amount: number, name: string) => {
  const target = products.find(item => item.name === name);
  if (!target) return;
  const itemToUpdate = cart.find(item => item.name === name);
  if (itemToUpdate) {
    itemToUpdate.amount = amount;
  } else {
    cart.push({ ...target, amount });
  }
}

const popItem = (name: string) => {
  const indexToRemove = cart.findIndex(item => item.name === name)
  if (indexToRemove !== -1) {
    cart.splice(indexToRemove, 1);
  }
}
</script>
<template>
  <main
    class="w-full h-full px-500 py-1100 min-h-screen grid grid-flow-col grid-cols-6 gap-x-400 bg-rose-50 max-md:p-500 max-md:grid-flow-row max-md:grid-cols-1 max-md:gap-y-400 max-sm:p-300">
    <div class="flex flex-col items-start justify-start gap-y-400 w-full col-span-4 max-w-[69.1rem]">
      <h1 class="text-preset-1 text-rose-900">Desserts</h1>
      <div
        class="grid grid-cols-3 w-full justify-items-start items-center justify-between gap-x-300 gap-y-400 max-sm:grid-cols-1">
        <Item v-for="(item, key) in products" :key="key" :item="item" @update-cart="updateCart" @pop-item="popItem" />
      </div>
    </div>
    <div class="w-full col-span-2 max-w-[24rem] mx-auto max-md:max-w-full max-md:col-span-4">
      <Cart :cart-products="cart" @pop-item="popItem" />
    </div>
  </main>
</template>

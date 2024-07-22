<script setup lang="ts">
// Supports weights 300-700
import '@fontsource-variable/red-hat-text';
import { reactive } from 'vue';
import { AddToCartBtn, Item } from "./components/index";
import {CartItem, products} from './data/index'
const cart = reactive<CartItem[]>([]);

const updateCart =(amount:number,name:string)=>{
  const target = products.filter(item => item.name ===name)
  console.log(name,amount)
  cart.push({...target,amount:amount})
  console.log(cart)
}
</script>

<template>
  <main class="w-full h-full px-500 py-1100 min-h-screen grid grid-flow-col grid-cols-6 gap-x-400">
    <div class="flex flex-col items-start justify-start gap-y-400 w-full col-span-4 max-w-[69.1rem]">
      <h1 class="text-preset-1 text-rose-900">Desserts</h1>
      <div class="grid grid-cols-3 w-full justify-items-start items-center justify-between gap-x-300 gap-y-400">
        <Item v-for="(item,key) in products" :key="key" :item="item" @update-cart="updateCart"/>
      </div>
    </div>
    
    <div class="w-full col-span-2 max-w-[24rem] mx-auto">
      c
    </div>
  </main>
</template>

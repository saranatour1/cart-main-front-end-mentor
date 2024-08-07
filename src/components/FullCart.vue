<script setup lang="ts">
import { CartItem } from '../data';
import { PriceTag, FormattedTag, Remove, Carbon, Modal } from '.';
import { computed } from 'vue';
const props = defineProps<{ products: CartItem[] }>()
const emits = defineEmits<{ 'pop-item': [name: string] }>()

const orderTotal = computed(() => {
  return props.products.reduce((acc, curr) => acc + Number(curr.price) * curr.amount, 0)
})

const removeItem = (name: string) => {
  emits("pop-item", name)
}
</script>
<template>
  <div v-for="(item, index) in products" :key="index"
    class="flex items-center justify-between border-b border-b-rose-100 pb-200 ">
    <div class="flex flex-col items-start justify-start gap-y-100">
      <p class="text-preset-4-bold text-rose-900">{{ item.name }}</p>
      <p class="flex items-start justify-normal gap-x-100">
        <span class="text-preset-4-bold text-red-0">{{ item.amount }}x</span>
        <FormattedTag class="text-preset-4 text-rose-500 before:content-['@']" :num="Number(item.price)" />
        <PriceTag class="text-preset-4-bold text-rose-500" :amount="item.amount" :price="Number(item.price)" />
      </p>
    </div>
    <button @click="removeItem(String(item.name))">
      <Remove />
    </button>
  </div>
  <div v-if="orderTotal != 0" class="flex items-center justify-between ">
    <p class="text-preset-4 text-rose-900">Order Total</p>
    <FormattedTag class="text-preset-2 text-rose-900" :num="orderTotal" />
  </div>
  <div v-if="orderTotal != 0" class="p-200 flex justify-center items-center bg-rose-50 rounded-lg gap-x-100">
    <Carbon class="self-center" />
    <p class="text-preset-4">
      This is a
      <span class="text-preset-4-bold"> carbon-neutral</span>
      delivery
    </p>
  </div>
  <Modal v-if="orderTotal != 0" :products="products" :total="orderTotal"/>
</template>
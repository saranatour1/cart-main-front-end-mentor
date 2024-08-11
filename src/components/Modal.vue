<script lang="ts" setup>
import { ref } from "vue";
import { CartItem } from "../data";
import { Confirmed, PriceTag, FormattedTag } from ".";
import { onClickOutside } from '@vueuse/core'
 defineProps<{ products: CartItem[], total: number }>()
const open = ref(false)
const target = ref(null)
onClickOutside(target, _event => open.value = false)
</script>
<template>
  <button @click="open = true"
    class="text-preset-3 text-white flex items-center justify-center bg-red-0 py-200 px-300 rounded-[62.4375rem]">
    Confirm Order
  </button>

  <Teleport to="body">
    <Transition name="modal">
      <div v-if="open"
        class="fixed z-50 w-full h-full px-500 bg-black/50 flex transition items-center justify-center top-[0px] left-[0px]">
        <div  ref="target"
          class="w-full max-w-[37rem] m-auto p-500 bg-white rounded-xl shadow-sm transition flex flex-col items-start justify-normal gap-y-400">
          <div class="flex flex-col items-start justify-start gap-y-300">
            <Confirmed class="w-[3rem] h-[3rem]" />
            <p class="flex flex-col items-start justify-start gap-y-100">
              <span class=" text-preset-1 text-rose-900">Order Confirmed</span>
              <span class="text-preset-3 !font-normal text-rose-500">We hope you enjoy your food!</span>
            </p>
          </div>
          <div class="bg-rose-50 w-full p-300 rounded-lg flex flex-col gap-y-200">
            <div v-for="(item, index) in products" :key="index"
              class="pb-200 border-b  border-b-rose-50 flex items-center justify-between">
              <div class="flex gap-x-200 items-start justify-start">
                <img class="w-[3rem] h-[3rem] rounded" :src="item.image?.thumbnail" :alt="item.name">
                <div class="flex flex-col items-start justify-start gap-y-100">
                  <p class="text-preset-4-bold text-rose-900">{{ item.name }}</p>
                  <p class="flex items-center justify-start gap-x-100">
                    <span class="text-preset-4-bold !text-red-0">{{ item.amount }}x</span>
                    <FormattedTag class="before:content-['@'] text-preset-4 text-rose-500" :num="Number(item.price)" />
                  </p>
                </div>
              </div>
              <PriceTag class="text-preset-3 text-rose-900" :amount="item.amount" :price="Number(item.price)" />
            </div>
            <div class="pt-300 flex items-center justify-between">
              <span class="text-preset-4 text-rose-900">Order Total</span>
              <FormattedTag class="text-preset-2 text-rose-900" :num="total" />
            </div>
          </div>
          <button @click="open = false"
            class="text-preset-3 text-white flex items-center justify-center bg-red-0 w-full py-200 px-300 rounded-[62.4375rem]">Start
            New Order</button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
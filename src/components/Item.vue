<script lang="ts" setup>
import { computed, watch, reactive  } from "vue";
import { Product } from "../data";
import { AddToCartBtn } from './index';

const emits = defineEmits<{'update-cart':[amount:number,name:string],'pop-item':[name:string]}>()

const props = defineProps<{ item: Product }>();
const price = computed(() => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(props.item.price);
});

const cartOption = reactive({
  startAdding: false,
  amount: 0,
})

const startCart = () => {
  cartOption.startAdding = true;
  cartOption.amount = 1;
}

const decrement = () => {
  cartOption.amount--;
  if (cartOption.amount < 0) {
    cartOption.amount = 0;
  }
}

const increment = () => {
  cartOption.amount++;
}

watch(cartOption, (newCart, oldCart) => {
  if (newCart.amount === 0) {
    cartOption.startAdding = false;
    emits('pop-item',props.item.name)
  }
})

watch(cartOption,(newAmount, oldAmount)=>{
  if(newAmount.amount){
    emits('update-cart',newAmount.amount,props.item.name)
  }
})
</script>
<template>
  <div class="flex flex-col items-start justify-start gap-y-200 col-span-1 group">
    <div class="-mb-300">
      <picture>
        <source :srcset="item.image.mobile" media="(max-width: 375px)" />
        <source :srcset="item.image.tablet" media="(max-width: 768px)" />
        <img :src="item.image.desktop" :alt="item.name" loading="lazy"
          class="rounded-lg transition hover:scale-95 cursor-pointer hover:border hover:border-red-0" />
      </picture>
      <div class="relative flex items-center justify-center w-full bottom-300">
        <AddToCartBtn :start-adding="cartOption.startAdding" class="w-full" @start-cart="startCart"
          @decrement="decrement" @increment="increment">
          {{ cartOption.amount }}
        </AddToCartBtn>
      </div>
    </div>
    <div class="flex flex-col justify-start items-start gap-y-50">
      <span class="text-preset-4 text-rose-400">{{ item.category }}</span>
      <span class="text-preset-3 text-rose-900">{{ item.name }}</span>
      <span class="text-preset-3 text-red-0 ">{{ price }}</span>
    </div>
  </div>
</template>
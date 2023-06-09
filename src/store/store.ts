import { reactive } from "vue";

export const store = reactive({
  count: 0,
  cartPrice: 0,
  wasPurchaseAdded: false,
  setPurchase (price: number){
    this.count += 1;
    this.cartPrice += price;
    this.wasPurchaseAdded = true;
    setTimeout(() => {
      this.wasPurchaseAdded = false
    }, 1000)
  }
})
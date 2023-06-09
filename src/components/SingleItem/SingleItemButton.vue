<template>
	<button @click="store.setPurchase(currentPrice)">В корзину</button>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { store } from '../../store/store';

export default defineComponent({
	name: 'SingleItemButton',
	data() {
		return {
			store,
			currentPrice: inject<number>('currentPrice') as number,
		};
	},
});
</script>

<style scoped>
button {
	padding: 10px 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid rgba(244, 67, 54, 0.3);
	border-radius: 6px;
	font-family: 'Open Sans', sans-serif;
	font-weight: 700;
	font-size: 15px;
	background-color: white;
	color: #f44336;
	cursor: pointer;
	transition: all 0.5s ease;
}

button:hover {
	transform: translateY(-10px);
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
	background-color: #f44336;
	color: white;
}
</style>

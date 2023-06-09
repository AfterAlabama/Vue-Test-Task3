<template>
	<div id="priceContainer">
		<SingleItemDiscount />
		<SingleItemCurrentPrice />
	</div>
</template>

<script>
import SingleItemCurrentPrice from './SingleItemCurrentPrice.vue';
import SingleItemDiscount from './SingleItemDiscount.vue';

export default {
	name: 'SingleItemPrice',
	components: {
		SingleItemCurrentPrice,
		SingleItemDiscount,
	},
};
</script>

<style scoped>
#priceContainer {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap:5px;
}
</style>

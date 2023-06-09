<template>
	<div id="discountContainer">
		<div>{{ item.price }}</div>
		<div>-{{ discount }}%</div>
	</div>
</template>

<script>
export default {
	name: 'SingleItemDiscount',
	inject: ['item'],
	data() {
		return {
			discount: Math.round(this.item.discountPercentage),
		};
	},
};
</script>

<style scoped>
#discountContainer {
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100px;
}

#discountContainer > div:first-child {
	font-size: 14px;
	color: #808080;
	text-decoration: line-through red;
}

#discountContainer > div:first-child:after {
	content: ' \20BD';
}

#discountContainer > div:last-child  {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
	background: #f44336;
	border-radius: 5px;
	font-weight: 700;
	font-size: 12px;
	line-height: 12px;
	color: #ffffff;
}
</style>

<template>
	<div>{{ currentPrice }}</div>
</template>

<script>
export default {
	name: 'SingleItemCurrentPrice',
	inject: ['currentPrice'],
};
</script>

<style scoped>
div {
	text-align: center;
	font-size: 26px;
	line-height: 32px;
	color: #f44336;
}
div:after {
	content: ' \20BD';
}
</style>

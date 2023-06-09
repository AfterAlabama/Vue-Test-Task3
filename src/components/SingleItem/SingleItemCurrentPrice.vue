<template>
	<div>{{ currentPrice }}</div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

export default defineComponent({
	name: 'SingleItemCurrentPrice',
	data() {
		return {
			currentPrice: inject<number>('currentPrice') as number,
		};
	},
});
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

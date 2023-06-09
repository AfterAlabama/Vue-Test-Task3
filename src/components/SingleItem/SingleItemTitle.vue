<template>
	<p>{{ item.title }}</p>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import type { Item } from '../../types/ItemsList';

export default defineComponent({
	name: 'SingleItemTitle',
	data() {
		return {
			item: inject<Item>('item') as Item,
		};
	},
});
</script>

<style scoped>
p {
	font-family: 'Open Sans';
	font-weight: 600;
	font-size: 15px;
	color: #333333;
	text-align: center;
}
</style>

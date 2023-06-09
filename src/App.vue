<template>
	<Snackbar />
	<AppHeader />
	<ItemsComponent />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import ItemsComponent from './components/ItemsComponent.vue';
import AppHeader from './components/AppHeader.vue';
import Snackbar from './components/Snackbar.vue';
import { Item, initialItemsList } from './types/ItemsList';
import { fetchItems } from './helpers/fetchItems';

export default defineComponent({
	name: 'App',
	components: { AppHeader, ItemsComponent, Snackbar },
	data() {
		return {
			itemsList: [] as Item[],
		};
	},
	provide() {
		return {
			itemsList: computed(() => this.itemsList),
		};
	},
	async created() {
		const res = await fetchItems<initialItemsList>(
			'https://dummyjson.com/products?limit=10'
		);
		this.itemsList = res.products;
	},
});
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Inter', sans-serif;
}
</style>

<style scoped>
	* {
		background-color: #f4f4f4;
		height: 100%;
		width: 100%;
	}
</style>

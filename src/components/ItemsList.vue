<template>
	<section>
		<SingleItem
			:key="item.id"
			v-for="item in itemsList"
			:item="item"
		/>
	</section>
</template>

<script lang="ts" >
import { defineComponent, inject } from 'vue';
import SingleItem from './SingleItem/SingleItem.vue';
import type { Item } from '../types/ItemsList';

export default defineComponent({
	name: 'ItemsList',
	data(){
		return {
			itemsList: inject<Item[]>('itemsList') as Item[]
		}
	},
	components: { SingleItem },
});
</script>

<style scoped >
section {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	row-gap:20px;
}

@media(max-width:699px){
	section {
		justify-content: center;
	}
}
</style>

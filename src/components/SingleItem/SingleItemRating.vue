<template>
	<div id="ratingContainer">
		<div
			class="fa fa-star"
			v-for="star in stars"
			:key="star"
		/>
		<div>{{ item.stock }}</div>
	</div>
</template>

<script lang="ts" >
import { defineComponent, inject } from 'vue';
import type { Item } from '../../types/ItemsList';

export default defineComponent({
	name: 'SingleItemRating',
	data() {
		return {
			item: inject<Item>('item') as Item,
			stars: 0,
		};
	},
	created(){
		this.stars = Math.round(this.item.rating)
	}
});
</script>

<style scoped>
#ratingContainer {
	display: flex;
	align-items: center;
	justify-content: center;
}

#ratingContainer > div:last-child {
	font-size: 14px;
	color: #999999;
}

#ratingContainer .fa {
	width: 16px;
	height: 16px;
	display: flex;
	align-items: center;
	margin-right: 5px;
	color: orange
}
</style>

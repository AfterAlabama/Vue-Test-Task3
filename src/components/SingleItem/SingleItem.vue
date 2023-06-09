<template>
	<article>
		<img
			alt="ItemImage"
			:src="item.thumbnail"
		/>
		<SingleItemRating />
		<SingleItemTitle />
		<SingleItemPrice />
		<SingleItemButton />
	</article>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import type { PropType } from 'vue'
import SingleItemButton from './SingleItemButton.vue';
import SingleItemPrice from './SingleItemPrice.vue';
import SingleItemRating from './SingleItemRating.vue';
import SingleItemTitle from './SingleItemTitle.vue';
import type { Item } from '../../types/ItemsList';

export default defineComponent({
	name: 'SingleItem',
	props: {
		item: {
			type: Object as PropType<Item>,
			required: true,
		},
	},
	data() {
		return {
			currentPrice: Math.ceil(
				this.item.price -
					(this.item.price / 100) * Math.round(this.item.discountPercentage)
			),
		};
	},
	provide() {
		return {
			item: computed(() => this.item),
			currentPrice: computed(() => this.currentPrice),
		};
	},
	components: {
		SingleItemButton,
		SingleItemPrice,
		SingleItemTitle,
		SingleItemRating,
	},
});
</script>

<style scoped>
article {
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	padding: 15px 15px 24px;
	width: 210px;
	height: 415px;
}

article > img {
	width: 180px;
	height: 150px;
}
</style>

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
import { defineComponent } from 'vue';
import SingleItem from './SingleItem/SingleItem.vue';

export default defineComponent({
	name: 'ItemsList',
	inject: ['itemsList'],
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

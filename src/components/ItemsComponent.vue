<template>
	<main>
		<h1>Новинки</h1>
		<ItemsList />
	</main>
</template>

<script>
import ItemsList from './ItemsList.vue';

export default {
	name: 'ItemsComponent',
	components: { ItemsList },
};
</script>

<style scoped>
main {
	padding: 4vh 20vw;
}

main > h1 {
	font-size: 40px;
	margin-bottom: 4vh;
	line-height: 50px;
}

@media(max-width: 1049px){
	main > h1 {
		text-align: center;
	}
}
</style>

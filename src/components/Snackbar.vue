<template>
	<Transition>
		<article v-if="store.wasPurchaseAdded">Покупка Добавлена</article>
	</Transition>
</template>

<script>
import { store } from '../store/store';
export default {
	name: 'SnackBar',
	data() {
		return {
			store,
		};
	},
};
</script>

<style scoped>
article {
	position: fixed;
	z-index: 2;
	top: 25px;
	left: 40%;
	height: inherit;
	width: inherit;
	padding: 1.5vh 2vw;
	background-color: rgb(7, 168, 7);
	color: white;
	border-radius: 30px;
	font-size: 20px;
}

@media(max-width:700px){
	article {
		left: 20%
	}
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease, transform 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
	transform: translateY(-20px);
}
</style>

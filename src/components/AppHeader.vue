<template>
	<header>
		<button>
			<img
				src="../assets/Buy.png"
				alt="Cart icon"
			/>
			<span id="sum">{{ store.cartPrice }}</span>
			<span id="count">{{ store.count }}</span>
		</button>
	</header>
</template>

<script>
import { store } from '../store/store';
export default {
	name: 'AppHeader',
	data() {
		return {
			store,
		};
	},
};
</script>

<style scoped>
header {
	background-color: white;
	height: 10vh;
	position: sticky;
	top: 0;
	padding: 0 20vw;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}



header > button {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding: 15px 25px;
	width: 180px;
	height: 55px;
	background: #f5f7fa;
	border-radius: 15px;
	border: none;
}

@media(max-width:700px){
	header {
		justify-content: center;
	}
	header > button {
		height: 40px
	}
}

#sum {
	font-size: 16px;
	color: #051d36;
}

#sum:after {
	content: ' \20BD';
}

#count {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
	color: white;
	width: 25px;
	height: 25px;
	font-size: 11px;
	background: #f44336;
	border-radius: 15px;
}
</style>

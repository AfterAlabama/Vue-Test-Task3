<template>
	<p>{{ item.title }}</p>
</template>

<script>
export default {
	name: 'SingleItemTitle',
	inject: ['item'],
};
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

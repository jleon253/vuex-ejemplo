<template>
	<div id="app" class="container">
		<div class="col-12">
			<img
				alt="Vue logo"
				src="./assets/logo.png"
				class="img-fluid d-block mx-auto"
			/>
		</div>
		<div class="col-12">
		  <HelloWorld />
		</div>
	</div>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'

	export default {
		name: 'App',
		components: {
			HelloWorld,
		},
	}
</script>

<style>
	h1,
	h2,
	h3,
	h4,
	h5 {
		font-family: 'Roboto', sans-serif;
	}
	p,
	input {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>

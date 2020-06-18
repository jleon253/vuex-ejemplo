<template>
	<div class="hello">
		<h1 class="text-center">
			{{ $store.state.msgX }}
			<a href="https://vuex.vuejs.org/" target="_blank">
				<span class="material-icons">
					link
				</span>
			</a>
		</h1>
		<h4 class="text-center">Usuario: {{ $store.getters.getFullNameX }}</h4>
		<div class="row">
			<div class="col-12 col-lg-6 offset-lg-3">
				<form>
					<div class="form-group bmd-form-group">
						<label for="nombreAmigo" class="bmd-label-floating"
							>Nombre de nuevo amigo</label
						>
						<input
							type="text"
							name="nombreAmigo"
							id="nombreAmigo"
							class="form-control"
							v-model="amigo"
						/>
					</div>
					<div class="form-group bmd-form-group">
						<button
							type="button"
							class="btn btn-raised btn-success btn-block"
							@click="agregarAmigo"
						>
							Agregar
						</button>
					</div>
				</form>
			</div>
			<div class="col-12 col-lg-6 offset-lg-3">
				<h5>Lista de amigos</h5>
				<transition-group name="list" tag="p">
					<span
						class="list-item"
						v-for="(amigo, index) in $store.state.amigosX"
						:key="amigo"
					>
						{{ amigo }}
						<button
							type="button"
							class="btn btn-primary bmd-btn-icon"
							@click="$store.dispatch('delAmigoActionX', index)"
						>
							<i class="material-icons">delete</i>
						</button>
					</span>
				</transition-group>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				amigo: '',
			}
		},
		methods: {
			agregarAmigo() {
				this.$store.dispatch('addAmigoActionX', this.amigo)
				this.amigo = ''
			},
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.list-item {
		display: inline-block;
		margin-right: 10px;
	}
	.list-enter-active,
	.list-leave-active {
		transition: all 1s;
	}
	.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
		opacity: 0;
		transform: translateY(30px);
	}
</style>

<script lang="ts" setup>
import appHeader from "@framework/appHeader.vue"
import appFooter from "@framework/appFooter.vue"
</script>

<template>
	<div class="app-wrapper">
		<app-header />
		<router-view />
		<app-footer />
	</div>
</template>

<style lang="postcss" scoped>
.app-wrapper {
	@apply w-full h-full flex flex-col;
}
</style>

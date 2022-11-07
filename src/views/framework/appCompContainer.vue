<script lang="ts" setup>
import { defineProps, toRefs } from "vue"
const $props = defineProps({
	name: {
		type: String,
		default: "Unnamed Component",
	},
})

const { name } = toRefs($props)
</script>

<template>
	<div class="app-comp-container">
		<div class="wrapper">
			<div class="main">
				<div class="operations">
					<slot name="operations" />
				</div>
				<div class="content">
					<span class="details">
						<span class="name">{{ name }}</span>
					</span>
					<slot name="default" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.app-comp-container {
	@apply w-full h-full flex justify-center items-center;
}
.wrapper {
	@apply w-full h-full flex justify-center items-center;
}
.main {
	@apply w-full h-full flex flex-col;
}
.operations {
	@apply w-full h-16 flex justify-center items-center;
}
.content {
	@apply w-full h-full flex flex-col-reverse justify-center items-center px-8 py-12;
}

.details {
	@apply w-full h-16 flex justify-center items-center
	text-gray-500 dark:text-gray-400;
}

.name {
	@apply text-lg font-bold;
}
</style>

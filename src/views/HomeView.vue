<script lang="ts" setup>
import compsContainer from "@framework/appCompContainer.vue"
import darkModeSwitchVue from "@comps/darkModeSwitch.vue"

import { ref } from "vue"

const isDarkModeOpen = ref(false)
const isDarkModeSwitchDisabled = ref(false)

function toggleDarkMode(isDarkModeOpen: boolean) {
	let html = document.querySelector("html")
	if (isDarkModeOpen) html?.classList.add("dark")
	else html?.classList.remove("dark")
}
</script>

<template>
	<div class="view-home-wrapper">
		<compsContainer name="Dark-Mode-Switch">
			<darkModeSwitchVue
				v-model="isDarkModeOpen"
				:disabled="isDarkModeSwitchDisabled"
				@toggle-dark-mode="toggleDarkMode"
			/>
			<template #operations>
				<span class="details">
					<span class="prefix">Dark Mode：</span>
					<span class="status">{{ isDarkModeOpen ? "On" : "Off" }}</span>
				</span>
			</template>
		</compsContainer>
	</div>
</template>

<style lang="postcss" scoped>
.view-home-wrapper {
	@apply w-full h-full flex flex-col justify-center items-center
	bg-white dark:bg-slate-700
	transition-all;
}
.details {
	@apply w-full h-full flex justify-center items-center
	text-slate-900 dark:text-slate-100
	transition-all;
}
</style>

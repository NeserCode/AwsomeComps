<script lang="ts" setup>
import { watch, computed, defineProps, defineEmits, toRefs, ref } from "vue"
const $props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
})

const { modelValue, disabled } = toRefs($props)
const $emits = defineEmits(["update:modelValue", "toggle-dark-mode"])
const checked = ref(modelValue.value)
// update modelvalue when checked changed
watch(checked, (val) => {
	$emits("update:modelValue", val)
})
// update checked when modelvalue changed
watch(modelValue, (val) => {
	checked.value = val
})

// function get checked class
const getCheckedClass = computed((): string => (checked.value ? "checked" : ""))
// function get disabled class
const getDisabledClass = computed((): string =>
	disabled.value ? "disabled" : ""
)

// function to toggle dark mode
const toggleDarkMode = (): void => {
	if (disabled.value) return
	checked.value = !checked.value
	$emits("toggle-dark-mode", checked.value)
}
</script>

<template>
	<div class="dark-mode-switch">
		<div :class="['switch', getCheckedClass, getDisabledClass]">
			<div class="switch-button" @click="toggleDarkMode">
				<div class="switch-button-circle"></div>
				<span class="rest"></span>
				<span class="rest"></span>
				<span class="rest"></span>
				<span class="rest"></span>
				<span class="rest"></span>
			</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.dark-mode-switch {
	@apply w-full h-full flex justify-center items-center;
}
.switch {
	@apply w-full h-full flex justify-center items-center;
}
.switch-button {
	@apply relative w-16 h-8 flex items-center p-0.5 rounded-full border-2
  bg-slate-200 dark:bg-slate-700 border-gray-200 dark:border-gray-500
  transition-all;
}
.switch-button-circle {
	@apply w-6 h-6 rounded-full
  bg-orange-300 dark:bg-yellow-200
  translate-x-0 transition-all;
}

.switch.checked .switch-button .switch-button-circle {
	@apply translate-x-8;
}

.rest {
	@apply absolute inline-block w-0.5 h-0.5 rounded-full bg-gray-200 dark:bg-gray-500;
}
.switch .switch-button .rest:nth-child(2) {
	@apply w-3 left-1/2 dark:w-0.5  dark:left-0 
  bg-white dark:bg-yellow-200 dark:rounded-none dark:rotate-45
  transition-all translate-x-1 translate-y-0 dark:translate-x-4 dark:-translate-y-0.5;
}
.switch .switch-button .rest:nth-child(3) {
	@apply left-1/2 rounded-none dark:w-0.5  dark:left-0 
  bg-white dark:bg-yellow-200 dark:rotate-45
  transition-all translate-x-3 translate-y-0.5 dark:translate-x-2.5;
}
.switch .switch-button .rest:nth-child(4) {
	@apply w-3 left-1/2 dark:w-0.5  dark:left-0 
  bg-white dark:bg-yellow-200 dark:rotate-45 dark:rounded-none
  transition-all translate-x-2 translate-y-1 dark:translate-x-4 dark:translate-y-1.5;
}
.switch .switch-button .rest:nth-child(5) {
	@apply w-3 left-1/2 dark:w-2 dark:h-2
  bg-white dark:bg-gray-300
  transition-all translate-x-2 translate-y-1;
}
.switch .switch-button .rest:nth-child(6) {
	@apply w-3 left-1/2 dark:w-0.5
  bg-white dark:bg-gray-300
  transition-all translate-x-2 -translate-y-1;
}
</style>

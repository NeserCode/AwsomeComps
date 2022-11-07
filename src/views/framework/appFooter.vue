<script lang="ts" setup></script>

<template>
	<div class="app-footer-wrapper">
		<div class="app-footer-body">
			<span class="year">@2022-2023</span>
			<span class="copyright">
				<a href="https://github.com/NeserCode" target="_blank"
					>NeserCode@Github</a
				>
			</span>
			<span class="license">
				<a
					href="https://github.com/NeserCode/AwsomeComps/blob/main/LICENSE"
					target="_blank"
					>MIT License</a
				>
			</span>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.app-footer-wrapper {
	@apply w-full h-16 flex items-center bg-neutral-100
  shadow-sm border-t border-neutral-200
	dark:bg-slate-600 dark:border-neutral-400
	transition-all;
}
.app-footer-body {
	@apply w-full h-full flex justify-center items-center
	text-gray-700 dark:text-gray-300
	transition-all;
}
.year {
	@apply mr-2 text-sm font-light;
}
.copyright {
	@apply text-sm font-light underline;
}
.license {
	@apply ml-2 text-sm font-light underline;
}
</style>

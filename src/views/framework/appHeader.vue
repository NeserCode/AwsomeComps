<template>
	<div class="app-header-wrapper">
		<div class="app-header">
			<router-link to="/">
				<div class="app-header-left">
					<div class="app-header-logo">
						<img src="@/assets/logo.png" alt="logo" />
					</div>
					<div class="app-header-title">AwsomeComps/Vue</div>
				</div>
			</router-link>
			<div class="app-header-right">
				<div class="app-header-menu">
					<a
						href="http://github.com/NeserCode/AwsomeComps"
						target="_blank"
						class="github-link"
						>Github</a
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="postcss" scoped>
.app-header-wrapper {
	@apply w-full h-16 flex items-center shadow-sm border-b
	bg-neutral-100 dark:bg-slate-600 border-neutral-200 dark:border-neutral-400
	transition-all;
}
.app-header {
	@apply w-full h-full flex justify-between items-center
	text-gray-700 dark:text-gray-300
	transition-all;
}
.app-header-left {
	@apply flex items-center;
}
.app-header-logo {
	@apply w-8 h-8 m-4 mr-0;
}
.app-header-title {
	@apply ml-2 text-xl font-light;
}
.app-header-right {
	@apply flex items-center;
}
.app-header-menu {
	@apply flex items-center;
}
.github-link {
	@apply px-4 text-sm;
}
</style>

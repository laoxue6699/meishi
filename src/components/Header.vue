<template>
    <div>
        <header id="header" class="mui-bar" :class="{ 'mui-bar-nav': arrow }">
			<slot></slot>
			<h1 class="mui-title">{{title}}</h1>
		</header>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            arrow: String
            },
        data () {
            return {

            }
        }
    }
</script>

<style scoped>

</style>
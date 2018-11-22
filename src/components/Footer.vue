<template>
    <div>
        <div class="mui-bar mui-bar-tab">
			<a class="mui-tab-item" :class="{'mui-active': '/home'===$route.path}" @click="goTo('/home')">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" :class="{'mui-active': '/search'===$route.path}" @click="goTo('/search')">
				<span class="mui-icon mui-icon mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
			<a class="mui-tab-item" :class="{'mui-active': '/video'===$route.path}" @click="goTo('/video')">
				<span class="mui-icon mui-icon mui-icon-videocam"></span>
				<span class="mui-tab-label">视频</span>
			</a>
			<a class="mui-tab-item" :class="{'mui-active': '/profile'===$route.path}" @click="goTo('/profile')">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我</span>
			</a>
		</div>
    </div>
</template>

<script>
    name:'Footer'
    export default {
		methods: {
			goTo(path) {
				this.$router.replace(path)
			}
		}
        
	}
</script>

<style scoped>

</style>
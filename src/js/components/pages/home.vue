<template>
<div>
	<transition name="welcome-screen-fade">
		<div v-if="showWelcomeScreen" class="welcome-screen" key="welcome-screen">
			<div class="welcome-screen__logo font-01">My9</div>
		</div><!-- .welcome-screen -->
	</transition>
	<div v-if="!showWelcomeScreen" class="app app--home" key="app">
		<h1 class="logo font-01">My9</h1>
		<p v-if="items.length > 0" class="current-task" key="task">{{ items[0].text }}</p>
		<p v-else-if="!closedTasks" class="empty-tasks" key="empty">登録されているタスクはありません</p>
		<p v-else class="empty-tasks" key="all-done"><i class="fa fa-heart"></i> All Done!</p>
		<div class="theme">
			<p v-if="themeText.length > 0" class="dib">{{ themeText }}</p>
			<p v-else class="dib">ここに今週のテーマや今日の目標を追加できます。</p>
			<a href="#" @click.prevent="updateTheme" class="dib"><i class="fa fa-edit"></i> 編集</a>
		</div>
		<div class="app-action-buttons">
			<a href="#" @click.prevent="closeCurrentTask" class="app-action-button" :class="{'is-disabled': items.length < 1}" title="現在のタスクを完了にする"><i class="fa fa-check"></i></a>
		</div>
		<div class="app-menu-buttons">
			<div class="app-menu-buttons__item">
				<router-link to="./add" class="app-menu-button" title="タスクを追加する"><i class="fa fa-plus"></i></router-link>
				<transition name="tip-appear">
					<p v-if="shouldShowTip" class="app-menu-buttons__item__tip">タスクを追加しよう！</p>
				</transition>
			</div>
			<router-link to="./list" class="app-menu-buttons__item app-menu-button" title="タスクの一覧を見る"><i class="fa fa-list"></i></router-link>
		</div>
	</div><!-- .app -->
</div>
</template>

<style scoped>
.welcome-screen-fade-leave-active{
	transition: opacity 0.8s ease;
}

.welcome-screen-fade-leave-to{
	opacity: 0;
}

.tip-appear-enter-active,
.tip-appear-leave-active{
	transition: opacity 0.8s ease, margin-right 0.8s ease;
}

.tip-appear-enter,
.tip-appear-leave-to{
	opacity: 0;
	margin-right: -20px;
}
</style>

<script>
const data = {
	showWelcomeScreen: window.payload.showWelcomeScreen,
	closedTasks: 0,
	shouldShowTip: false,
	isTipShown: false
};
const welcomeScreenDuration = 800;
if( window.payload.showWelcomeScreen ){
	setTimeout(() => {
		data.showWelcomeScreen = false;
	}, welcomeScreenDuration);
}
export default {
	data: function(){
		return data;
	},
	computed: {
		items: {
			get(){
				return this.$store.state.tasks;
			},
			set(value){
				this.$store.commit("updateTasks", value);
			}
		},
		themeText: function(){
			return this.$store.state.theme;
		}
	},
	mounted: function(){
		if( this.$store.state.tasks.length > 0
			|| this.closedTasks > 0
			|| this.isTipShown
		) return;
		let delay = ( this.showWelcomeScreen ) ? welcomeScreenDuration : 0;
		setTimeout(() => {
			data.shouldShowTip = true;
		}, 1600 + delay);
		setTimeout(() => {
			data.shouldShowTip = false;
		}, 7600 + delay);
		this.isTipShown = true;
	},
	methods: {
		closeCurrentTask: function(){
			if( this.items.length < 1 ) return;
			const items = JSON.parse(JSON.stringify(this.items));
			items.shift();
			this.items = items;
			this.closedTasks++;
		},
		updateTheme: function(){
			const newTheme = window.prompt("テーマを変更", this.themeText);
			if( typeof newTheme !== "string" ) return;
			this.$store.commit("updateTheme", newTheme);
		}
	}
};
</script>

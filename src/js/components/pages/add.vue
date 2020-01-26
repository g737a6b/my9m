<template>
<div class="app">
	<div class="logo font-01"><router-link to="./"><i class="fa fa-angle-left color-lighter-gray fz30"></i> My9</router-link></div>
	<p v-if="statusSuccess" class="status-label status-label--success mb10"><i class="fa fa-check"></i> {{ statusSuccess }} <a href="#" @click.prevent="resetStatus" class="status-label__close"><i class="fa fa-close"></i></a></p>
	<form action="#" @submit.prevent="addNewTask">
		<input v-model="newTask" @keyup="resetStatusOnKeyUp" placeholder="タスクを入力してください" class="input-01" ref="input" />
		<button type="button" @click="addNewTask" class="button-01 mt10" :class="{'is-disabled': !newTask.length}"><i class="fa fa-plus"></i> 追加する</button>
	</form>
</div>
</template>

<script>
const data = {
	newTask: "",
	statusSuccess: ""
};
export default {
	data: function(){
		return data;
	},
	mounted: function(){
		this.statusSuccess = "";
		this.$refs.input.focus();
	},
	methods: {
		addNewTask: function(){
			let newTask = this.newTask.trim();
			if( newTask.length < 1 ) return;
			this.$store.commit("addTask", {
				text: newTask,
				created: Date.now()
			});
			this.newTask = "";
			this.statusSuccess = "タスクを追加しました！";
		},
		resetStatusOnKeyUp: function(){
			if( this.newTask.length < 1 ) return;
			this.resetStatus();
		},
		resetStatus: function(){
			this.statusSuccess = "";
		}
	}
};
</script>

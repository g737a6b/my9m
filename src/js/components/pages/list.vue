<template>
<div class="app">
	<div class="logo font-01"><router-link to="./"><i class="fa fa-angle-left color-lighter-gray fz30"></i> My9</router-link></div>
	<div v-if="items.length" class="task-list">
		<draggable v-model="items">
			<div v-for="(item, index) in items" :key="item.created" class="task-list__item task-list-item">
				<span>{{ item.text }}</span>
				<a href="#" @click.prevent="renameTask(index)" class="task-list-item__rename"><i class="fa fa-edit"></i></a>
				<a href="#" @click.prevent="removeTask(index)" class="task-list-item__remove"><i class="fa fa-close"></i></a>
			</div>
		</draggable>
	</div>
	<p v-else class="empty-tasks">登録されているタスクはありません</p>
</div>
</template>

<style scoped>
.sortable-chosen{
	background-color: #ccc;
}
</style>

<script>
import draggable from "vuedraggable";
export default {
	computed: {
		items: {
			get(){
				return this.$store.state.tasks;
			},
			set(value){
				this.$store.commit("updateTasks", value);
			}
		}
	},
	components: {
		draggable
	},
	methods: {
		renameTask: function(index){
			const name = window.prompt("タスクのタイトルを変更", this.items[index].text);
			if( typeof name !== "string" ) return;
			if( name.trim() === "" ){
				return this.removeTask(index);
			}
			const items = JSON.parse(JSON.stringify(this.items));
			items[index].text = name.trim();
			this.items = items;
		},
		removeTask: function(index){
			const items = JSON.parse(JSON.stringify(this.items));
			items.splice(index, 1);
			this.items = items;
		}
	}
};
</script>

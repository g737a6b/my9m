<template>
<div class="app">
	<div class="logo font-01"><router-link to="./"><i class="fa fa-angle-left color-lighter-gray fz30"></i> My9</router-link></div>
	<div v-if="items.length" class="task-list">
		<draggable v-model="items" @end="updateOrder">
			<div v-for="(item, index) in items" :key="item.created" class="task-list__item task-list-item">{{item.text}} <a href="#" @click.prevent="removeTask(index)" class="task-list-item__close"><i class="fa fa-close"></i></a></div>
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
let data = {};
export default {
	props: ["tasks"],
	data: function(){
		return Object.assign(data, {items: this.tasks});
	},
	components: {
		draggable
	},
	methods: {
		removeTask: function(index){
			this.items.splice(index, 1);
			this.$emit("update-storage", this.items);
		},
		updateOrder: function(){
			this.$emit("update-storage", this.items);
		}
	}
};
</script>

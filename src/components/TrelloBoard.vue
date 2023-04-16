<template>
  <div>
    <header>my Trello</header>
    <main>
      <p class="info-line">All: 0 tasks</p>

      <div class="list-index">
        <TaskList
          v-for="(list,index) in lists"
          :key="list.id"
          :title="list.title"
          :listIndex="index"
        />
        <ListAdd />
      </div>
    </main>
  </div>
</template>

<script>
import ListAdd from "./ListAdd.vue";
import TaskList from "./TaskList.vue";
import { mapState } from "vuex";
export default {
  components: {
    ListAdd,
    TaskList,
  },
  computed:{
    ...mapState([
      'lists'
    ])
  }
};
</script>

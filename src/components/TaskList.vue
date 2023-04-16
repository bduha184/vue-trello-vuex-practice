<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <div class="deletelist" @click="deleteList">×</div>
    </div>
    <CardAdd :listIndex="listIndex"/>
  </div>
</template>

<script>
import CardAdd from "./CardAdd.vue";
export default {
  components: {
    CardAdd,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    listIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    deleteList() {
      if (confirm("本当に削除しますか？")) {
        this.$store.dispatch("deleteList", { listIndex: this.listIndex });
      }
    },
  },
};
</script>

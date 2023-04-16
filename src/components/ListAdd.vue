<template>
  <form
    @submit.prevent="addList"
    :class="classList"
  >
    <input
      v-model="title"
      type="text"
      class="text-input"
      placeholder="Add New List"
      @focusin="startEdit"
      @focusout="endEdit"
    />
    <button
    class="add-button"
    v-if="isEdit || titleExists"
    >
    Add
  </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      isEdit: false,
    };
  },
  methods: {
    addList() {
      this.$store.dispatch("addList", { title: this.title });
    },
    startEdit() {
      this.isEdit = true;
    },
    endEdit() {
      this.isEdit = false;
    },
  },
  computed:{
    classList(){
      const classList = ['addlist'];
      if(this.isEdit){
        classList.push('active')
      }
      if(this.titleExists){
        classList.push('addable')
      }
      return classList
    },
    titleExists(){
      return this.title.length > 0
    }
  }
};
</script>

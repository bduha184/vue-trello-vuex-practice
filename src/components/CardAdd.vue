<template>
  <form
    @submit.prevent="addCardToList"
    class="addcard"
    :class="{active:this.isEdit,addable:this.bodyExists}"
  >
    <input
      v-model="body"
      type="text"
      class="text-input"
      placeholder="Add New Card"
      @focusin="startEdit"
      @focusout="endEdit"
    />
    <button
    class="add-button"
    v-if="isEdit || bodyExists"
    >
    Add
  </button>
  </form>
</template>

<script>
export default {
  props:{
    listIndex:{
      type:Number,
      required:true,
    }
  },
  data() {
    return {
      body: "",
      isEdit:false
    };
  },
  methods: {
    addCardToList() {
      this.$store.dispatch("addCardToList", { body: this.body,listIndex:this.listIndex });
    },
    startEdit(){
      this.isEdit=true;
    },
    endEdit(){
      this.isEdit=false;
    },
  },
  computed:{
    bodyExists(){
      return this.body.length > 0
    }
  }

};
</script>

<template>

  <form
@submit.prevent="addList"
class="addlist" 
  >
  <input
  v-model="title"
  type="text"
  class="text-input"
  placeholder="Add New List"
  >
  <button class="add-button">Add</button>
  </form>
  </template>

  <script>
  export default{
    data(){
      return {
        title:''
      }
    },
    methods:{
      addList(){
        this.$store.dispatch('addList',{title:this.title})
      }
    }

  }
  </script>

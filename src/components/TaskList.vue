<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <div
      class="deletelist"
      @click="deleteList"
      >
      ×
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      required:true
    },
    listIndex:{
      type:Number,
      required:true
    },
  },
  methods:{
    deleteList(){
      if(confirm('本当に削除しますか？')){
        this.$store.dispatch('deleteList',{listIndex:this.listIndex})
      }
    }
  }
};
</script>

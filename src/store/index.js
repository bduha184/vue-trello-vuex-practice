import { createStore } from 'vuex'

const savedLists = localStorage.getItem('trello-lists');

const store = createStore({
  state: {
    lists:savedLists ? JSON.parse(savedLists):[
      {
        title: 'Backlog',
        cards: [
          { body: 'English' },
          { body: 'Mathematics' },
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science' }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ],
  },
  getters: {
  },
  mutations: {
    addList(state,payload){
      state.lists.push({title:payload.title,cards:[]})
    },
    deleteList(state,payload){
      state.lists.splice(payload.listIndex,1)
    },
  },
  actions: {
    addList(context,payload){
      context.commit('addList',payload)
    },
    deleteList(context,payload){
      context.commit('deleteList',payload)
    },
  },
  // getters: {
  // }
})

store.subscribe((mutation,state)=> {
  localStorage.setItem('trello-lists',JSON.stringify(state.lists))
})

export default store

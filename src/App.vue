<template>
  <div class="wrapper">
    <Header @search="search"/>
    <Notes :notes="filteredNotes" @delNote="delNote" @changeNote="changeNote"/>
    <AddNote @click="modal = true" />
    <Modal 
      :edit="edit" 
      :editNote="editNote" 
      @close="close" 
      v-if="modal" 
      @addNote="addNote"
      @saveNote="saveNote"
    />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Notes from "./components/Notes.vue";
import AddNote from "@/components/AddNote.vue";
import Modal from "@/components/Modal.vue";

let newId = 1
export default {
  components: {
    Header,
    Notes,
    AddNote,
    Modal,
  },
  data() {
    return {
      notes: [
        {
          id: newId++,
          title: "Vue",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat culpa, labore et facere exercitationem accusantium libero soluta rem sit.",
        },
        {
          id: newId++,
          title: "Angular",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat culpa, labore et facere exercitationem accusantium libero soluta rem sit.",
        },
        {
          id: newId++,
          title: "React",
          date: new Date().toLocaleDateString(),
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat culpa, labore et facere exercitationem accusantium libero soluta rem sit.",
        }
      ],
      modal: false,
      editNote: null,
      edit: false,
      filteredNotes: null
    };
  },
  methods: {
    close() {
      // this.modal = false;
      this.edit = this.modal = false,
      this.editNote = null
    },
    addNote(note) {
      this.notes.push({
        id: newId++,
        title: note.title,
        text: note.text,
        date: new Date().toLocaleDateString(),
      });
      this.close();
    },
    delNote(noteId) {
      this.notes.forEach((el, index) => {
        if(noteId == el.id){
          this.notes.splice(index, 1)
        }
      })
    },
    changeNote(id) {
      let pickedNote = null
      this.notes.forEach((el) => {
        if(el.id == id){
          pickedNote = el
        }
      })

      this.editNote = pickedNote
      this.edit = this.modal = true
    },
    saveNote(newNote) {
      this.notes.forEach((el, index) => {
        if(el.id == newNote.id){
          el.title = newNote.title
          el.text = newNote.text
          el.date = newNote.date
        }
      })
    },
    search(value) {
      this.filteredNotes = this.notes.filter(el => {
        return el.title.toLowerCase().includes(value.toLowerCase())
      })
      console.log(this.filteredNotes);    
    }

  },

  watch: {
    notes: {
      handler(value) {
        localStorage.setItem('todoDate', JSON.stringify(this.notes))
      },
      deep: true
    }
  },

  created() {
    if(localStorage.notes){
      let localTodo = JSON.parse(localStorage.todoDate)
      this.notes = localTodo
      newId = localTodo[localTodo.length-1].id + 1
    }else{
      localStorage.todoDate = JSON.stringify(this.notes)
    }
    this.filteredNotes = this.notes
    localStorage.lang = localStorage.lang == undefined ? 'ru' : localStorage.lang
  }
}
</script>

<style lang="scss" scoped></style>

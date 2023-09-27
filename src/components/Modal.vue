<template>
    <div class="modal" @click="$emit('close')">
        <div class="modal__window" @click.stop>
            <h2 class="modal__title">{{ edit ? "Eslatma o'zgartirish" : "Eslatma qo’shish" }}</h2>
            <form action="" class="modal__form">
                <label for="">
                    <span>Title</span>
                    <input type="text" placeholder="Title" v-model="title">
                </label>
                <label for="">
                    <span>Text</span>
                    <input type="text" placeholder="Text" v-model="text">
                </label>
            </form>
            <div class="modal__buttons">
                <button class="modal__btn del" @click="$emit('close')">Bekor qilish</button>
                <button class="modal__btn edit" @click="close" v-if="!edit">Qo’shish</button>
                <button class="modal__btn edit" @click="saveNote()" v-else>O'zgartirish</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: null,
                text: null
            }
        },
        methods: {
            addNote() {
                let note = {
                    title: this.title,
                    text: this.text
                }
                this.$emit('addNote', note)
                this.close()
            },
            saveNote() {
                let changedNote = {
                    id: this.editNote.id,
                    title: this.title,
                    text: this.text,
                    date: new Date().toLocaleDateString()
                }
                this.$emit('saveNote', changedNote)
                this.close()
            },
            close() {
                this.$emit('close')
            }
        },
        props: {
            edit: Boolean,
            editNote: Object
        },
        mounted() {
            if (this.editNote) {
                this.title = this.editNote.title,
                this.text = this.editNote.text
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
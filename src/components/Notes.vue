<template>
    <div class="notes container">
        <div class="notes__top">
            <h2 class="notes__title">Barcha eslatmalar</h2>
            <button class="notes__btn" @click="grid = !grid">
                <img src="@/assets/images/royxat.svg" alt="" v-if="grid" />
                <img src="@/assets/images/grid.svg" alt="" v-else />
                <span>{{ grid ? "Ro'yxat" : "Setka" }}</span>
            </button>
        </div>
        <div class="notes__list" :class="{ active: grid }">
            <NotesItem v-for="(note, index) in notes" :key="index" :note="note" :active="active" @delNote="$emit('delNote', $event)" @changeNote="$emit('changeNote', $event)"/>
        </div>
    </div>
</template>

<script>
import NotesItem from "@/components/NotesItem.vue";
export default {
    components: {
        NotesItem,
    },
    data() {
        return {
            grid: false,
            // active: false
        };
    },
    props: {
        notes: Array,
    },
};
</script>

<style lang="scss" scoped></style>

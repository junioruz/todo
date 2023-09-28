<template>
    <header class="header">
        <nav class="nav">
            <Transition name="header__item">
                <div class="header__item" v-show="header">
                <button class="header__lang" @click="changeLang">
                    {{ lang }}
                </button>
                <h1 class="header__title">{{ $t('appbartitle') }}</h1>
                <button class="header__search" @click="header = false">
                    <img src="@/assets/images/search.svg" alt="">
                </button>
            </div>
            </Transition>
            <Transition name="header__form">
                <div class="header__form" v-show = !header>
                <button class="header__back" @click="header = true">
                    <img src="@/assets/images/back.svg" alt="">
                </button>
                <input v-model="search" type="text" class="header__input" :placeholder="$t('appbarseacrch')">
                <button class="header__close">
                    <img src="@/assets/images/exit.svg" alt="">
                </button>
            </div>
</Transition>
        </nav>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                header: true,
                search: null,
                lang: null
            }
        },
        watch: {
            search(newvalue) {
                this.$emit('search', newvalue)
            }
        },
        methods: {
            changeLang() {
                this.$i18n.locale = this.lang = localStorage.lang = localStorage.lang == 'ru' ? 'uz' : 'ru'
            }
        },
        created() {
            this.lang = localStorage.lang
        },
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <hr>
        <h2>Header Component</h2>
        <div v-if="headeruser.name">name: {{headeruser.name}}</div>
        <div v-if="headeruser.age">age: {{headeruser.age}}</div>
        <hr>
    </div>
</template>

<script>
export default {
    props: ['user'],
    data() {
        return {
            info: 'this is header',
            headeruser: {}
        }
    },
    mounted() {
        this.headeruser = this.user
    }
}
</script>

<style>

</style>



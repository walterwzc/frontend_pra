<template>
    <div>
        <hr>
        <h2>Body {message}</h2>
        <div>name: {{info.name}}</div>
        <div>age: {{info.age}}</div>
        <div>sex: {{info.sex}}</div>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'MainBody',
    data() {
        return {
            message: 'hello',
            info: {}
        }
    },
    created() {
        const _this = this;
        setTimeout(function() {
            _this.info = {
                name: 'aaaaa',
                age: 21
            };
        }, 2000);
        setTimeout(function() {
            _this.info = {
                sex: 'male'
            };
        }, 3000);
    }
}
</script>

<style>

</style>



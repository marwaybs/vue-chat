<template> 
    <div>
        <input v-model='message' />
        <button v-on:click='sendMessage'>Send</button>
    </div>
</template>

<script>
export default {
    name: "InputMessage",
    data: function () {
        return {
        message: '',
        }
    },
    methods: {
        sendMessage () {
            this.$emit('send-message', this.message);
            this.message = '';
        }
    }
}
</script>

<style>

</style>
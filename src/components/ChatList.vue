<template>
    <div>
        <div class="message-container" v-for="message in messages" :key="message.key">
            <span class="user">{{`${message.user}:`}}</span>
            <span class="message">{{message.message}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChatList',
    props: {
        messages: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style>

    .user {
        padding: 10px;
        color: blue;
    }
    .message-container {
        padding: 10px;
    }

</style>
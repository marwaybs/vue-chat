<template>
  <div>
  <p v-on:click="increment">{{count}}</p>
  <ChatList :messages="messages" />
  <InputMessage @send-message="newMessage" />
  </div>
</template>

<script>
import ChatList from './ChatList.vue';
import InputMessage from './InputMessage';

export default {
    name: 'ChatContainer',
    data: function () {
        return {
        count: 100,
        messages: [
            {
                key: 0,
                user: "David",
                message: "Hello!"
            },
            {
                key: 1,
                user: "Karen",
                message: "Hello to you too!"
            },
            {
                key: 2,
                user: "David",
                message: "Blah"
            }
        ]
        }
    },
    methods: {
        increment () {
            this.count++
        },
        newMessage (message) {
            this.messages.push (
                {
                    key: this.messages.length, 
                    user: 'David',
                    message: message,
            })
        }
    },
    components: {
        ChatList,
        InputMessage
    }

}
</script>

<style scoped>

</style>

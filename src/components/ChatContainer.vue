/*eslint no-console: "error"*/
<template>
  <div>
    <p v-on:click="increment">{{ count }}</p>
    <ChatList :messages="messages" />
    <InputMessage @send-message="newMessage" />
    <p>Users:</p>
    <div v-for="user in users" :key="user.key">
      <span class="user">{{ `${user.name}:` }}</span>
    </div>
  </div>
</template>

<script>
import ChatList from "./ChatList.vue";
import InputMessage from "./InputMessage";
import { repositoryFactory } from "./../RepositoryFactory";
const UsersRepository = repositoryFactory.get("users");

export default {
  name: "ChatContainer",
  data: function() {
    return {
      count: 100,
      users: [],
      isLoading: false,
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
    };
  },
  created() {
    this.fetch();
    this.increment();
  },
  methods: {
    async fetch() {
      this.loading = true;
      const { data } = await UsersRepository.get();
      this.isLoading = false;
      this.users = data;
    },
    increment() {
      this.count++;
    },
    newMessage(message) {
      this.messages.push({
        key: this.messages.length,
        user: "David",
        message: message
      });
    }
  },
  components: {
    ChatList,
    InputMessage
  }
};
</script>

<style scoped></style>

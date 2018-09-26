<template>
  <div>
    <h2>Редактирование пользователя</h2>

    <user-form 
      v-if="user"
      :user="user" />
    <div v-else>Пользователей нет :(</div>
  </div>
</template>

<script>
import axios from "axios";
import UserForm from "@/components/UserForm.vue";

export default {
  name: "EditUser",
  components: {
    UserForm
  },
  data: () => ({
    user: null
  }),
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios
        .get("http://localhost:3004/users")
        .then(response => response.data)
        .then(users => {
          this.user = users[0];
        })
        .catch(error => console.log(`woops this is error: ${error}`));
    }
  }
};
</script>

<style lang="scss">
</style>

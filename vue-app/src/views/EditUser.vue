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
    user: null,
    usersLength: 0
  }),
  mounted() {
    this.loadData();
  },
  methods: {
    randomUsers(max) {
      return Math.round(Math.random() * max);
    },
    loadData() {
      axios
        .get("http://localhost:3004/users")
        .then(response => {
          this.usersLength = response.data.length;

          return response.data;
        })
        .then(users => {
          this.user = users[this.randomUsers(this.usersLength)];
        })
        .catch(error => console.log(`woops this is error: ${error}`));
    }
  }
};
</script>

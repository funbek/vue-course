<template>
  <div>
    <h1>Список пользователей</h1>
    <div v-if="!users">
      Список пользователей пуст
    </div>
    <user-list 
      v-else 
      :users="users" />
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";
import axios from "axios";

export default {
  name: "UsersList",
  components: {
    UserList
  },
  data: () => ({
    users: []
  }),
  mounted() {
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      axios
        .get("http://localhost:3004/users")
        .then(response => response.data)
        .then(users => {
          this.users = users;
        })
        .catch(error => console.log(`woops this is error: ${error}`));
    }
  }
};
</script>

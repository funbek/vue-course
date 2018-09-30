<template>
  <div>
    <h2>Редактирование пользователя {{ id }}</h2>

    <user-form 
      v-if="user"
      :user="user"
      @input="value => user = value" />
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
    url: "http://localhost:3004/users"
  }),
  computed: {
    id() {
      return this.$route.params.id;
    },
    userUrl() {
      return `${this.url}/${this.id}`;
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios
        .get(this.userUrl)
        .then(response => response.data)
        .then(users => {
          this.user = users;
        })
        .catch(error => console.log(`woops this is error: ${error}`));
    }
  }
};
</script>

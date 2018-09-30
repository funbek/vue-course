<template>
  <div>
    <h2>Добавление пользователя</h2>

    <user-form 
      v-if="user"
      :user="user"
      @input="value => user = value" />
    <div v-else>Пользователей нет :(</div>
  </div>
</template>

<script>
// import axios from "axios";
import UserForm from "@/components/UserForm.vue";

const emptyObj = {
  id: 0,
  isActive: false,
  balance: "",
  picture: "",
  age: 0,
  accessLevel: "",
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  address: "",
  about: "",
  registered: ""
};
export default {
  name: "AddUser",
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
      this.user = Object.assign({}, emptyObj);
    }
  }
};
</script>

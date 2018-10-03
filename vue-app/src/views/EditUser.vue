<template>
  <div>
    <h2>Редактирование пользователя {{ id }}</h2>

    <user-form 
      v-if="user"
      :user="user"
      @input="value => user = value"
    >
      <div
        slot="buttons">
        <button
          class="btn btn-danger"
          @click="showRemovePopup"
        >
          Удалить пользователя
        </button>
      </div>
    </user-form>
    <div v-else>Пользователей нет :(</div>

    <template v-if="popupShow">
      <div class="popup-shadow" />
      <div
        class="popup"
      >
        <h2>Точно, точно удалить?</h2>

        <button
          class="btn btn-danger"
          @click="removeUser"
        >
          Ага
        </button>
        <button
          class="btn btn-primary"
          @click="closePopup"
        >
          Неа
        </button>
      </div>
    </template>
    
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
    url: "http://localhost:3004/users",
    popupShow: false
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
    },
    showRemovePopup() {
      this.popupShow = true;
    },
    removeUser() {
      axios.delete(this.userUrl).then(() => {
        this.$router.push({ path: "/users" });
      });
    },
    closePopup() {
      this.popupShow = false;
      return;
    }
  }
};
</script>

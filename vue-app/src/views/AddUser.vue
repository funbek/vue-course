<template>
  <div>
    <h2>Добавление пользователя</h2>

    <user-form
      v-model="user"
    >
      <div slot="buttons">
        <button
          type="button"
          class="btn btn-success"
          @click="save"
        >
          Добавить пользователя
        </button>
      </div>
    </user-form>

    <template v-if="popupShow">
      <div class="popup-shadow" />
      <div
        class="popup"
      >
        <h2>Поздравляем, пользователь добавлен</h2>

        <button
          class="btn btn-success"
          @click="agreePopup"
        >
          Ok
        </button>
      </div>
    </template>
  </div>
</template>

<script>
// import axios from "axios";
import UserForm from "@/components/UserForm.vue";
import axios from "axios";

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
    user: emptyObj,
    url: "http://localhost:3004/users",
    popupShow: false
  }),
  methods: {
    save() {
      axios
        .post(this.url, this.user)
        .then(() => {
          this.popupShow = true;
        })
        .catch(err => {
          console.log("this is error: " + err);
        });
    },
    agreePopup() {
      this.$router.push({ path: "/users" });
    }
  }
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  z-index: 2;
  width: 600px;
  height: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  top: 50%;
  left: 50%;
  background: #fff;
  transform: translate(-50%, -50%);
}
.popup-shadow {
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}
</style>

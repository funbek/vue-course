<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input
        v-model="localUser.firstName"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input
        v-model="localUser.lastName"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>Email</label>
      <input
        v-model="localUser.email"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>Url картинки</label>
      <input
        v-model="localUser.picture"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>Возраст</label>
      <input
        v-model="localUser.age"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>Активный</label>
      <input
        v-model="localUser.isActive"
        type="checkbox"
        class="checkbox-inline" >
    </div>

    <div class="form-group">
      <label>Баланс</label>
      <input
        v-model="localUser.balance"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>Телефон</label>
      <input
        v-model="localUser.phone"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>Уровень доступа</label>
      <select
        v-model="localUser.accessLevel"
        class="form-control"
      >
        <option
          v-for="item in accessList"
          :key="item"
          :value="item"
        >
          {{ item }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input
        v-model="localUser.address"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>Компания</label>
      <input
        v-model="localUser.company"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>О пользователе</label>
      <input
        v-model="localUser.about"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>Дата регистрации</label>
      <input
        v-model="localUser.registered"
        type="text"
        class="form-control" >
    </div>

    <slot name="buttons" />

    <div>
      <pre>{{ localUser }}</pre>
    </div>

  </div>
</template>

<script>
export default {
  name: "UserForm",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localUser: null,
    accessList: ["user", "admin", "guest"]
  }),
  watch: {
    localUser: {
      deep: true,
      handler() {
        this.$emit("input", this.localUser);
      }
    }
  },
  created() {
    this.localUser = Object.assign({}, this.user);
  }
};
</script>

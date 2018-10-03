<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input
        v-model="user.firstName"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input
        v-model="user.lastName"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>Email</label>
      <input
        v-model="user.email"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>Url картинки</label>
      <input
        v-model="user.picture"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>Возраст</label>
      <input
        v-model="user.age"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>Активный</label>
      <input
        v-model="user.isActive"
        type="checkbox"
        class="checkbox-inline" >
    </div>

    <div class="form-group">
      <label>Баланс</label>
      <input
        v-model="user.balance"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>Телефон</label>
      <input
        v-model="user.phone"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>Уровень доступа</label>
      <select
        v-model="user.accessLevel"
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
        v-model="user.address"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>Компания</label>
      <input
        v-model="user.company"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>О пользователе</label>
      <input
        v-model="user.about"
        type="text"
        class="form-control" >
    </div>

    <div class="form-group">
      <label>Дата регистрации</label>
      <input
        v-model="user.registered"
        type="text"
        class="form-control" >
    </div>

    <slot name="buttons" />

    <div>
      <pre>{{ user }}</pre>
    </div>

  </div>
</template>

<script>
export default {
  name: "UserForm",
  model: {
    prop: "user"
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    accessList: ["user", "admin", "guest"]
  })
};
</script>

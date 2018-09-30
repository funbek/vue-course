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

    <div>
      <pre>{{ user }}</pre>
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
  }
};
</script>

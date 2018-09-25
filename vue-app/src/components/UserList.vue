<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>
            #
          </th>
          <th>
            Имя
          </th>
          <th>
            Фамилия
          </th>
          <th>
            Активин
          </th>
          <th>
            Баланс
          </th>
          <th>
            E-mail
          </th>
          <th>
            Телефон
          </th>
          <th>
            Зарегистрирован
          </th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="user in users" 
          :key="user.id">
          <td>#{{ user.id }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.isActive }}</td>
          <td>{{ user.balance }}</td>
          <td>{{ user.email }}</td>
          <td class="table__phone">{{ user.phone }}</td>
          <td>{{ user.registered }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="8">
            <b>Пользователей: {{ total }}</b>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
    
</template>

<script>
export default {
  name: "UserList",
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    total() {
      return this.users.length;
    }
  }
};
</script>

<style scoped lang="scss">
  .table {
    &__phone {
      white-space: nowrap;
    }
  }
</style>

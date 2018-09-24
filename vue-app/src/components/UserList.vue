<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>
            First Name
          </th>
          <th>
            Last Name
          </th>
          <th>
            is Active?
          </th>
          <th>
            Balance
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{user.firstName}}</td>
          <td>{{user.lastName}}</td>
          <td>{{user.isActive}}</td>
          <td>{{user.balance}}</td>
        </tr>
      </tbody>
    </table>
  </div>
    
</template>

<script>
export default {
  name: "UserList",
  props: {
    users: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
</style>

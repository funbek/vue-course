<template>
    <div>
        <h1>Список пользователей</h1>
        <div v-if="!users">
            Список пользователей пуст
        </div>
        <user-list v-else :users="users" />
    </div>
</template>

<script>
import UserList from "@/components/UserList.vue";

export default {
  name: "UsersList",
  components: {
    UserList
  }
};
</script>
<style lang="scss">
</style>

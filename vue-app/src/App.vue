<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" class="nav-item active" to="/">
            <a class="nav-link">Главная</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/users">
            <a class="nav-link">Добавить пользователя</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/add-users">
            <a class="nav-link">Создать пользователя</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <main class="container">
      <div class="starter-template">
        <router-view/>
      </div>
    </main>
      
  </div>
</template>

<style lang="scss">
body {
  padding-top: 100px;
}
</style>

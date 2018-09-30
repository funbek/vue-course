<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div 
        id="navbarsExampleDefault" 
        class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link 
            tag="li" 
            exact 
            class="nav-item" 
            to="/">
            <a class="nav-link">Главная</a>
          </router-link>
          <router-link 
            tag="li" 
            class="nav-item" 
            to="/users">
            <a class="nav-link">Список пользователей</a>
          </router-link>
          <router-link 
            tag="li" 
            class="nav-item" 
            to="/add-user">
            <a class="nav-link">Добавить пользователя</a>
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

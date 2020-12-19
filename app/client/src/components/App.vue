<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #039BE5;">
      <div class="container-fluid">
        <!--
        <a class="navbar-brand" href="#">Software Dev.</a>
        -->
        <a class="navbar-brand" href="#">
          <img src="images/software-dev.png" alt="" width="100px">
        </a>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/" exact>Welcome</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/sprint0">Sprint 0</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/sprint1">Sprint 1</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/sprint2">Sprint 2</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/sprint3">Sprint 3</router-link>
            </li>
            <!--
            <li class="nav-item">
              <router-link class="nav-link" to="/!@#$%">Sprint 3</router-link>
            </li>
            -->
          </ul>
        </div>
      </div>
    </nav>
    <div id="app" class="container">
      <router-view class="mt-5"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<template>
  <nav class="wrraper navbar">
    <div class="nav-links">
      <a class="logo" href="#"><img src="../assets/images/logo.svg" alt=""></a>
      <a class="nav-item" href="#">Features</a>
      <a class="nav-item" href="#">Pricing</a>
      <a class="nav-item" href="#">Resources</a>
    </div>
    <div class="nav-actions">
      <button class="login">Login</button>
      <button class="sign-up">Sign up</button>
      <button class="menu"><img src="../assets/images/icon-bars.svg" alt=""></button>
    </div>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
.navbar {
  display: inline-flex;
  margin-top: 60px;
  margin-bottom: 60px;
  width: calc(100% - 18vw);
  font-size: 16px;

  @include respond(big-phone) {    
    width: calc(100% - 12vw);
    margin-top: 30px;
    margin-bottom: 40px;
  }

  & .nav-links {
    flex: 1;
    display: inline-flex;
  }
  
  & .logo {
    margin-right: 20px;

    @include respond(big-phone) {
      width: 30vw;
    }
  }
  
  & .nav-item {
    color: $grayish-violet;
    margin: 4px 20px;
    font-size: 15px;

    @include respond(tab-port) {
      display: none;
    }
  }
  
  & .nav-actions {
    text-align: right;
  }
  
  & .login {
    background: transparent;
    color: $grayish-violet;
    padding: 7px 20px;
    font-size: 15px;

    @include respond(tab-port) {
      display: none;
    }
  }
  
  & .sign-up {
    background: $cyan;
    color: white;
    padding: 7px 20px;
    border-radius: 20px;
    font-size: 15px;

    @include respond(tab-port) {
      display: none;
    }

    &:hover {
      background-color: #85eaea;
    }
  }

  & .menu {
    display: none;

    @include respond(tab-port) {
      display: block;
      background-color: transparent;
      margin-right: 0;
    }
  }
}
</style>

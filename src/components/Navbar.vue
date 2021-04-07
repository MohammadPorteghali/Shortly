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
  width: calc(100% - 20vw);
  font-size: 16px;

  & .nav-links {
    flex: 0.8;
    display: inline-flex;
  }
  
  & .logo {
    margin-right: 20px;
  }
  
  & .nav-item {
    color: $grayish-violet;
    margin: 4px 20px;
    font-size: 15px;
  }
  
  & .nav-actions {
    flex: 0.3;
    text-align: right;
  }
  
  & .login {
    background: transparent;
    color: $grayish-violet;
    padding: 7px 20px;
    font-size: 15px;
  }
  
  & .sign-up {
    background: $cyan;
    color: white;
    padding: 7px 20px;
    border-radius: 20px;
    font-size: 15px;

    &:hover {
      background-color: #85eaea;
    }
  }
}
</style>

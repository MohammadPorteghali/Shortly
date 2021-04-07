<template>
  <div class="boost">
    <h3>Boost your links today</h3>
    <button class="get-started">Get Started</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.boost {
  background-image: url("../assets/images/bg-boost-desktop.svg");
  background-color: $dark-violet;
  background-size: cover;
  position: relative;
  z-index: 2;
  padding: 40px;
  text-align: center;

  @include respond(big-phone) {
  background-image: url("../assets/images/bg-boost-mobile.svg");
    padding: 60px 20px;
  }

  & h3 {
    font-weight: 700;
    font-size: 35px;
    color: white;
    margin: 15px 0;

    @include respond(big-phone) {
      font-size: 7.5vw;
    }
  }

  & button {
    background: $cyan;
    color: white;
    padding: 13px 28px;
    border-radius: 30px;

    &:hover {
      background-color: #85eaea;
    }
  }
}
</style>

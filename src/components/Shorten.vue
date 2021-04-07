<template>
  <div class="wrraper shorten">
    <input type="text" placeholder="Shorten a link here..." />
    <button>Shorten It!</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.shorten {
  background-image: url('../assets/images/bg-shorten-desktop.svg');
  background-color: $dark-violet;
  background-size: cover;
  position: relative;
  z-index: 2;
  padding: 40px;
  margin-top: 70px;
  border-radius: 7px;
  display: flex;

  @include respond(big-phone) {
    background-image: url('../assets/images/bg-shorten-mobile.svg');
    background-position: bottom;
    flex-direction: column;
    padding: 20px;
  }

  & input {
    padding: 15px 30px;
    border-radius: 7px;
    border: none;
    margin-right: 10px;
    flex: 1;

    @include respond(big-phone) {
      margin-right: 0px;
      margin-bottom: 10px;
    }
  }

  & button {
    background: $cyan;
    color: white;
    padding: 15px 40px;
    border-radius: 7px;
    margin-left: 10px;

    @include respond(big-phone) {
      margin-left: 0px;
      margin-top: 10px;
    }

    &:hover {
      background-color: #85eaea;
    }
  }
}
</style>
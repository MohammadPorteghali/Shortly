<template>
  <div class="wrraper shorten">
    <input type="text" placeholder="Shorten a link here...">
    <button>
      Shorten It!
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.shorten {
  background-image: url(/img/bg-shorten-desktop.a82de60e.svg);
  background-color: var(--dark-violet);
  background-size: cover;
  padding: 40px;
  margin-top: 60px;
  margin-bottom: 60px;
  border-radius: 7px;
  display: flex;

  & input {
    padding: 15px 30px;
    border-radius: 7px;
    border: none;
    margin-right: 10px;
    flex: 1;
  }

  & button {
    background: var(--cyan);
    color: white;
    padding: 17px 30px;
    border-radius: 7px;
    margin-left: 10px;
  }
}
</style>
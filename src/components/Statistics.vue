<template>
  <div class="statistics">
    <div class="title">
      <h3>
        Advanced statistics
      </h3>
      <p>
        Track how your links are performing across the web with
        <br>
        our advanced statistics dashboard
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.statistics {
  margin-top: -70px;
  background-color: var(--light-gray);
  height: calc(100vh - 175px);
  padding-top: 180px;

  & .title {
    text-align: center;
  
    & h3 {
      font-family: Poppins;
      font-weight: 700;
      font-size: 38px;
      color: var(--very-dark-violet);
      margin: 0;
    }

    & p {
      color: var(--grayish-violet)
    }
  }
}
</style>
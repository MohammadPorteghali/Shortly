<template>
  <div class="wrraper hero">
    <div class="hero-int">
      <div class="title">
        More than just
        <br>
        shorter links
      </div>
      <div class="subtitle">
        Build your brand's recognition and get detailed
        <br>
        insights on how your links are performing.
      </div>
      <button class="get-started">
        Get Started
      </button>
    </div>
    <div>
      <img src="@/assets/images/illustration-working.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;

  & .hero-int {
    flex: 1 0 50%;

    & .title {
      font-weight: 700;
      color: $very-dark-violet;
      font-size: 60px;
      line-height: 70px;
      margin-top: 85px;
    }

    & .subtitle {
      color: $grayish-violet;
      margin-top: 10px;
    }

    & button {
      background: $cyan;
      color: white;
      padding: 13px 28px;
      border-radius: 30px;
      margin-top: 40px;

      &:hover {
        background-color: #85eaea;
      }
    }
  }
}
</style>
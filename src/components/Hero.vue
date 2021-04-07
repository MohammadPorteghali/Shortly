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
        insights on how your links are performing.
      </div>
      <button class="get-started">
        Get Started
      </button>
    </div>
    <div>
      <img class="illustration" src="@/assets/images/illustration-working.svg" alt="">
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

    @include respond(big-phone) {
      flex-direction: column-reverse;
    }

  & .hero-int {
    flex: 1 0 50%;

    @include respond(big-phone) {
      text-align: center;
    }

    & .title {
      font-weight: 700;
      color: $very-dark-violet;
      font-size: 60px;
      line-height: 70px;
      margin-top: 85px;

      @include respond(big-phone) {
        font-size: 10vw;
        line-height: 13vw;
        margin-top: 40px;
      }
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

  & .illustration {

    @include respond(big-phone) {
      max-width: 130vw;
    }

  }
}
</style>
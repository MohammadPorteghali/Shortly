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
      color: var(--very-dark-violet);
      font-size: 60px;
      line-height: 70px;
      margin-top: 85px;
    }

    & .subtitle {
      color: var(--grayish-violet);
      margin-top: 10px;
    }

    & button {
      background: var(--cyan);
      color: white;
      padding: 9px 28px;
      border-radius: 20px;
      margin-top: 40px;
      font-size: 20px;
      
      &:hover {
        opacity: .6;
      }
    }
  }
}
</style>
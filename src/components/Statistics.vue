<template>
  <div class="statistics">
    <shorten />
    <div class="title wrraper">
      <h3>
        Advanced statistics
      </h3>
      <p>
        Track how your links are performing across the web with
        our advanced statistics dashboard
      </p>
    </div>
    <div class="boxes-container wrraper">
      <div class="box">
        <div class="icon">
          <img src="@/assets/images/icon-brand-recognition.svg" alt="">
        </div>
        <div class="des">
          <h4>Brand Recognition</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis asperiores voluptatum laboriosam sit.</p>
        </div>
      </div>
      <div class="box records">
        <div class="icon">
          <img src="@/assets/images/icon-detailed-records.svg" alt="">
        </div>
        <div class="des">
          <h4>Detailed Records</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis asperiores voluptatum laboriosam sit.</p>
        </div>
      </div>
      <div class="box customizable">
        <div class="icon">
          <img src="@/assets/images/icon-fully-customizable.svg" alt="">
        </div>
        <div class="des">
          <h4>Fully Customizable</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis asperiores voluptatum laboriosam sit.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Shorten from './Shorten.vue'
export default {
  components: { Shorten },

}
</script>

<style lang="scss" scoped>
.statistics {
  margin-top: 160px;
  background-color: $light-gray;
  padding: 70px 0 100px;
  position: relative;

  @include respond(big-phone) {
    padding: 120px 0 100px;
  }

  & .title {
    text-align: center;
    margin-top: 90px;

    & h3 {
      font-weight: 700;
      font-size: 38px;
      color: $very-dark-violet;
      margin: 0;

      @include respond(big-phone) {
        font-size: 8vw;
      }
    }

    @include respond(big-phone) {
      margin-top: 130px;
    }

    & p {
      color: $grayish-violet;
    }
  }

  & .boxes-container {
    display: flex;
    margin-top: 60px;

    @include respond(big-phone) {
      flex-direction: column;
      text-align: center;
    }

    & .box {
      flex: 1;
      background-color: white;
      margin: 0 14px;
      position: relative;
      padding: 30px;
      height: fit-content;

      @include respond(big-phone) {
        flex-direction: column;
        text-align: center;
        margin-top: 70px !important;
      }

      & .icon {
        background-color: $dark-violet;
        position: absolute;
        height: fit-content;
        width: fit-content;
        padding: 33px;
        border-radius: 50%;
        top: -33px;
        left: 20px;

        @include respond(big-phone) {
          left: 50%;
          transform: translateX(-50%);
        }

        & img {
          position: absolute;
          width: 30px;
          top: 18px;
          left: 18px;
        }
      }

      & .des {

        & h4 {
          font-weight: 700;
          margin-top: 30px;
        }

        & p {
          color: $grayish-violet;
          font-size: 14px;
        }
      }
    }

    & .records {
      margin-top: 30px;

      &::before {
        content: '';
        width: 28px;
        height: 10px;
        background-color: $cyan;
        position: absolute;
        left: -28px;
        top: 90px;

        @include respond(big-phone) {
          width: 38px;
          height: 8px;
          left: 50%;
          top: -55px;
          transform: translateX(-50%) rotate(90deg);
       }
      }
    }

    & .customizable {
      margin-top: 60px;

      &::before {
        content: '';
        width: 28px;
        height: 10px;
        background-color: $cyan;
        position: absolute;
        left: -28px;
        top: 60px;

        @include respond(big-phone) {
          width: 38px;
          height: 8px;
          left: 50%;
          top: -55px;
          transform: translateX(-50%) rotate(90deg);
       }
      }
    }
  }
}
</style>
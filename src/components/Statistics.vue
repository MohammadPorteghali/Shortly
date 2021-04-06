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
export default {

}
</script>

<style lang="scss" scoped>
.statistics {
  margin-top: -70px;
  background-color: var(--light-gray);
  height: calc(100vh - 130px);
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

  & .boxes-container {
    display: flex;
    margin-top: 70px;

    & .box {
      flex: 1;
      background-color: white;
      margin: 0 14px;
      position: relative;
      padding: 30px;
      height: fit-content;

      & .icon {
        background-color: var(--dark-violet);
        position: absolute;
        height: fit-content;
        width: fit-content;
        padding: 33px;
        border-radius: 50%;
        top: -33px;
        left: 20px;

        & img {
          position: absolute;
          width: 30px;
          top: 18px;
          left: 18px;
        }
      }

      & .des {

        & h4 {
          font-family: Poppins;
          font-weight: 700;
          margin-top: 30px;
        }

        & p {
          color: var(--grayish-violet);
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
        background-color: var(--cyan);
        position: absolute;
        left: -28px;
        top: 90px;
      }
    }

    & .customizable {
      margin-top: 60px;

      &::before {
        content: '';
        width: 28px;
        height: 10px;
        background-color: var(--cyan);
        position: absolute;
        left: -28px;
        top: 60px;
      }
    }
  }
}
</style>
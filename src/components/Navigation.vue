<template>
  <div v-if="showNav" v-click-outside="closeNav" class="nav">
    <div class="links">
      <a @click="closeNav" class="item" href="#">Features</a>
      <a @click="closeNav" class="item" href="#">Pricing</a>
      <a @click="closeNav" class="item" href="#">Resources</a>
    </div>
    <hr>
    <div class="actions links">
      <button @click="closeNav" class="login item">Login</button>
      <button @click="closeNav" class="sign-up item">Sign up</button>
    </div>
  </div>
</template>

<script>
import outside from '../directives'
import Vue from 'vue'

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
});

export default {
  props: ['showNav'],
  methods: {
    closeNav () {
      this.$emit('showNav')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  background-color: $dark-violet;
  width: calc(100% - 12vw);
  border-radius: 7px;
  top: 90px;

  & .links {
    display: flex;
    flex-direction: column;
    text-align: center;

    & .item {
      color: white;
      margin: 25px 35px 0;
    }
  }

  & hr {
    margin: 25px 35px 0;
    border-bottom: none;
    color: $very-dark-blue;
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
    margin-bottom: 25px !important;

    &:hover {
      background-color: #85eaea;
    }
  }
}
</style>
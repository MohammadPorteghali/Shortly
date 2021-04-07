<template>
  <div>
    <div class="wrraper shorten">
      <input
        v-model="link"
        @keypress.enter="shortLink"
        :class="showHint ? 'hint' : ''"
        type="text"
        placeholder="Shorten a link here..."
      />
      <i v-if="showHint">{{ hint }}</i>
      <i v-if="loading" class="loading">Please wait...</i>
      <button @click="shortLink">Shorten It!</button>
    </div>
    <div class="wrraper result" v-for="(item, index) in links" :key="index">
      {{ item.ol }}
      <hr>
      {{ item.sl }}
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    link: '',
    showHint: false,
    hint: 'Please add a link',
    loading: false,
    links: []
  }),
  methods: {
    shortLink() {
      if (!this.link) {
        this.showHint = true 
      } else {
        this.loading = true
        this.showHint = false 
        this.axios.get('https://api.shrtco.de/v2/shorten', {
          params: {
            url: this.link
          }
        }).then(({data}) => {
          this.loading = false
          if (data.ok) {
            if ( this.links.length === 3) {
              this.links.shift()
            } 
            this.links.push({ol: data.result.original_link, sl: data.result.full_short_link})
            window.localStorage.setItem('links', [JSON.stringify({ol: data.result.original_link, sl: data.result.full_short_link})])
          } else {
            this.showHint = true 
            this.hint = data.error;
          }
        }).catch((err) => {
            console.log(err);
          this.loading = false
          this.showHint = true 
          this.hint = 'Url is invalid';
        })
      }
    },
    getItems() {
      this.links = [...window.localStorage.getItems()]
      console.log('twed', this.links);
    }
  },
  mounted() {
    this.links.push({...JSON.parse(window.localStorage.getItem('links'))});
  }
}
</script>

<style lang="scss" scoped>
.shorten {
  background-image: url("../assets/images/bg-shorten-desktop.svg");
  background-color: $dark-violet;
  background-size: cover;
  z-index: 2;
  padding: 40px;
  margin-top: 70px;
  border-radius: 7px;
  display: flex;
  position: absolute;
  top: -140px;
  width: calc(100% - 18vw - 80px);

  @include respond(big-phone) {
    background-image: url("../assets/images/bg-shorten-mobile.svg");
    background-position: bottom;
    flex-direction: column;
    padding: 20px;
    width: calc(100% - 12vw - 40px);
  }

  & input {
    padding: 12px 27px;
    border-radius: 7px;
    border: none;
    margin-right: 10px;
    flex: 1;
    border: 3px solid white;

    @include respond(big-phone) {
      margin-right: 0px;
      margin-bottom: 10px;
    }
  }

  & .hint {
    border: 3px solid $red;
  }

  & .hint::placeholder {
    color: $red;
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

  & i {
    color: $red;
    font-size: 11px;
    position: absolute;
    bottom: 18px;

    @include respond(big-phone) {
      position: static;
      margin-top: -5px;
    }
  }

  & .loading {
    color: $cyan;
    font-size: 11px;
    position: absolute;
    bottom: 18px;

    @include respond(big-phone) {
      position: static;
      margin-top: -5px;
    }
  }
}

.result {
  background-color: #ffffff;
  position: relative;
  z-index: 2;
  padding: 40px;
  margin-top: 30px;
  border-radius: 7px;
  display: flex;

  @include respond(big-phone) {
    flex-direction: column;
    padding: 20px;
  }
}
</style>
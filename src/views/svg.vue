<template>
  <div class="header">
    <div class="nav-bar">
      <ul>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
      </ul>
    </div>
    <div class="cloud"></div>
    <svg width="0" height="0"> 
      <filter id="filter">
        <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="6" />
        <feDisplacementMap in="SourceGraphic" scale="100" />
      </filter>
    </svg>

    <!-- 水流 -->
    <svg width="0" height="0" style="posiotion:absolute;">
      <filter id="displacementFilter">
          <feTurbulence type="turbulence" baseFrequency="0.01 .1" numOctaves="1" result="turbulence" seed="53" />
          <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="20" xChannelSelector="R" yChannelSelector="B" />
      </filter>
    </svg>

    <!-- 云朵 -->
    <svg width="0" height="0" style="position:absolute;">
      <filter id="cloudRandom">
        <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="4" seed="0" /> 
        <feDisplacementMap in="SourceGraphic" scale="170" />
      </filter>
    </svg>
  </div>
</template>


<script>
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
  }
});
</script>

<style lang='scss'>
.header {
    height: 100vh;
    width: 100vw;
    background: lightblue;
    // filter: url(#displacementFilter);
}
.nav-bar {
  ul {
    display: flex;
  }
}
.cloud {
    width: 500px; height: 250px;
    background: radial-gradient(closest-side, #fff 20%, #fffa 60%, #fff0 80%);
    filter: url(#cloudRandom);
}
@media screen and (max-width: 600px){
  .nav-bar {
    ul {
      display: none;
    }
  }
}
</style>
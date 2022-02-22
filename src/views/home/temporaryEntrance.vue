<template>
  <a-carousel :after-change="onChange">
    <div class="svg-container-one">
      <svg viewBox="0 0 960 400">
        <symbol id="line-text">
          <text text-anchor="middle" x="50%" y="50%" dy=".4em">
            HI,FRIEND
          </text>
        </symbol>

        <use xlink:href="#line-text" class="line-text"></use>
        <use xlink:href="#line-text" class="line-text"></use>
        <use xlink:href="#line-text" class="line-text"></use>
        <use xlink:href="#line-text" class="line-text"></use>
      </svg>
    </div>
    <div class="wrap-3d">
      <ul class="list">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="wrap-3d-2">
      <div class="wrap">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="douyin-box">
      <span>抖</span>
      <span>音</span>
      <span>，</span>
      <span>记</span>
      <span>录</span>
      <span>美</span>
      <span>好</span>
      <span>生</span>
      <span>活</span>
      <span>!</span>
    </div>
    <div class="jianzhi">
      <ul>
        <li>
          <span data="H">H</span>
          <span data="A">A</span>
          <span data="P">P</span>
          <span data="P">P</span>
          <span data="Y">Y</span>
        </li>
        <li>
          <span data="N">N</span>
          <span data="E">E</span>
          <span data="W">W</span>
        </li>
        <li>
          <span data="Y">Y</span>
          <span data="E">E</span>
          <span data="A">A</span>
          <span data="R">R</span>
        </li>
      </ul>
    </div>
  </a-carousel>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const onChange = (current: number) => {
      console.log(current);
    };

    return {
      onChange,
    };
  },
});
</script>
<style scoped lang="scss">
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 100vh;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

.svg-container-one {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  font-size: 300px;
  font-weight: bold;
  text-transform: uppercase;
  .line-text {
    fill: none;
    stroke-width: 5;
    stroke-dasharray: 0 240;
    stroke-dashoffset: 0;
  }

  .line-text:nth-child(4n + 1) {
    stroke: rgb(39, 135, 238);
    animation: text1 4s infinite alternate forwards;
  }
  .line-text:nth-child(4n + 2) {
    stroke: rgb(47, 169, 92);
    animation: text2 4s infinite alternate forwards;
  }
  .line-text:nth-child(4n + 3) {
    stroke: rgb(249, 189, 56);
    animation: text3 4s infinite alternate forwards;
  }
  .line-text:nth-child(4n + 4) {
    stroke: rgb(235, 61, 50);
    animation: text4 4s infinite alternate forwards;
  }

  @keyframes text1 {
    100% {
      stroke-dashoffset: 1000;
      stroke-dasharray: 60 180;
    }
  }

  @keyframes text2 {
    100% {
      stroke-dashoffset: 1060;
      stroke-dasharray: 60 180;
    }
  }

  @keyframes text3 {
    100% {
      stroke-dashoffset: 1120;
      stroke-dasharray: 60 180;
    }
  }

  @keyframes text4 {
    100% {
      stroke-dashoffset: 1180;
      stroke-dasharray: 60 180;
    }
  }
}

.wrap-3d {
  transform-style: preserve-3d;
  perspective: 800px;
  .list {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 300px auto;
    list-style: none;
    transform: rotateY(-45deg) rotateX(-45deg);
    transform-style: preserve-3d;
    animation: move 2s linear infinite forwards;
  }

  .list li {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    /* transform-origin: center center; */
    background-size: cover !important;
    transition: all 1s;
  }

  .list li:nth-child(1) {
    background: url("../../assets/image/01.png") 0 0 no-repeat;
    transform: translateZ(100px);
  }

  .list:hover li:nth-child(1) {
    transform: translateZ(200px);
  }

  .list li:nth-child(2) {
    background: url("../../assets/image/02.png") 0 0 no-repeat;
    transform: rotateY(90deg) translateZ(100px);
  }

  .list:hover li:nth-child(2) {
    transform: rotateY(90deg) translateZ(200px);
  }

  .list li:nth-child(3) {
    background: url("../../assets/image/03.png") 0 0 no-repeat;
    transform: rotateY(180deg) translateZ(100px);
  }

  .list:hover li:nth-child(3) {
    transform: rotateY(180deg) translateZ(200px);
  }

  .list li:nth-child(4) {
    background: url("../../assets/image/04.png") 0 0 no-repeat;
    transform: rotateY(270deg) translateZ(100px);
  }

  .list:hover li:nth-child(4) {
    transform: rotateY(270deg) translateZ(200px);
  }

  .list li:nth-child(5) {
    background: url("../../assets/image/05.png") 0 0 no-repeat;
    transform: rotateX(90deg) translateZ(100px);
  }

  .list:hover li:nth-child(5) {
    transform: rotateX(90deg) translateZ(200px);
  }

  .list li:nth-child(6) {
    background: url("../../assets/image/06.png") 0 0 no-repeat;
    transform: rotateX(-90deg) translateZ(100px);
  }

  .list:hover li:nth-child(6) {
    transform: rotateX(-90deg) translateZ(200px);
  }

  @keyframes move {
    from {
      transform: rotateY(0deg) rotateX(360deg);
    }

    to {
      transform: rotateY(360deg) rotateX(0deg);
    }
  }
}

.wrap-3d-2 {
  height: 100vh;
  background: #333;
  perspective: 3000px;
  .wrap {
    position: relative;
    width: 400px;
    height: 200px;
    margin: 500px auto;
    transform: rotateX(-10deg);
    transform-style: preserve-3d;
    animation: move2 5s infinite linear;
  }
  .wrap div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: #333; */
    background-size: 100% 100% !important;
  }
  .wrap div:nth-child(1) {
    background: url("../../assets/image/saga0.jpg") 0 0 no-repeat;
    transform: translateZ(600px);
  }
  .wrap div:nth-child(2) {
    background: url("../../assets/image/saga1.jpg") 0 0 no-repeat;
    transform: rotateY(51deg) translateZ(600px);
  }
  .wrap div:nth-child(3) {
    background: url("../../assets/image/saga2.jpg") 0 0 no-repeat;
    transform: rotateY(102deg) translateZ(600px);
  }
  .wrap div:nth-child(4) {
    background: url("../../assets/image/saga3.jpg") 0 0 no-repeat;
    transform: rotateY(153deg) translateZ(600px);
  }
  .wrap div:nth-child(5) {
    background: url("../../assets/image/saga4.jpg") 0 0 no-repeat;
    transform: rotateY(204deg) translateZ(600px);
  }
  .wrap div:nth-child(6) {
    background: url("../../assets/image/saga5.jpg") 0 0 no-repeat;
    transform: rotateY(255deg) translateZ(600px);
  }
  .wrap div:nth-child(7) {
    background: url("../../assets/image/saga6.jpg") 0 0 no-repeat;
    transform: rotateY(306deg) translateZ(600px);
  }

  @keyframes move2 {
    from {
      transform: rotateX(-10deg) rotateY(0deg);
    }
    to {
      transform: rotateX(-10deg) rotateY(360deg);
    }
  }
}

.douyin-box {
  text-align: center;
  padding: 200px 0;
  span {
    color: #fff;
    font-family: "方正细金陵简体";
    font-size: 100px;
    font-weight: bold;
    text-shadow: -0.05em 0 cyan, 0.05em 0 red;
    position: relative;
    display: inline-block;
  }

  @keyframes text-jump {
    0% {
      top: 0px;
    }
    75% {
      top: 0px;
    }
    85% {
      top: -150px;
    }
    95% {
      top: 50px;
    }
    100% {
      top: 0px;
    }
    // 0% {
    //   top: 0px;
    // }
    // 100% {
    //   top: 0px;
    // }
  }

  @keyframes text-rotate {
    0% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  span:nth-child(1) {
    animation: text-jump 4s infinite 0s, text-rotate 4s infinite 0s;
  }
  span:nth-child(2) {
    animation: text-jump 4s infinite 0.2s, text-rotate 4s infinite 0.2s;
  }
  span:nth-child(3) {
    animation: text-jump 4s infinite 0.4s, text-rotate 4s infinite 0.4s;
  }
  span:nth-child(4) {
    animation: text-jump 4s infinite 0.6s, text-rotate 4s infinite 0.6s;
  }
  span:nth-child(5) {
    animation: text-jump 4s infinite 0.8s, text-rotate 4s infinite 0.8s;
  }
  span:nth-child(6) {
    animation: text-jump 4s infinite 1s, text-rotate 4s infinite 1s;
  }
  span:nth-child(7) {
    animation: text-jump 4s infinite 1.2s, text-rotate 4s infinite 1.2s;
  }
  span:nth-child(8) {
    animation: text-jump 4s infinite 1.4s, text-rotate 4s infinite 1.4s;
  }
  span:nth-child(9) {
    animation: text-jump 4s infinite 1.6s, text-rotate 4s infinite 1.6s;
  }
  span:nth-child(10) {
    animation: text-jump 4s infinite 1.8s, text-rotate 4s infinite 1.8s;
  }
}

.jianzhi {
  height: 100vh;
  background-color: brown;
  ul {
    list-style: none;
    /* padding-top: 100px; */
  }

  ul > li {
    font-size: 0;
    text-align: center;
  }

  ul > li > span {
    display: inline-block;
    /* border: 1px solid #000; */
    width: 300px;
    height: 300px;
    font-size: 300px;
    line-height: 300px;
    text-align: center;
    font-weight: bolder;
    position: relative;
  }

  ul > li > span::before,
  ul > li > span::after {
    content: attr(data);
    display: inline-block;
    width: 300px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
  }

  ul > li > span::before {
    color: rgba(0, 0, 0, 0.2);
    transform: skew(5deg) translateX(10px);
    transition: 0.2s;
  }

  ul > li > span::after {
    color: brown;
    text-shadow: 0 -2px 5px rgb(212, 93, 93);
    transform-origin: 100% 0 0;
    transform: rotateX(20deg);
    transition: 0.2s;
  }

  ul > li > span:hover::before {
    transform: skew(20deg) translateX(37px) scale(1, 1.1) translateY(15px);
  }

  ul > li > span:hover::after {
    color: rgb(190, 60, 60);
    transform: rotateX(40deg) translateY(7px);
  }
}
</style>

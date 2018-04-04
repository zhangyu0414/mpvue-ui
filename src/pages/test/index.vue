<template>
    <div class="nav" v-model.lazy="select">
        <navigator tag="div" class="tab-item" url="/pages/slider/main">
            <div class="tab-icon home"></div>
            <span class="tab-link">首页</span>
        </navigator>
        <navigator tag="div" class="tab-item" url="/pages/slider/main">
            <div class="tab-icon doctor"></div>
            <span class="tab-link">医生</span>
        </navigator>
        <navigator tag="div" class="tab-item" url="/pages/slider/main">
            <div class="tab-icon family"></div>
            <span class="tab-link">家庭成员</span>
        </navigator>
        <navigator tag="div" class="tab-item" url="/pages/slider/main">
            <div class="tab-icon my"></div>
            <span class="tab-link">我的</span>
        </navigator>
    </div>
</template>

<script>
export default {
  data () {
    return {
      select: 'home'
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped>
    .nav{
        position: fixed;
        height: 44px;
        left: 0;
        bottom: 0;
        width: 100%;
        border-top: 1px solid lightgray;
        display: flex;
        background: white;
    }
    .nav .tab-item{
        flex: 1;
        text-align: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .tab-icon{
        margin-top: 4px;
        display: inline-block;
        width: 14px;
        height: 18px;
        background-size: 14px 18px;
    }
    .tab-link{
        margin-top: 2px;
        color: gray;
        font-size: 12px;
    }
    .router-link-active .tab-link{
        /*border-bottom 2px solid #50d2c2*/
        color: #85d1ff;
    }
        /*首页*/
      .home{
          background-image: url("../../images/tabbar/tab_icon01_n@2x.png");
      }
    .router-link-active .home{
        background-image: url("../../images/tabbar/tab_icon01_s@2x.png")
    }
    /*医生*/
       .doctor{
           background-image: url("../../images/tabbar/tab_icon02_n@2x.png");
       }
    .router-link-active .doctor{
        background-image: url("../../images/tabbar/tab_icon02_s@2x.png")
    }
    /*家庭成员*/
      .family{
          background-image: url("../../images/tabbar/tab_icon04_n@2x.png");
      }
    .router-link-active .family{
        background-image: url("../../images/tabbar/tab_icon04_s@2x.png")
    }
    /*我的*/
       .my{
           background-image: url("../../images/tabbar/tab_icon05_n@2x.png");
       }
    .router-link-active .my{
        background-image: url("../../images/tabbar/tab_icon05_s@2x.png")
    }
</style>

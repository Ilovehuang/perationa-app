<template>
    <div class="header">
        <div class="avatar"><i class="fa fa-arrow-left" aria-hidden="true"></i><span>返回</span></div>
        <div class="title"><span>运营中心</span></div>
    </div>
</template>

<script>
export default {
  name: 'PerationaHeader',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) { 
    .header{
      height: 100%;
      box-sizing:border-box;
      padding-top: 44px;
  }
   .header:before{
    content: '';
    position:fixed;
    top:0;
    left:0;
    width: 100%;
    height: 44px;
    background-color: #dbd0d0;
    z-index: 9998
   }
}
  .header{
    height: 40px;
    padding:0;
    clear:both;
    position: relative;
  }
  .avatar {
    display: inline-block;
    margin-left: 20px;
    margin-top: 8px;
    font-size: 14px ;
    color: #0079FE
  }
  .avatar span{
    margin-left: 4px
  }
  .title{
    position:absolute;
    display: inline-block;
    margin-top: 4px;
    font-size: 18px ;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin:0 auto;
    margin:auto; top: 0;left: 0;right: 0;bottom: 0;
  }
</style>

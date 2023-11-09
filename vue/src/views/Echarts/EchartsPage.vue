<template>
<div>

  <div>
    <div id="cart" style="width: 600px;height: 400px">
    </div>
  </div>

</div>
</template>

<script>

export default {
  name: "EchartsPage",
  data(){
    return{}
  },
  methods:{
    init(){
      const cart = this.$echarts.init(document.getElementById('cart'));
      const cartOption = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      };
      cart.setOption(cartOption);
    }

  },
  mounted() {
    this.init()
  }

}
</script>

<style scoped>

</style>
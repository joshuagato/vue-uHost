<template>
  <div class="call-to-action">
      <h3>Get the freedom you deserve with our flexible plans!</h3>
  </div>
</template>



<script>
export default {
    name: 'CallToAction'
}
</script>



<style lang="scss" scoped>
    .call-to-action {
        background: linear-gradient(to top,rgba(132, 215, 253, 0.603) 5%, transparent),
                    url("../../assets/images/freedom.jpg") center/cover no-repeat border-box,
                    #5cc2eb;
        width: 100%;
        height: 43vh;
        position: relative;
        margin-top: 0;

        h3 {
            color: white;
            font-family: sans-serif;
            position: absolute;
            bottom: 5%;
            left: 3%;
        }
    }
</style>
<template>
  <div class="singlePost">
    <h2> singlePost </h2>
    <div class="pst">
      <h3>{{ pst.title }}</h3>
      <!-- <p>{{ pst.body }}</p> -->
        <p>{{ snippt }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {

  props: ["pst"],
  setup(props){
    // console.log(props)
    const snippt = computed(()=> { 
      return props.pst.body.substring(0, 33) + "..." 
    })

      return { snippt }

  }

}
</script>

<style>

</style>
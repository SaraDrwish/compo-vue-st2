<template>
  <div class="singlePost">
    <h2> single Post page  </h2>
    <div class="pst">
      <h3>{{ pst.title }}</h3>
      <p>{{ pst.body }}</p>
      <p>{{ pst.tag }}</p>
     <p v-for=" tg in pst.tag " :key="tg" > # {{ tg }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {

  props: ["pst"],

  setup(props) {
    
    console.log(props)
    const snippt = computed(()=> { 
      return props.pst.body.substring(0, 22) + "......" 
    })
      return { snippt }
  }

}
</script>

<style>

</style>
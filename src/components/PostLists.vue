<template>
  <div class="posts-list">
    <div v-for="pst in posts " :key="pst.id" >
       <SinglePost  :pst="pst" />
    </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue"
import { onMounted, onUnmounted, onUpdated } from "vue";

export default {
  props: ["posts"],
  components: { SinglePost },
  setup(props) {
    console.log(props.posts)

    onMounted(() => {
       console.log("compunent mounted ")
    }),
      onUnmounted(() => {
       console.log("onUnmounted ")
      }),
      onUpdated(() => {
       console.log("onUpdated  ")
      })

    // ,
    // mounted() {
        //  console.log("mounted using options api   ")
    // },


  } ,
 
  
 
  
}
</script>

<style>
div{
  background-color: thistle ;
  color: rgb(38, 38, 73);
}
</style>
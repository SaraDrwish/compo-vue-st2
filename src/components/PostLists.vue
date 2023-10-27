<template>
  <div class="posts-list">
    <div v-for="pst in posts " :key="pst.id" >
       <SinglePost  :pst="pst" />
    </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue"
export default {
  props: ["posts"],
  components: { SinglePost },
  setup(props) {
    console.log(props.posts)
  }
}
</script>

<style>

</style>
<template>
  <div class="posts-list">
    <div v-for="pst in posts " :key="pst.id" >
      <h2>{{ pst.title }}</h2>
    </div>

  </div>
</template>

<script>
export default {

  props: ["posts"],
  setup(props) {
    console.log(props.posts)
    
  }

}
</script>

<style>

</style>
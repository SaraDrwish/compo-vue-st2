<template>
  <div class="home">
    <h2>Home</h2>
    <PostLists :posts="posts" />
  </div>
</template>

<script>

import PostLists from "../components/PostLists.vue"
import { ref } from 'vue'

export default {

  name: 'Home',
  components: { PostLists } ,
  setup() {

    const posts = ref([
      {
        title: "welcome sara 1", body: "lorem11110lorem", id: 1
      },
      {
        title: "welco2",
        body: "lore loremlorem loremlore ljhjhjhjremlorem loremlorem loremlorem loremlorem loremlorem loremlorem", id: 2
      }
    ])
 
    return { posts }
    
  }

}

</script>

<style>

.home{
  background-color: rgb(255, 192, 192);
  color: rgb(119, 167, 174);
  margin: 2%;
  padding: 2%;
}
input{
  border: none;
  border-radius: .8rem;
  padding: 1%;
  margin: 1%;
  font-size: 22px;
  color: salmon;
}
input:focus , button:focus{
  outline: none;
}
button {
border-radius: 0.4rem;
background-color: slategray;
color: salmon;
border: none;
padding: 2%;
cursor: pointer;
}
p , h2{
  font-size: 19px;
  padding: 1%;
  background-color: rgb(255, 169, 159);
  width: 25%;
  margin: 2%  auto;
  border-radius: 0.6rem;
}

</style>

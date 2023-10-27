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
      {title: "welcome sara" , body:"lorem6666666666666666666666", id: 1 },
      { title: "welcome  22222222222 ", body: "lorem222222 " , id: 2 }
    ])
 
    return {  posts }
 
  }


}

</script>


<style>

.home{
  background-color: rgb(255, 192, 192);
  color: rgb(119, 174, 155);
  margin: 6%;
  padding: 6%;
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

<template>
  <div class="home">
    <h2>Home</h2>
    <div v-if="error"> {{ error }}</div>
    <div v-if="posts.length">
       <PostLists  :posts="posts" />
    </div>
    <div v-else >loading .... </div>
 
  </div>
</template>

<script>

import PostLists from "../components/PostLists.vue"
import getPosts from "../composables/getPosts"

export default {

  name: 'Home',
  components: { PostLists } ,
  setup() {

    // json-server --watch data/db.json  .  ----  after i it 

    const { posts, error, load } = getPosts()
    load()
    return { posts, error }

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
a{
  text-decoration: none;
  /* display: flex; */
  color: unset;
  /* text-align: center; */
  margin: auto;
  /* padding: 1%; */
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
padding: 1%  2%;
cursor: pointer;
margin: 2%;
}
p , h2{
  font-size: 19px;
  padding: 1%;
  background-color: rgb(255, 169, 159);
  width: 25%;
  margin: 2%  auto;
  border-radius: 0.6rem;
  width: 33%;
}

</style>

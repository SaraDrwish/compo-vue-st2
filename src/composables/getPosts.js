
import { ref } from 'vue'

const getPosts = () => {

    const posts = ref([ ]) 
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts")
        console.log(data)
        if (!data.ok) {
          throw Error( "data is not ok !!!!!!! no data available ")
        }
        posts.value = await data.json()
      }
      catch (err){
        error.value = err.message
        console.log(error.value + "//////"  + "error : " + err.message)

      }
    }
 
   return { posts , error , load }

}

export default getPosts
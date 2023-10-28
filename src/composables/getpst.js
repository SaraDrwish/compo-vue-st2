import { ref } from "vue"

const getPst = (id) => {
  
    const pst = ref(null) 
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts/"+id)
        console.log(data)
        if (!data.ok) {
          throw Error( "that post is not available ")
        }
        pst.value = await data.json()
      }
      catch (err){
        error.value = err.message
        console.log(error.value  )

      }
    }
 
   return { pst , error , load }

  
  

}



export default getPst
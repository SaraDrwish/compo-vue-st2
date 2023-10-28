<template>
  <h2>Details page </h2>
  <div v-if="error">{{ error }}</div>
  <div v-if="pst">
    <p>{{ pst.title }}</p>
    <p>{{ pst.body }}</p>
  </div>
</template>

<script>
import getPst from "../composables/getpst"
export default {

  props: ["id"],

  setup(props) {

    getPst(props.id)

    const { error, pst, load } = getPst(props.id)

    load()

    return { pst, error }
    
  }


}

</script>

<style>

</style>
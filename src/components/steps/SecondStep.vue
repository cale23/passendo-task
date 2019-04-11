<template>
  <div>
    <div class="card">
      <h5 class="card-header text-center">Add tags</h5>
      <div class="card-body">
        <div class="add-more">+ Add more</div>{{options}}
        <v-select taggable push-tags :options="options"></v-select>
        <b-button type="button" class="float-right" variant="primary">Save</b-button>
      </div>
    </div>
  </div>
</template>
 
<script>

export default {
  data() {
    return {
      options: [this.$store.state.user.firstName]
    }
  },
  computed: {
    tags: {
      get() {
        return this.$store.state.user.tags;
      },
      set(value) {
        this.$store.commit("addTag", value);
      }
    }
  }
};
</script>
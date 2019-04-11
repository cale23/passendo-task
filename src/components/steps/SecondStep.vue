<template>
  <div>
    <div class="card">
      <h5 class="card-header text-center">Add tags</h5>
      <div class="card-body">
        <div v-show="!adding" class="add-more" @click="adding = !adding">+ Add more</div>
        <div v-show="adding" class="col-md-4">
          <v-select taggable push-tags :options="options" @input="onChange"></v-select>
        </div>
        {{options}}
        <b-button type="button" class="float-right" variant="primary">Save</b-button>
      </div>
    </div>
  </div>
</template>
 
<script>

export default {
  data() {
    return {
      adding: false,
      options: this.$store.state.availableTags
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
    },
    availableTags: {
      get() {
        return this.$store.state.availableTags;
      },
      set(value) {
        this.$store.commit("addAvailableTag", value);
      }
    }
  },
  methods: {
    onChange(value) {
      this.adding = !this.adding;
      if (value != null) {
        if (this.$store.state.user.tags.indexOf(value) == -1) this.$store.commit("addTag", value);
        if (this.options.indexOf(value) == -1) this.$store.commit("addAvailableTag", value);
      }
    }
  }
};
</script>
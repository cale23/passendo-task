<template>
  <div>
    <div class="card">
      <h5 class="card-header text-center">Add tags</h5>
      <div class="card-body">
        <div v-show="!adding" class="add-more" @click="adding = !adding">+ Add more</div>{{options}}
        <div v-show="adding" class="col-md-4">
          <v-select taggable push-tags :options="options" @change="onChange" v-model="tags"></v-select>
        </div>
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
        if (value != null) {
          this.$store.commit("addTag", value);
          if (this.options.indexOf(value) == -1) this.$store.commit("addAvailableTag", value);
        }
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
    onChange() {
      // this.adding = !this.adding;
    }
  }
};
</script>
<template>
  <div>
    <div class="card">
      <h5 class="card-header text-center">Add tags</h5>
      <div class="card-body">
        <form @submit.prevent="addTagsAndSubmit">
          <div class="row">
            <ul class="tags col-md-2">
              <li class="tag" v-for="tag in tags" :key="index">{{tag}}</li>
            </ul>
            <div class="add-tags col-md-4">
              <div v-show="!adding" class="add-more" @click="adding = !adding">+ Add more</div>
              <div v-show="adding">
                <v-select ref="select" taggable push-tags :options="options" @input="onChange"></v-select>
                <button
                  type="button"
                  variant="primary"
                  class="select-all btn btn-primary"
                  @click="selectAll"
                  :disabled="options.length < 1"
                >Select All</button>
              </div>
            </div>
          </div>
          <b-button type="submit" class="float-right" variant="primary">Save</b-button>
        </form>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      adding: false,
      options: this.$store.state.availableTags,
      user: this.$store.state.user
    };
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
      if (value != null) {
        this.$store.commit("addAvailableTag", value);
        this.$store.commit("addTag", value);
        this.options = this.$store.state.availableTags;
      }

      this.adding = !this.adding;
      const select = this.$refs.select;
      select.clearSelection();
    },
    selectAll() {
      const select = this.$refs.select;
      select.options.forEach(option => {
        select.select(option);
      });

      select.open = false;
      this.adding = !this.adding;
    },
    addTagsAndSubmit() {
      console.log(this.user);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let firstname = JSON.stringify(this.user.firstname),
            lastname = JSON.stringify(this.user.lastname),
            email = JSON.stringify(this.user.email),
            username = JSON.stringify(this.user.username),
            password = JSON.stringify(this.user.password),
            tags = JSON.stringify(this.user.tags);
          alert(`Form submitted! 
      
          User details:
            Firstname: ${firstname}
            Lastname: ${lastname}
            Email: ${email}
            Username: ${username}
            Password: ${password}
            Tags: ${tags}
          `);
          resolve();
        }, 0);
      });
    }
  }
};
</script>
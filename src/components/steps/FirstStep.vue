<template>
  <div>
    <div class="card">
      <h5 class="card-header text-center">Add User</h5>
      <div class="card-body">
        <form @submit.prevent="addBasicUserSettings">
          <div class="row">
            <div class="col-md-4">
              <div class="settins-desc">
                <h5>Main user settings</h5>
                <small>Set the main user settings</small>
              </div>
              <div class="form-group">
                <!-- First name -->
                <label for="firstname">First name</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  class="form-control"
                  placeholder="First name"
                  v-model="firstname"
                  v-validate="'required'"
                >
                <span class="invalid">{{ errors.first('firstname') }}</span>
              </div>
              <div class="form-group">
                <!-- Last name -->
                <label for="lastname">Last name</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  class="form-control"
                  placeholder="Last name"
                  v-model="lastname"
                  v-validate="'required'"
                >
                <span class="invalid">{{ errors.first('lastname') }}</span>
              </div>
            </div>
            <div class="col-md-4">
              <div class="settins-desc">
                <h5>User email</h5>
                <small>Set the user emails</small>
              </div>
              <div class="form-group">
                <!-- Email -->
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  placeholder="Email"
                  v-model="email"
                  v-validate="'required|email'"
                >
                <span class="invalid">{{ errors.first('email') }}</span>
              </div>
            </div>
            <div class="col-md-4">
              <div class="settins-desc">
                <h5>Login settings</h5>
                <small>User login settings</small>
              </div>
              <div class="form-group">
                <!-- Username -->
                <label for="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  class="form-control"
                  placeholder="Username"
                  v-model="username"
                  v-validate="'required'"
                >
                <span class="invalid">{{ errors.first('username') }}</span>
              </div>
              <div class="form-group">
                <!-- Password -->
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="password"
                  v-validate="'required'"
                  :disabled="generate"
                >
                <span class="invalid">{{ errors.first('password') }}</span>
              </div>
              <div class="form-group">
                <b-form-checkbox
                  id="generatePassword"
                  v-model="generate"
                  name="generatePassword"
                >Add random password to the user and send it on email including a little welcome message</b-form-checkbox>
              </div>
            </div>
          </div>

          <b-button type="submit" class="float-right" variant="primary">Next</b-button>
        </form>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      generate: false
    };
  },
  computed: {
    firstname: {
      get() {
        return this.$store.state.user.firstname;
      },
      set(value) {
        this.$store.commit("setFirstname", value);
      }
    },
    lastname: {
      get() {
        return this.$store.state.user.lastname;
      },
      set(value) {
        this.$store.commit("setLastname", value);
      }
    },
    email: {
      get() {
        return this.$store.state.user.email;
      },
      set(value) {
        this.$store.commit("setEmail", value);
      }
    },
    username: {
      get() {
        return this.$store.state.user.username;
      },
      set(value) {
        this.$store.commit("setUsername", value);
      }
    },
    password: {
      get() {
        return this.$store.state.user.password;
      },
      set(value) {
        this.$store.commit("setPassword", value);
      }
    }
  },
  methods: {
    addBasicUserSettings() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$router.push({ name: 'secondStep', params: { id: '2' } });
        } else {
          console.log("Not valid");
        }
      });
    }
  }
};
</script>
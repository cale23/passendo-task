<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-sm-12">
        <step-indicator
          :current="current_step"
          :total="2"
          currentColor="#007bff"
          defaultColor="#ccc"
        ></step-indicator>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
 
<script>
import StepIndicator from "vue-step-indicator";
import { debug } from "util";

export default {
  name: "App",
  components: {
    StepIndicator
  },
  data() {
    return {
      current_step: 0
    };
  },
  methods: {
    changeStep() {
      switch (this.$route.meta.id) {
        case 1:
          this.current_step = 0;
          break;
        case 2:
          this.current_step = 1;
      }
    }
  },
  mounted: function() {
    this.changeStep();
  },
  updated: function() {
    this.changeStep();
  }
};
</script>

<style lang="scss">
h5,
label:not(.custom-control-label),
.add-more {
  font-weight: bold !important;
}
ul {
  list-style: none;
}
.container {
  margin-top: 20px;
}
.settins-desc {
  margin-bottom: 20px;
  &:after {
    content: "";
    display: block;
    width: 60%;
    border-bottom: 1px solid #ccc;
  }
  h5 {
    margin-bottom: 0;
  }
  small {
    color: #ccc;
  }
}
input:invalid {
  border-color: red;
}
span.invalid {
  color: red;
}
.custom-control-label {
  font-size: 14px;
}
.step-indicators {
  position: relative;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.step-indicator {
  border: 2px solid;
  border-radius: 50%;
  height: 38px;
  width: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  z-index: 2;
  background-color: white;
  box-sizing: border-box;
}

.step-indicators-line {
  position: absolute;
  height: 2px;
  top: 50%;
  left: 24px;
  right: 24px;
  transform: translateY(-50%);
  z-index: 1;
  background: rgb(223, 231, 239);
}
.tag {
  background: #1eac80;
  padding: 0 10px;
  margin-bottom: 5px;
  border-radius: 3px;
  display: table;
}
.add-more {
  cursor: pointer;
}
.add-tags {
  position: relative;

  .select-all {
    position: absolute;
    width: 80px;
    height: 34px;
    right: -70px;
    top: 0px;
    padding: 0;
  }
}
</style>
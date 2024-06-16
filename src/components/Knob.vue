<template>
  <div class="knobContainer">
    <q-knob
      :color="color"
      size="xxl"
      class="knob"
      :min="min"
      :max="max"
      :inner-max="innerMax"
      :step="step"
      :thickness="thickness"
      show-value
      v-model="value"
      @update:model-value="updateValue"
    >
    <template v-slot:default>
      <div class="q-pa-md">
        <q-icon size="lg" :style="{ transform: `rotate(${rotation}deg)` }">
          <img src="../assets/knob_vector_1.svg"  alt="" style="width: 100px; height: 100px;"/>
        </q-icon>
      </div>

      </template>
    </q-knob>
  </div>
</template>

<script>
import {ref, defineComponent, computed} from "vue";

export default defineComponent({
  name: "Knob",
  props: {
    id: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "xl",
    },
    color: {
      type: String,
      default: "accent",
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    innerMax: {
      type: Number,
      default: 100,
    },
    thickness: {
      type: Number,
      default: 0.2,
    },
    position: {
      type: Number,
      default: 0,
    },
    step: {
      type: Number,
      default: 1,
    }
  },
  methods: {
    updateValue(newValue){
      // console.log("New value", newValue);
      this.value = newValue; // Update the value
      this.$emit('updateValue', newValue, this.id);
    }
  },
  setup(props) {
    const value = ref(0);
    const rotation = computed(() => (props.position * 360) / props.max);

    return {
      value,
      rotation
    }
  }
})
</script>

<style>
.q-icon img {
  pointer-events: none;
}

.knobContainer {
  margin-bottom: 4%;
}

</style>

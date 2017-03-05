/**
 * 封装的 Input Label Error 组件
 * @author xhinliang
 **/
<template>
  <div>
    <label class="label left">{{ this.label ? this.label : this.placeholder }}</label>
    <span :name="errorName" class="help is-danger right" v-if="isInvalid"> {{ this.errorHint }} </span>
    <p class="control">
      <input class="input" type="text" :placeholder="this.placeholder ? this.placeholder : this.label" v-model="localValue">
    </p>
  <div>
</template>

<script>
export default {
  props: {
    value: {
      required: false,
      default: null
    },
    requireNumber: {
      type: Boolean,
      required: false,
      default: true
    },
    errorHint: {
      type: String,
      required: false,
      default: 'error'
    },
    errorName: {
      type: String,
      required: false,
      default: 'span-error'
    },
    placeholder: {
      type: String,
      required: false,
      default: null
    },
    label: {
      type: String,
      required: false,
      default: 'label'
    },
    validate: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  data () {
    return {
      localValue: null
    }
  },

  methods: {
    isNumeric (n) {
      let result = !isNaN(parseFloat(n)) && isFinite(n)
      return result
    }
  },

  computed: {
    isInvalid () {
      let result = !this.validate || (this.requireNumber && !this.isNumeric(this.localValue))
      return result
    }
  },

  beforeMount () {
    this.localValue = this.value
  },

  mounted () {
    this.$emit('input', this.value)
  },

  /**
   * 父组件向子组件传递的 prop 数组不是双向绑定的,所以需要使用 emit
   * 在父组件中,需要使用
   * <xinput v-bind:value="something" v-on:input="something = $event.target.value"></xinput>
   * 或者
   * <xinput label="天线增益" v-model="paramLte.lte_antenna_gain" errorHint="输入有误" :validate="paramLte.lte_antenna_gain <= 20"></xinput>
   */
  watch: {
    localValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss">
.left {
  float: left;
  text-align: left;
}
.right {
  float: right;
  text-align: right;
}
</style>

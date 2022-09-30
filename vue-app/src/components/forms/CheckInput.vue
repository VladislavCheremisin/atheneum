<template>
  <div class="form-check">
    <input class="form-check-input" :required="required" :checked="checked"  type="checkbox" :value="value"
           :name="name" :id="name">
    <label class="form-check-label" :for="name">{{label}}</label>
  </div>
</template>

<script>
export default {
  name: "CheckInput",
  props: ["name", "required", "label", "value", "checked"]
}
</script>
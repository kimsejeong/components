<template>
  <a-form-item
    :class="[item.class||'', 'c-mb-8']"
  >
    <template slot="label">
      <template v-if="item.label.length < 7"> {{ item.label }} </template>
    <a-tooltip v-else placement="bottom">
      <template slot="title">
        <span> {{ item.label }}</span>
      </template>
      <span class="ellipsis title"> {{ item.label }}</span>
    </a-tooltip>
    </template>
    <a-input
      :allowClear="item.allowClear || true"
      v-decorator="[item.key, { rules: [], initialValue: item.initialValue }]"
      :placeholder="item.placeholder || '请输入'"
    />
  </a-form-item>
</template>
<script>
export default {
  name:"ZtqDcInput",
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
</style>

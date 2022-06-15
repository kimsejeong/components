<template>
  <a-form-item :class="[item.class||'', 'c-mb-8']">
    <template slot="label">
      <template v-if="item.label.length < 7"> {{ item.label }} </template>
    <a-tooltip v-else placement="bottom">
      <template slot="title">
        <span> {{ item.label }}</span>
      </template>
      <span class="ellipsis title"> {{ item.label }}</span>
    </a-tooltip>
    </template>
    <a-select
      v-decorator="[item.key, { initialValue: item.initialValue || undefined }]"
      :mode="item.selectMode"
      :showSearch="item.showSearch || false"
      :allowClear="item.allowClear || true"
      :placeholder="item.placeholder || '请选择'"
      :maxTagCount="item.maxTagCount"
      :filterOption="item.filterOption"
      @change="handleChange"
      @search="handleSearch"
      @blur="handleBlur"
      @dropdownVisibleChange="dropdownVisibleChange"
      :getPopupContainer="getPopupContainer"
      :dropdownMatchSelectWidth="false"
    >
      <a-select-option
        v-for="$item in options"
        :key="$item[item.responseOptions ? item.responseOptions.key : 'key']"
      >
        {{ $item[item.responseOptions ? item.responseOptions.name : 'name'] }}
      </a-select-option>
    </a-select>
  </a-form-item>
</template>
<script>
export default {
  name:"ZtqDcSelect",
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      },}
  },
  data() {
    return {
      options: [],
      oldOptions: [],
    }
  },
  methods: {
    getPopupContainer(trigger) {
      return trigger.parentElement
    },
    handleSearch(value) {
      if (!value) {
        this.options = this.oldOptions
        return
      }
      let arr = []
      arr = this.options.filter(el => {
        return el.masterBrandName.indexOf(value) != -1
      })
      this.options = arr
    },
    handleChange(value) {
      if (value && value.length == 0 && this.item.showSearch) {
        this.options = this.oldOptions
      }
      this.$parent.$parent.$emit('handleChange', { value, item: this.item })
      // 是否开启自动查询
      if (this.item.autoSearch) {
        this.$parent.$parent.changeHandle()
      }
    },
    handleBlur() {
      if (this.item.showSearch) {
        this.options = this.oldOptions
      }
    },
    dropdownVisibleChange() {
      if (!this?.options?.length && this?.item?.requestOptions?.url) {
        this.getSelect()
      }
    },
    async getSelect() {
      this.$http({
        url: this.item.requestOptions.url,
        method: 'post',
        data: this.item.requestOptions.data,
      }).then(res => {
        let resultKey = this.item.responseOptions.resultKey
        // 如果接口的下拉数据是多个数组的
        if (resultKey) {
          this.oldOptions = this.options = res[resultKey]
        } else {
          this.oldOptions = this.options = res
        }
      })
    },
  },
  created() {
    this.options = this.item.data
    this.oldOptions = this.item.data
  },
}
</script>
<style lang="less" scoped>
.title {
  display: block;
  padding: 0 2px;
}
</style>

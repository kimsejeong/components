<template>
  <a-form
    layout="inline"
    :class="[searchOptions.class||'', 'lable-border default-search']"
    :form="form"
  >
    <!-- 手动查询条件 -->
    <template v-for="(item, $index) of searchOptions.search.manual">
      <component :is="item.type" :item="item" :key="$index" />
    </template>
    <!-- 按钮 -->
    <a-space>
      <a-button type="primary" @click="searchHandle">
        查询
      </a-button>
      <!-- 根据判断隐藏查询条件是否存在来是否显示更多按钮 -->
      <div
        v-if="
          searchOptions.search.hidden && searchOptions.search.hidden.length > 0
        "
        @click="showMoreFunction"
      >
        <a-button type="link" v-show="!showMore">
          更多筛选<a-icon type="down" />
        </a-button>
        <a-button type="link" v-show="showMore">
          收起筛选<a-icon type="up" />
        </a-button>
      </div>
    </a-space>
    <!-- 自动查询条件 -->
    <template v-for="(item, $index) of searchOptions.search.auto">
      <component :is="item.type" :item="item" :key="$index" />
    </template>
    <!-- 按钮区域 -->
    <template>
      <template v-if="searchOptions.buttons">
        <!-- 右侧导入按钮 -->
        <a-space
          style="float:right"
          class="c-ml-8"
          v-if="searchOptions.buttons.import"
          @click="importHandle"
        >
          <a-button type="default">
            {{ searchOptions.buttons.import.text || '导入' }}
          </a-button>
        </a-space>
        <!-- 右侧添加按钮 -->
        <a-space
          style="float:right"
          v-if="searchOptions.buttons.add"
          @click="addHandle"
        >
          <a-button type="green">
            {{ searchOptions.buttons.add.text || '添加' }}
          </a-button>
        </a-space>
      </template>
      <!-- 按钮插槽 -->
      <a-space class="buttons">
        <slot name="buttons" />
      </a-space>
    </template>
    <!-- 隐藏查询条件 -->
    <div class="hidden-list" v-show="showMore">
      <template v-for="(item, $index) of searchOptions.search.hidden">
        <component :is="item.type" :item="item" :key="$index" />
      </template>
    </div>
  </a-form>
</template>

<script>
import Input from '../../input-search'
import Select from '../../select-search'

export default {
  name: 'ZtqDcSearchFilter',
  props: {
    searchOptions: {
      type: Object,
    },
  },
  data() {
    return {
      showMore: false,
      form: this.$form.createForm(this),
    }
  },
  components: {
    Input,
    Select,
  },
  methods: {
    showMoreFunction() {
      this.showMore = !this.showMore
      this.$emit('showMoreHandle', this.showMore)
    },
    // 查询后面条件 改变自动 查询
    changeHandle() {
      // change 事件 立马执行 获取form get 过早
      setTimeout(() => {
        this.searchHandle()
      })
    },
    // 查询
    searchHandle() {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$emit('searchHandle', values)
        }
      })
    },
    // 添加
    addHandle() {
      this.$emit('addHandle')
    },
    // 导入
    importHandle() {
      this.$emit('importHandle')
    },
    // 设置某一项或者多项的form
    setFormValue(obj = {}) {
      this.$nextTick(() => {
        this.form.setFieldsValue(obj)
      })
    },
    /** 清空所有数据 */
    clearHandle() {
      let fieldsValue = this.form.getFieldsValue()
      Object.keys(fieldsValue).forEach(key => {
        fieldsValue[key] = undefined
      })

      this.$nextTick(() => {
        this.form.setFieldsValue(fieldsValue)
      })
    },
    /** 重置回默认状态 */
    resetHandle() {
      this.form.resetFields()
    },
    /** 是否展开 */
    isExpend(val = false) {
      this.showMore = val
    },
  },
}
</script>

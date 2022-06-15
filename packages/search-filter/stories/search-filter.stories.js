import ZtqDcSearchFilter from '../src/search-filter.vue'

export default {
  title: 'ZtqDcSearchFilter',
  component: ZtqDcSearchFilter
}

export const SearchFilter = _ => ({
  components: { ZtqDcSearchFilter },
  data() {
    return {
      searchOptions: {
        // 查询条件： manual： 手动查询、auto: 自动查询、hidden: 隐藏查询
        search: {
          manual: [
            // 默认写死下拉框
            {
              type: 'Select',
              label: '类型',
              key: 'Select',
              // 是否开启自动查询
              autoSearch: true,
              data: [
                {
                  name: '第一个',
                  key: 1,
                },
                {
                  name: '第二个',
                  key: 2,
                },
              ],
            },
            // 文本框
            {
              type: 'Input',
              label: '车辆信息',
              key: 'test',
              // 是否要两倍宽度
              doubleWidth: true,
              placeholder: '车主姓名/号码号牌/车架号',
            },
          ],
          auto: [

          ],
          hidden: [
            // 默认写死下拉框
            {
              type: 'Select',
              label: '类型',
              key: 'Select',
              // 是否开启自动查询
              autoSearch: true,
              data: [
                {
                  name: '第一个',
                  key: 1,
                },
                {
                  name: '第二个',
                  key: 2,
                },
              ],
            },
            // 文本框
            {
              type: 'Input',
              label: '车辆信息',
              key: 'test',
              // 是否要两倍宽度
              doubleWidth: true,
              placeholder: '车主姓名/号码号牌/车架号',
            },
          ],
        },
        // 按钮： 查询按钮：search、更多按钮： more、添加按钮： add
        buttons: {
          search: {},
          more: {},
          add: {
            text: '添加订单',
            icon: 'plus',
          },
        },
      },
    }
  },
  methods: {
    addHandle() {
      console.log('触发添加')
    },
    searchHandle(values) {
      console.log(values, '触发查询条件')
    },
    //getSearchQueryByOutParam 对应的回调函数setSearchQuery
    setSearchQuery(values) {
      console.log(values, '==所有 查询条件的值============')
      let { ddd, ccd } = values
      // 取部分条件作为请求参数
      return { ddd, ccd }
    },
    // 清除数据
    clearHandle() {
      this.$refs.Search.clearHandle()
    },
    // 重置回默认状态
    resetHandle() {
      this.$refs.Search.resetHandle()
    },
    // 控制展开收起
    isExpend() {
      this.$refs.Search.isExpend(true)
    },
    // 设置某一项或者多项的form
    setFormValue() {
      let obj = {}
      this.$refs.Search.setFormValue(obj)
    },
  },
  template: `
  <div>
    <ztq-dc-search-filter
      ref="Search"
      class="c-m-8"
      :searchOptions="searchOptions"
      @addHandle="addHandle"
      @searchHandle="searchHandle">
    </ztq-dc-search-filter>
  </div>
`
})
import ZtqDcSelect from '../src/select.vue'

export default {
title: 'ZtqDcSelect',
component: ZtqDcSelect
}

export const Select = _ => ({
components: { ZtqDcSelect },
template: `
<div>
  <ztq-dc-select></ztq-dc-select>
</div>
`
})
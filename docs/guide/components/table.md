# 表格 Table

<GlobalElement />

*展示行列数据*

## 何时使用

- 当有大量结构化的数据需要展现时
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时

<script setup lang="ts">
import { ref, reactive, onBeforeMount, computed, watchEffect, h } from 'vue'
import { SmileOutlined, PlusOutlined, CheckOutlined, EditOutlined } from '@ant-design/icons-vue'
const loading = ref(false)
const tableLoading = ref(false)
const sizeBordered = ref(true)
const stripedBordered = ref(true)
const headerFooterbordered = ref(true)
const queryParams = reactive({
  pageSize: 10,
  page: 1
})
const sizeOptions = [
  {
    label: 'small',
    value: 'small'
  },
  {
    label: 'middle',
    value: 'middle'
  },
  {
    label: 'large',
    value: 'large'
  }
]
const size = ref('middle')
const columns = reactive([
  {
    title: 'Name',
    width: 100,
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    width: 60,
    dataIndex: 'age'
  },
  {
    title: 'Job',
    width: 80,
    dataIndex: 'job',
    key: 'job'
  },
  {
    title: 'Sex',
    width: 60,
    dataIndex: 'sex',
    key: 'sex'
  },
  {
    title: 'Address',
    width: 120,
    dataIndex: 'address'
  },
  {
    title: 'Action',
    width: 150,
    key: 'action'
  }
])
const columnsSize = reactive([
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Address', dataIndex: 'address' }
])
const columnsStriped = reactive([
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Job',
    dataIndex: 'job'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
])
const columnsEllipsis = reactive([
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 80
  },
  {
    title: 'Address',
    dataIndex: 'address',
    ellipsis: true
  },
  {
    title: 'Long Header Cell Long Header Cell',
    dataIndex: 'address',
    ellipsis: true
  },
  {
    title: 'Long Header Cell',
    dataIndex: 'address',
    ellipsis: true
  },
  {
    title: 'Long Header Cell',
    dataIndex: 'address',
    ellipsis: true
  }
])
const sharedOnCell = (record: any, index: number) => {
  if (index === 4) {
    return { colSpan: 0 }
  }
}
const columnsMerge = [
  {
    title: 'Name',
    dataIndex: 'name',
    customCell: (record: any, index: number) => {
      return {
        colSpan: index < 4 ? 1 : 5
      }
    }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    customCell: sharedOnCell
  },
  {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel',
    customCell: (record: any, index: number) => {
      if (index === 2) {
        return { rowSpan: 2 }
      }
      // These two are merged into above cell
      if (index === 3) {
        return { rowSpan: 0 }
      }
      if (index === 4) {
        return { colSpan: 0 }
      }
    }
  },
  {
    title: 'Phone',
    colSpan: 0,
    dataIndex: 'phone',
    customCell: (record: any, index: number) => {
      if (index === 1) {
        return { rowSpan: 3 }
      }
      if (index === 2) {
        return { rowSpan: 0 }
      }
      if (index === 3) {
        return { rowSpan: 0 }
      }
      if (index === 4) {
        return { colSpan: 0 }
      }
    }
  },
  {
    title: 'Address',
    dataIndex: 'address',
    customCell: sharedOnCell
  }
]
const columnsCellEditable = reactive([
  {
    title: 'Name',
    dataIndex: 'name',
    width: '30%'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  },
  {
    title: 'Action',
    dataIndex: 'action'
  }
])
const columnsRowEditable = reactive([
  {
    title: 'Name',
    dataIndex: 'name',
    width: '25%'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: '15%'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '40%'
  },
  {
    title: 'Action',
    dataIndex: 'action'
  }
])
const columnsExpandable = reactive([
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  { title: 'Action', key: 'action' }
])
const columnsFixColumn = reactive([
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'action',
    fixed: 'right',
    width: 100
  }
])
const columnsFixHeader = reactive([
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
])
const columnsFixHeaderAndColumn = reactive([
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
  { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
  { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
  { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
  { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
  { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'action',
    fixed: 'right',
    width: 100
  }
])
const dataSource = ref([
  {
    name: 'Stephen Curry',
    age: 30,
    job: 'Player',
    sex: 'boy',
    address: 'Chase Center, San Francisco, California'
  },
  {
    name: 'the Muse Catcher',
    age: 24,
    job: 'None',
    sex: 'boy',
    address: 'Beijing, China'
  },
  {
    name: 'Wonder Woman',
    age: 32,
    job: 'Hero',
    sex: 'girl',
    address: 'Tel Aviv, Israel'
  },
  {
    name: 'Superman',
    age: 32,
    job: 'Hero',
    sex: 'boy',
    address: 'United States'
  },
  {
    name: 'Leo',
    age: 36,
    job: 'Actor',
    sex: 'boy',
    address: 'Los Angeles'
  }
])
const dataSourceSize = ref([
  {
    key: '1',
    name: 'Stephen Curry',
    age: 30,
    address: 'Chase Center, GSW'
  },
  {
    key: '2',
    name: 'the Muse Catcher',
    age: 24,
    address: 'Beijing, China'
  },
  {
    key: '3',
    name: 'Wonder Woman',
    age: 32,
    address: 'Tel Aviv, Israel'
  }
])
const dataSourcesStriped = ref([
  {
    name: 'Stephen Curry',
    age: 30,
    job: 'Player',
    address: 'Chase Center, San Francisco, California'
  },
  {
    name: 'the Muse Catcher',
    age: 24,
    job: 'None',
    address: 'Beijing, China'
  },
  {
    name: 'Wonder Woman',
    age: 32,
    job: 'Hero',
    address: 'Tel Aviv, Israel'
  },
  {
    name: 'Superman',
    age: 32,
    job: 'Hero',
    address: 'United States'
  },
  {
    name: 'Leo',
    age: 36,
    job: 'Actor',
    address: 'Los Angeles'
  }
])
const dataSourceMerge = ref([
  {
    name: 'Stephen Curry',
    age: 30,
    tel: '0666-12098909',
    phone: 18889898989,
    address: 'Chase Center, San Francisco, California'
  },
  {
    name: 'the Muse Catcher',
    age: 24,
    tel: '0666-22098333',
    phone: 18899998888,
    address: 'Beijing, China'
  },
  {
    name: 'Wonder Woman',
    age: 32,
    tel: '0888-32098909',
    phone: 18899998888,
    address: 'Tel Aviv, Israel'
  },
  {
    name: 'Superman',
    age: 32,
    tel: '0888-32098909',
    phone: 18899998888,
    address: 'United States'
  },
  {
    name: 'Leo',
    age: 36,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Los Angeles'
  }
])
const dataSourceCellEditable = ref([
  {
    key: '0',
    name: 'Edward King 0',
    age: 32,
    address: 'London, Park Lane no. 0'
  },
  {
    key: '1',
    name: 'Edward King 1',
    age: 32,
    address: 'London, Park Lane no. 1'
  }
])
const data: any[] = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  })
}
const dataSourceRowEditable = ref<any[]>(data.slice(0, 10))
const dataSourceExpandable = ref([
  {
    key: 1,
    name: 'Superman',
    age: 32,
    address: 'New York No.1 Lake Park',
    description: 'My name is Superman, I am 32 years old, living in New York No.1 Lake Park.'
  },
  {
    key: 2,
    name: 'Spiderman',
    age: 22,
    address: 'London No.2 Lake Park',
    description: 'My name is Spiderman, I am 42 years old, living in London No.2 Lake Park.'
  },
  {
    key: 3,
    name: 'Ironman',
    age: 36,
    address: 'Sidney No.3 Lake Park',
    description: 'My name is Ironman, I am 32 years old, living in Sidney No.3 Lake Park.'
  }
])
const dataSourceFixColumn = ref([
  {
    key: '1',
    name: 'Stephen Curry',
    age: 30,
    address: 'Chase Center, GSW'
  },
  {
    key: '2',
    name: 'the Muse Catcher',
    age: 24,
    address: 'Beijing, China'
  },
  {
    key: '3',
    name: 'Wonder Woman',
    age: 32,
    address: 'Tel Aviv, Israel'
  }
])
const dataSourceFixHeader = ref(data)
const dataSourceFixHeaderAndColumn = ref(data)
onBeforeMount(() => {
  getData()
})
function getData() {
  loading.value = true
  // 模拟异步请求获取数据
  setTimeout(() => {
    loading.value = false
  }, 1500)
}
function onChange(page: number, pageSize: number) {
  queryParams.page = page
  queryParams.pageSize = pageSize
  getData()
}
const cellEditableData = reactive<any>({})
const count = computed(() => dataSourceCellEditable.value.length + 1)
const handleCellAdd = () => {
  const newData = {
    key: `${count.value}`,
    name: `Edward King ${count.value}`,
    age: 32,
    address: `London, Park Lane no. ${count.value}`
  }
  dataSourceCellEditable.value.push(newData)
}
const handleCellEdit = (key: string) => {
  cellEditableData[key] = dataSourceCellEditable.value.filter((item) => key === item.key)[0]
}
const handleCellSave = (key: string) => {
  Object.assign(dataSourceCellEditable.value.filter((item) => key === item.key)[0], cellEditableData[key])
  delete cellEditableData[key]
}
const handleCellDelete = (key: string) => {
  dataSourceCellEditable.value = dataSourceCellEditable.value.filter((item) => item.key !== key)
}
const rowEditableData = reactive<any>({})
const handleRowEdit = (key: string) => {
  rowEditableData[key] = dataSourceRowEditable.value.filter((item) => key === item.key)[0]
}
const handleRowSave = (key: string) => {
  Object.assign(dataSourceCellEditable.value.filter((item) => key === item.key)[0], rowEditableData[key])
  delete rowEditableData[key]
}
const handleRowCancel = (key: string) => {
  delete rowEditableData[key]
}
const handleTableChange = (page: number, pageSize: number) => {
  tableLoading.value = true
  setTimeout(() => {
    dataSourceRowEditable.value = data.slice((page - 1) * pageSize, page * pageSize)
    tableLoading.value = false
  }, 500)
}
const expandedRowKeys = ref([1])
watchEffect(() => {
  console.log('expandedRowKeys', expandedRowKeys.value)
})
</script>

## 基本使用

<Table
  :columns="columns"
  :dataSource="dataSource"
  :pagination="{
    showTotal: true
  }"
  :loading="loading"
  @change="onChange"
>
  <template #headerCell="{ column, title }">
    <template v-if="column.key === 'name'"> <SmileOutlined /> {{ title }} </template>
  </template>
  <template #bodyCell="{ column, record }">
    <template v-if="column.key === 'name'">
      <a> hello {{ record.name }} </a>
    </template>
    <template v-else-if="column.key === 'sex'">
      <Tag v-if="record.sex === 'boy'" color="volcano">{{ record.sex }}</Tag>
      <Tag v-else-if="record.sex === 'girl'" color="magenta">{{ record.sex }}</Tag>
    </template>
    <template v-else-if="column.key === 'action'">
      <span>
        <a>Invite {{ record.name }}</a>
        <Divider vertical />
        <a>Delete</a>
      </span>
    </template>
  </template>
</Table>

::: details Show Code

```vue
<script setup lang="ts">
import { ref, reactive, onBeforeMount } from 'vue'
import { SmileOutlined } from '@ant-design/icons-vue'
const loading = ref(false)
const queryParams = reactive({
  pageSize: 10,
  page: 1
})
const columns = reactive([
  {
    title: 'Name',
    width: 100,
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    width: 60,
    dataIndex: 'age'
  },
  {
    title: 'Job',
    width: 80,
    dataIndex: 'job',
    key: 'job'
  },
  {
    title: 'Sex',
    width: 60,
    dataIndex: 'sex',
    key: 'sex'
  },
  {
    title: 'Address',
    width: 120,
    dataIndex: 'address'
  },
  {
    title: 'Action',
    width: 150,
    key: 'action'
  }
])
const dataSource = ref([
  {
    name: 'Stephen Curry',
    age: 30,
    job: 'Player',
    sex: 'boy',
    address: 'Chase Center, San Francisco, California'
  },
  {
    name: 'the Muse Catcher',
    age: 24,
    job: 'None',
    sex: 'boy',
    address: 'Beijing, China'
  },
  {
    name: 'Wonder Woman',
    age: 32,
    job: 'Hero',
    sex: 'girl',
    address: 'Tel Aviv, Israel'
  },
  {
    name: 'Superman',
    age: 32,
    job: 'Hero',
    sex: 'boy',
    address: 'United States'
  },
  {
    name: 'Leo',
    age: 36,
    job: 'Actor',
    sex: 'boy',
    address: 'Los Angeles'
  }
])
onBeforeMount(() => {
  getData()
})
function getData() {
  loading.value = true
  // 模拟异步请求获取数据
  setTimeout(() => {
    loading.value = false
  }, 1500)
}
function onChange(page: number, pageSize: number) {
  queryParams.page = page
  queryParams.pageSize = pageSize
  getData()
}
</script>
<template>
  <Table
    :columns="columns"
    :dataSource="dataSource"
    :pagination="{
      showTotal: true
    }"
    :loading="loading"
    @change="onChange"
  >
    <template #headerCell="{ column, title }">
      <template v-if="column.key === 'name'"> <SmileOutlined /> {{ title }} </template>
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <a> hello {{ record.name }} </a>
      </template>
      <template v-else-if="column.key === 'sex'">
        <Tag v-if="record.sex === 'boy'" color="volcano">{{ record.sex }}</Tag>
        <Tag v-else-if="record.sex === 'girl'" color="magenta">{{ record.sex }}</Tag>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          <a>Invite {{ record.name }}</a>
          <Divider vertical />
          <a>Delete</a>
        </span>
      </template>
    </template>
  </Table>
</template>
```

:::

## 加载中

<Flex vertical>
  <Table :columns="columns" loading />
  <Table :columns="columns" loading :spin-props="{ indicator: 'dynamic-circle' }" />
</Flex>

::: details Show Code

```vue
<script setup lang="ts">
import { reactive } from 'vue'
const columns = reactive([
  {
    title: 'Name',
    width: 100,
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    width: 60,
    dataIndex: 'age'
  },
  {
    title: 'Job',
    width: 80,
    dataIndex: 'job',
    key: 'job'
  },
  {
    title: 'Sex',
    width: 60,
    dataIndex: 'sex',
    key: 'sex'
  },
  {
    title: 'Address',
    width: 120,
    dataIndex: 'address'
  },
  {
    title: 'Action',
    width: 150,
    key: 'action'
  }
])
</script>
<template>
  <Flex vertical>
    <Table :columns="columns" loading />
    <Table :columns="columns" loading :spin-props="{ indicator: 'dynamic-circle' }" />
  </Flex>
</template>
```

:::

## 暂无数据

<Flex vertical>
  <Table :columns="columns" />
  <Table :columns="columns" :empty-props="{ description: 'no data', image: 'filled' }" />
</Flex>

::: details Show Code

```vue
<script setup lang="ts">
import { reactive } from 'vue'
const columns = reactive([
  {
    title: 'Name',
    width: 100,
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    width: 60,
    dataIndex: 'age'
  },
  {
    title: 'Job',
    width: 80,
    dataIndex: 'job',
    key: 'job'
  },
  {
    title: 'Sex',
    width: 60,
    dataIndex: 'sex',
    key: 'sex'
  },
  {
    title: 'Address',
    width: 120,
    dataIndex: 'address'
  },
  {
    title: 'Action',
    width: 150,
    key: 'action'
  }
])
</script>
<template>
  <Flex vertical>
    <Table :columns="columns" />
    <Table :columns="columns" :empty-props="{ description: 'no data', image: 'filled' }" />
  </Flex>
</template>
```

:::

## 带边框

<Table
  :columns="columns"
  :data-source="dataSource"
  :pagination="{
    showTotal: true
  }"
  bordered
>
  <template #headerCell="{ column, title }">
    <template v-if="column.key === 'name'"> <SmileOutlined /> {{ title }} </template>
  </template>
  <template #bodyCell="{ column, record }">
    <template v-if="column.key === 'name'">
      <a> hello {{ record.name }} </a>
    </template>
    <template v-else-if="column.key === 'sex'">
      <Tag v-if="record.sex === 'boy'" color="volcano">{{ record.sex }}</Tag>
      <Tag v-else-if="record.sex === 'girl'" color="magenta">{{ record.sex }}</Tag>
    </template>
    <template v-else-if="column.key === 'action'">
      <span>
        <a>Invite {{ record.name }}</a>
        <Divider vertical />
        <a>Delete</a>
      </span>
    </template>
  </template>
</Table>

::: details Show Code

```vue
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { SmileOutlined } from '@ant-design/icons-vue'
const columns = reactive([
  {
    title: 'Name',
    width: 100,
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    width: 60,
    dataIndex: 'age'
  },
  {
    title: 'Job',
    width: 80,
    dataIndex: 'job',
    key: 'job'
  },
  {
    title: 'Sex',
    width: 60,
    dataIndex: 'sex',
    key: 'sex'
  },
  {
    title: 'Address',
    width: 120,
    dataIndex: 'address'
  },
  {
    title: 'Action',
    width: 150,
    key: 'action'
  }
])
const dataSource = ref([
  {
    name: 'Stephen Curry',
    age: 30,
    job: 'Player',
    sex: 'boy',
    address: 'Chase Center, San Francisco, California'
  },
  {
    name: 'the Muse Catcher',
    age: 24,
    job: 'None',
    sex: 'boy',
    address: 'Beijing, China'
  },
  {
    name: 'Wonder Woman',
    age: 32,
    job: 'Hero',
    sex: 'girl',
    address: 'Tel Aviv, Israel'
  },
  {
    name: 'Superman',
    age: 32,
    job: 'Hero',
    sex: 'boy',
    address: 'United States'
  },
  {
    name: 'Leo',
    age: 36,
    job: 'Actor',
    sex: 'boy',
    address: 'Los Angeles'
  }
])
</script>
<template>
  <Table
    :columns="columns"
    :data-source="dataSource"
    :pagination="{
      showTotal: true
    }"
    bordered
  >
    <template #headerCell="{ column, title }">
      <template v-if="column.key === 'name'"> <SmileOutlined /> {{ title }} </template>
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <a> hello {{ record.name }} </a>
      </template>
      <template v-else-if="column.key === 'sex'">
        <Tag v-if="record.sex === 'boy'" color="volcano">{{ record.sex }}</Tag>
        <Tag v-else-if="record.sex === 'girl'" color="magenta">{{ record.sex }}</Tag>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          <a>Invite {{ record.name }}</a>
          <Divider vertical />
          <a>Delete</a>
        </span>
      </template>
    </template>
  </Table>
</template>
```

:::

## 三种尺寸

*另两种紧凑型的列表；小型列表适用于对话框内*

<br/>

<Flex vertical>
  <Space align="center"> bordered: <Switch v-model="sizeBordered" /> </Space>
  <Radio :options="sizeOptions" v-model:value="size" button button-style="solid" />
  <Table :columns="columnsSize" :data-source="dataSourceSize" :size="size" :bordered="sizeBordered" />
</Flex>

::: details Show Code

```vue
<script setup lang="ts">
import { ref, reactive } from 'vue'
const sizeBordered = ref(true)
const sizeOptions = [
  {
    label: 'small',
    value: 'small'
  },
  {
    label: 'middle',
    value: 'middle'
  },
  {
    label: 'large',
    value: 'large'
  }
]
const size = ref('middle')
const columnsSize = reactive([
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Address', dataIndex: 'address' }
])
const dataSourceSize = ref([
  {
    key: '1',
    name: 'Stephen Curry',
    age: 30,
    address: 'Chase Center, GSW'
  },
  {
    key: '2',
    name: 'the Muse Catcher',
    age: 24,
    address: 'Beijing, China'
  },
  {
    key: '3',
    name: 'Wonder Woman',
    age: 32,
    address: 'Tel Aviv, Israel'
  }
])
</script>
<template>
  <Flex vertical>
    <Space align="center"> bordered: <Switch v-model="sizeBordered" /> </Space>
    <Radio :options="sizeOptions" v-model:value="size" button button-style="solid" />
    <Table :columns="columnsSize" :data-source="dataSourceSize" :size="size" :bordered="sizeBordered" />
  </Flex>
</template>
```

:::

## 斑马条纹

<Flex vertical>
  <Space align="center"> bordered: <Switch v-model="stripedBordered" /> </Space>
  <Table :columns="columnsStriped" :data-source="dataSourcesStriped" striped :bordered="stripedBordered" />
</Flex>

::: details Show Code

```vue
<script setup lang="ts">
import { ref, reactive } from 'vue'
const stripedBordered = ref(true)
const columnsStriped = reactive([
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Job',
    dataIndex: 'job'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
])
const dataSourcesStriped = ref([
  {
    name: 'Stephen Curry',
    age: 30,
    job: 'Player',
    address: 'Chase Center, San Francisco, California'
  },
  {
    name: 'the Muse Catcher',
    age: 24,
    job: 'None',
    address: 'Beijing, China'
  },
  {
    name: 'Wonder Woman',
    age: 32,
    job: 'Hero',
    address: 'Tel Aviv, Israel'
  },
  {
    name: 'Superman',
    age: 32,
    job: 'Hero',
    address: 'United States'
  },
  {
    name: 'Leo',
    age: 36,
    job: 'Actor',
    address: 'Los Angeles'
  }
])
</script>
<template>
  <Flex vertical>
    <Space align="center"> bordered: <Switch v-model="stripedBordered" /> </Space>
    <Table :columns="columnsStriped" :data-source="dataSourcesStriped" striped :bordered="stripedBordered" />
  </Flex>
</template>
```

:::

## 页头和页脚

<Flex vertical>
  <Space align="center"> bordered: <Switch v-model="headerFooterbordered" /> </Space>
  <Table :columns="columns" :data-source="dataSource" :bordered="headerFooterbordered">
    <template #header> Header firstData name: {{ dataSource[0].name }} </template>
    <template #bodyCell="{ column, text }">
      <template v-if="column.key === 'name'">
        <a> hello {{ text }} </a>
      </template>
      <template v-else-if="column.key === 'sex'">
        <Tag v-if="text === 'boy'" color="volcano">{{ text }}</Tag>
        <Tag v-else-if="text === 'girl'" color="magenta">{{ text }}</Tag>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          <a>Invite</a>
          <Divider vertical />
          <a>Delete</a>
        </span>
      </template>
    </template>
    <template #footer> Footer lastData name: {{ dataSource[dataSource.length - 1].name }} </template>
  </Table>
</Flex>

::: details Show Code

```vue
<script setup lang="ts">
import { ref, reactive } from 'vue'
const headerFooterbordered = ref(true)
const columns = reactive([
  {
    title: 'Name',
    width: 100,
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    width: 60,
    dataIndex: 'age'
  },
  {
    title: 'Job',
    width: 80,
    dataIndex: 'job',
    key: 'job'
  },
  {
    title: 'Sex',
    width: 60,
    dataIndex: 'sex',
    key: 'sex'
  },
  {
    title: 'Address',
    width: 120,
    dataIndex: 'address'
  },
  {
    title: 'Action',
    width: 150,
    key: 'action'
  }
])
const dataSource = ref([
  {
    name: 'Stephen Curry',
    age: 30,
    job: 'Player',
    sex: 'boy',
    address: 'Chase Center, San Francisco, California'
  },
  {
    name: 'the Muse Catcher',
    age: 24,
    job: 'None',
    sex: 'boy',
    address: 'Beijing, China'
  },
  {
    name: 'Wonder Woman',
    age: 32,
    job: 'Hero',
    sex: 'girl',
    address: 'Tel Aviv, Israel'
  },
  {
    name: 'Superman',
    age: 32,
    job: 'Hero',
    sex: 'boy',
    address: 'United States'
  },
  {
    name: 'Leo',
    age: 36,
    job: 'Actor',
    sex: 'boy',
    address: 'Los Angeles'
  }
])
</script>
<template>
  <Flex vertical>
    <Space align="center"> bordered: <Switch v-model="headerFooterbordered" /> </Space>
    <Table :columns="columns" :data-source="dataSource" :bordered="headerFooterbordered">
      <template #header> Header firstData name: {{ dataSource[0].name }} </template>
      <template #bodyCell="{ column, text }">
        <template v-if="column.key === 'name'">
          <a> hello {{ text }} </a>
        </template>
        <template v-else-if="column.key === 'sex'">
          <Tag v-if="text === 'boy'" color="volcano">{{ text }}</Tag>
          <Tag v-else-if="text === 'girl'" color="magenta">{{ text }}</Tag>
        </template>
        <template v-else-if="column.key === 'action'">
          <span>
            <a>Invite</a>
            <Divider vertical />
            <a>Delete</a>
          </span>
        </template>
      </template>
      <template #footer> Footer lastData name: {{ dataSource[dataSource.length - 1].name }} </template>
    </Table>
  </Flex>
</template>
```

:::

## 单元格自动省略

*设置 `column.ellipsis` 可以让单元格内容根据宽度自动省略*

<br/>

<Table :columns="columnsEllipsis" :data-source="dataSource">
  <template #bodyCell="{ column, text }">
    <template v-if="column.dataIndex === 'name'">
      <a>{{ text }}</a>
    </template>
  </template>
</Table>

::: details Show Code

```vue
<script setup lang="ts">
import { ref, reactive } from 'vue'
const columnsEllipsis = reactive([
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 80
  },
  {
    title: 'Address',
    dataIndex: 'address',
    ellipsis: true
  },
  {
    title: 'Long Header Cell Long Header Cell',
    dataIndex: 'address',
    ellipsis: true
  },
  {
    title: 'Long Header Cell',
    dataIndex: 'address',
    ellipsis: true
  },
  {
    title: 'Long Header Cell',
    dataIndex: 'address',
    ellipsis: true
  }
])
const dataSource = ref([
  {
    name: 'Stephen Curry',
    age: 30,
    job: 'Player',
    sex: 'boy',
    address: 'Chase Center, San Francisco, California'
  },
  {
    name: 'the Muse Catcher',
    age: 24,
    job: 'None',
    sex: 'boy',
    address: 'Beijing, China'
  },
  {
    name: 'Wonder Woman',
    age: 32,
    job: 'Hero',
    sex: 'girl',
    address: 'Tel Aviv, Israel'
  },
  {
    name: 'Superman',
    age: 32,
    job: 'Hero',
    sex: 'boy',
    address: 'United States'
  },
  {
    name: 'Leo',
    age: 36,
    job: 'Actor',
    sex: 'boy',
    address: 'Los Angeles'
  }
])
</script>
<template>
  <Table :columns="columnsEllipsis" :data-source="dataSource">
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
    </template>
  </Table>
</template>
```

:::

## 合并单元格

*表头只支持列合并，使用 `column` 里的 `colSpan` 进行设置；表格支持行/列合并，使用 `customCell` 将单元格属性 `colSpan` 或 `rowSpan` 设为 `0` 时，设置的表格不会渲染*

<br/>

<Table :columns="columnsMerge" :data-source="dataSourceMerge" bordered>
  <template #bodyCell="{ column, text }">
    <template v-if="column.dataIndex === 'name'">
      <a href="javascript:;">{{ text }}</a>
    </template>
  </template>
</Table>

::: details Show Code

```vue
<script setup lang="ts">
import { ref, reactive } from 'vue'
const sharedOnCell = (record: any, index: number) => {
  if (index === 4) {
    return { colSpan: 0 }
  }
}
const columnsMerge = [
  {
    title: 'Name',
    dataIndex: 'name',
    customCell: (record: any, index: number) => {
      return {
        colSpan: index < 4 ? 1 : 5
      }
    }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    customCell: sharedOnCell
  },
  {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel',
    customCell: (record: any, index: number) => {
      if (index === 2) {
        return { rowSpan: 2 }
      }
      // These two are merged into above cell
      if (index === 3) {
        return { rowSpan: 0 }
      }
      if (index === 4) {
        return { colSpan: 0 }
      }
    }
  },
  {
    title: 'Phone',
    colSpan: 0,
    dataIndex: 'phone',
    customCell: (record: any, index: number) => {
      if (index === 1) {
        return { rowSpan: 3 }
      }
      if (index === 2) {
        return { rowSpan: 0 }
      }
      if (index === 3) {
        return { rowSpan: 0 }
      }
      if (index === 4) {
        return { colSpan: 0 }
      }
    }
  },
  {
    title: 'Address',
    dataIndex: 'address',
    customCell: sharedOnCell
  }
]
const dataSourceMerge = ref([
  {
    name: 'Stephen Curry',
    age: 30,
    tel: '0666-12098909',
    phone: 18889898989,
    address: 'Chase Center, San Francisco, California'
  },
  {
    name: 'the Muse Catcher',
    age: 24,
    tel: '0666-22098333',
    phone: 18899998888,
    address: 'Beijing, China'
  },
  {
    name: 'Wonder Woman',
    age: 32,
    tel: '0888-32098909',
    phone: 18899998888,
    address: 'Tel Aviv, Israel'
  },
  {
    name: 'Superman',
    age: 32,
    tel: '0888-32098909',
    phone: 18899998888,
    address: 'United States'
  },
  {
    name: 'Leo',
    age: 36,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Los Angeles'
  }
])
</script>
<template>
  <Table :columns="columnsMerge" :data-source="dataSourceMerge" bordered>
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a href="javascript:;">{{ text }}</a>
      </template>
    </template>
  </Table>
</template>
```

:::

## 可编辑单元格

<Button style="margin-bottom: 16px" type="primary" :icon="() => h(PlusOutlined)" @click="handleCellAdd">新增</Button>
<Table :columns="columnsCellEditable" :data-source="dataSourceCellEditable" bordered>
  <template #bodyCell="{ column, text, record }">
    <template v-if="column.dataIndex === 'name'">
      <div class="editable-cell">
        <Flex v-if="cellEditableData[record.key]" justify="space-between" align="center">
          <Input v-model:value="cellEditableData[record.key].name" @enter="handleCellSave(record.key)" />
          <CheckOutlined class="cell-icon-check" @click="handleCellSave(record.key)" />
        </Flex>
        <Flex v-else justify="space-between" align="center">
          {{ text || ' ' }}
          <EditOutlined class="cell-icon" @click="handleCellEdit(record.key)" />
        </Flex>
      </div>
    </template>
    <template v-else-if="column.dataIndex === 'action'">
      <Popconfirm v-if="dataSourceCellEditable.length" title="Sure to delete?" @ok="handleCellDelete(record.key)">
        <a>delete</a>
      </Popconfirm>
    </template>
  </template>
</Table>

<style lang="less" scoped>
.editable-cell {
  .cell-icon {
    display: none;
  }
  .cell-icon,
  .cell-icon-check {
    &:hover {
      transition: color 0.3s;
      color: #1890ff;
    }
  }
  &:hover {
    .cell-icon {
      display: inline-block;
    }
  }
}
</style>

::: details Show Code

```vue
<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { PlusOutlined, CheckOutlined, EditOutlined } from '@ant-design/icons-vue'
const columnsCellEditable = reactive([
  {
    title: 'Name',
    dataIndex: 'name',
    width: '30%'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  },
  {
    title: 'Action',
    dataIndex: 'action'
  }
])
const dataSourceCellEditable = ref([
  {
    key: '0',
    name: 'Edward King 0',
    age: 32,
    address: 'London, Park Lane no. 0'
  },
  {
    key: '1',
    name: 'Edward King 1',
    age: 32,
    address: 'London, Park Lane no. 1'
  }
])
const data: any[] = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  })
}
const cellEditableData = reactive<any>({})
const count = computed(() => dataSourceCellEditable.value.length + 1)
const handleCellAdd = () => {
  const newData = {
    key: `${count.value}`,
    name: `Edward King ${count.value}`,
    age: 32,
    address: `London, Park Lane no. ${count.value}`
  }
  dataSourceCellEditable.value.push(newData)
}
const handleCellEdit = (key: string) => {
  cellEditableData[key] = dataSourceCellEditable.value.filter((item) => key === item.key)[0]
}
const handleCellSave = (key: string) => {
  Object.assign(dataSourceCellEditable.value.filter((item) => key === item.key)[0], cellEditableData[key])
  delete cellEditableData[key]
}
const handleCellDelete = (key: string) => {
  dataSourceCellEditable.value = dataSourceCellEditable.value.filter((item) => item.key !== key)
}
</script>
<template>
  <Button style="margin-bottom: 16px" type="primary" :icon="() => h(PlusOutlined)" @click="handleCellAdd">新增</Button>
  <Table :columns="columnsCellEditable" :data-source="dataSourceCellEditable" bordered>
    <template #bodyCell="{ column, text, record }">
      <template v-if="column.dataIndex === 'name'">
        <div class="editable-cell">
          <Flex v-if="cellEditableData[record.key]" justify="space-between" align="center">
            <Input v-model:value="cellEditableData[record.key].name" @enter="handleCellSave(record.key)" />
            <CheckOutlined class="cell-icon-check" @click="handleCellSave(record.key)" />
          </Flex>
          <Flex v-else justify="space-between" align="center">
            {{ text || ' ' }}
            <EditOutlined class="cell-icon" @click="handleCellEdit(record.key)" />
          </Flex>
        </div>
      </template>
      <template v-else-if="column.dataIndex === 'action'">
        <Popconfirm v-if="dataSourceCellEditable.length" title="Sure to delete?" @ok="handleCellDelete(record.key)">
          <a>delete</a>
        </Popconfirm>
      </template>
    </template>
  </Table>
</template>
<style lang="less" scoped>
.editable-cell {
  .cell-icon {
    display: none;
  }
  .cell-icon,
  .cell-icon-check {
    &:hover {
      transition: color 0.3s;
      color: #1890ff;
    }
  }
  &:hover {
    .cell-icon {
      display: inline-block;
    }
  }
}
</style>
```

:::

## 可编辑行

<Table
  :columns="columnsRowEditable"
  :data-source="dataSourceRowEditable"
  bordered
  :loading="tableLoading"
  :pagination="{
    total: 100
  }"
  @change="handleTableChange"
>
  <template #bodyCell="{ column, text, record }">
    <template v-if="['name', 'address'].includes(column.dataIndex)">
      <Input
        v-if="rowEditableData[record.key]"
        v-model:value="rowEditableData[record.key][column.dataIndex]"
        style="margin: -5px 0"
      />
      <template v-else>
        {{ text }}
      </template>
    </template>
    <template v-else-if="column.dataIndex === 'age'">
      <InputNumber
        v-if="rowEditableData[record.key]"
        width="100%"
        v-model:value="rowEditableData[record.key][column.dataIndex]"
        style="margin: -5px 0"
      />
      <template v-else>
        {{ text }}
      </template>
    </template>
    <template v-else-if="column.dataIndex === 'action'">
      <span v-if="rowEditableData[record.key]">
        <a @click="handleRowSave(record.key)">Save</a>
        <Divider vertical />
        <Popconfirm title="Sure to cancel?" @ok="handleRowCancel(record.key)">
          <a>Cancel</a>
        </Popconfirm>
      </span>
      <span v-else>
        <a @click="handleRowEdit(record.key)">Edit</a>
      </span>
    </template>
  </template>
</Table>

::: details Show Code

```vue
<script setup lang="ts">
import { ref, reactive } from 'vue'
const tableLoading = ref(false)
const columnsRowEditable = reactive([
  {
    title: 'Name',
    dataIndex: 'name',
    width: '25%'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: '15%'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '40%'
  },
  {
    title: 'Action',
    dataIndex: 'action'
  }
])
const data: any[] = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  })
}
const dataSourceRowEditable = ref<any[]>(data.slice(0, 10))
const rowEditableData = reactive<any>({})
const handleRowEdit = (key: string) => {
  rowEditableData[key] = dataSourceRowEditable.value.filter((item) => key === item.key)[0]
}
const handleRowSave = (key: string) => {
  Object.assign(dataSourceCellEditable.value.filter((item) => key === item.key)[0], rowEditableData[key])
  delete rowEditableData[key]
}
const handleRowCancel = (key: string) => {
  delete rowEditableData[key]
}
const handleTableChange = (page: number, pageSize: number) => {
  tableLoading.value = true
  setTimeout(() => {
    dataSourceRowEditable.value = data.slice((page - 1) * pageSize, page * pageSize)
    tableLoading.value = false
  }, 500)
}
</script>
<template>
  <Table
    :columns="columnsRowEditable"
    :data-source="dataSourceRowEditable"
    bordered
    :loading="tableLoading"
    :pagination="{
      total: 100
    }"
    @change="handleTableChange"
  >
    <template #bodyCell="{ column, text, record }">
      <template v-if="['name', 'address'].includes(column.dataIndex)">
        <Input
          v-if="rowEditableData[record.key]"
          v-model:value="rowEditableData[record.key][column.dataIndex]"
          style="margin: -5px 0"
        />
        <template v-else>
          {{ text }}
        </template>
      </template>
      <template v-else-if="column.dataIndex === 'age'">
        <InputNumber
          v-if="rowEditableData[record.key]"
          width="100%"
          v-model:value="rowEditableData[record.key][column.dataIndex]"
          style="margin: -5px 0"
        />
        <template v-else>
          {{ text }}
        </template>
      </template>
      <template v-else-if="column.dataIndex === 'action'">
        <span v-if="rowEditableData[record.key]">
          <a @click="handleRowSave(record.key)">Save</a>
          <Divider vertical />
          <Popconfirm title="Sure to cancel?" @ok="handleRowCancel(record.key)">
            <a>Cancel</a>
          </Popconfirm>
        </span>
        <span v-else>
          <a @click="handleRowEdit(record.key)">Edit</a>
        </span>
      </template>
    </template>
  </Table>
</template>
```

:::

## 可展开

*当表格内容较多不能一次性完全展示时*

<br/>

<Table
  :columns="columnsExpandable"
  :data-source="dataSourceExpandable"
  :expand-column-width="100"
  showExpandColumn
  expandRowByClick
  expandFixed
  v-model:expandedRowKeys="expandedRowKeys"
  :scroll="{ x: 1600 }"
>
  <template #expandedRowRender="{ record }">
    {{ record.description }}
  </template>
  <template #expandColumnTitle>
    <span style="color: #d4380d">More</span>
  </template>
  <template #bodyCell="{ column }">
    <template v-if="column.key === 'action'">
      <a>Delete</a>
    </template>
  </template>
</Table>

::: details Show Code

```vue
<script setup lang="ts">
import { ref, reactive, watchEffect } from 'vue'
const columnsExpandable = reactive([
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  { title: 'Action', key: 'action' }
])
const dataSourceExpandable = ref([
  {
    key: 1,
    name: 'Superman',
    age: 32,
    address: 'New York No.1 Lake Park',
    description: 'My name is Superman, I am 32 years old, living in New York No.1 Lake Park.'
  },
  {
    key: 2,
    name: 'Spiderman',
    age: 22,
    address: 'London No.2 Lake Park',
    description: 'My name is Spiderman, I am 42 years old, living in London No.2 Lake Park.'
  },
  {
    key: 3,
    name: 'Ironman',
    age: 36,
    address: 'Sidney No.3 Lake Park',
    description: 'My name is Ironman, I am 32 years old, living in Sidney No.3 Lake Park.'
  }
])
const expandedRowKeys = ref([1])
watchEffect(() => {
  console.log('expandedRowKeys', expandedRowKeys.value)
})
</script>
<template>
  <Table
    :columns="columnsExpandable"
    :data-source="dataSourceExpandable"
    :expand-column-width="100"
    showExpandColumn
    expandRowByClick
    expandFixed
    v-model:expandedRowKeys="expandedRowKeys"
    :scroll="{ x: 1600 }"
  >
    <template #expandedRowRender="{ record }">
      {{ record.description }}
    </template>
    <template #expandColumnTitle>
      <span style="color: #d4380d">More</span>
    </template>
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'action'">
        <a>Delete</a>
      </template>
    </template>
  </Table>
</template>
```

:::

## 固定列

*对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要和 `scroll.x` 配合使用*
*建议指定 `scroll.x` 为大于表格宽度的固定值或百分比，且非固定列宽度之和不要超过 `scroll.x`*

<br/>

<Table :columns="columnsFixColumn" :data-source="dataSourceFixColumn" :scroll="{ x: 1600 }">
  <template #bodyCell="{ column }">
    <template v-if="column.key === 'action'">
      <a>action</a>
    </template>
  </template>
</Table>

::: details Show Code

```vue
<script setup lang="ts">
import { ref, reactive } from 'vue'
const columnsFixColumn = reactive([
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'action',
    fixed: 'right',
    width: 100
  }
])
const dataSourceFixColumn = ref([
  {
    key: '1',
    name: 'Stephen Curry',
    age: 30,
    address: 'Chase Center, GSW'
  },
  {
    key: '2',
    name: 'the Muse Catcher',
    age: 24,
    address: 'Beijing, China'
  },
  {
    key: '3',
    name: 'Wonder Woman',
    age: 32,
    address: 'Tel Aviv, Israel'
  }
])
</script>
<template>
  <Table :columns="columnsFixColumn" :data-source="dataSourceFixColumn" :scroll="{ x: 1600 }">
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'action'">
        <a>action</a>
      </template>
    </template>
  </Table>
</template>
```

:::

## 固定表头

*方便一页内展示大量数据*

<br/>

<Table :columns="columnsFixHeader" :data-source="dataSourceFixHeader" :scroll="{ y: 240 }" />

::: details Show Code

```vue
<script setup lang="ts">
import { ref, reactive } from 'vue'
const columnsFixHeader = reactive([
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
])
const data: any[] = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  })
}
const dataSourceFixHeader = ref(data)
</script>
<template>
  <Table :columns="columnsFixHeader" :data-source="dataSourceFixHeader" :scroll="{ y: 240 }" />
</template>
```

:::

## 固定头和列

*适合同时展示有大量数据和数据列*
*建议指定 `scroll.x` 为大于表格宽度的固定值或百分比，且非固定列宽度之和不要超过 `scroll.x`*

<br/>

<Table
  :columns="columnsFixHeaderAndColumn"
  :data-source="dataSourceFixHeaderAndColumn"
  :scroll="{ x: 1500, y: 300 }"
>
  <template #bodyCell="{ column }">
    <template v-if="column.key === 'action'">
      <a>action</a>
    </template>
  </template>
</Table>

::: details Show Code

```vue
<script setup lang="ts">
import { ref, reactive } from 'vue'
const columnsFixHeaderAndColumn = reactive([
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
  { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
  { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
  { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
  { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
  { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'action',
    fixed: 'right',
    width: 100
  }
])
const data: any[] = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  })
}
const dataSourceFixHeaderAndColumn = ref(data)
</script>
<template>
  <Table
    :columns="columnsFixHeaderAndColumn"
    :data-source="dataSourceFixHeaderAndColumn"
    :scroll="{ x: 1500, y: 300 }"
  >
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'action'">
        <a>action</a>
      </template>
    </template>
  </Table>
</template>
```

:::

## APIs

### Table

参数 | 说明 | 类型 | 默认值
-- | -- | -- | --
header | 表格标题 | string &#124; slot | undefined
footer | 表格尾部 | string &#124; slot | undefined
columns | 表格列的配置项 | [Column](#column-type)[] | []
dataSource | 表格数据数组 | any[] | []
bordered | 是否展示外边框和列边框 | boolean | false
size | 表格大小 | 'large' &#124; 'middle' &#124; small | 'large'
striped | 是否使用斑马条纹 | boolean | false
loading | 是否加载中 | boolean | false
spinProps | `Spin` 组件属性配置，参考 [Spin Props](https://themusecatcher.github.io/vue-amazing-ui/guide/components/spin.html#spin)，用于配置数据加载中样式 | object | {}
emptyProps | `Empty` 组件属性配置，参考 [Empty Props](https://themusecatcher.github.io/vue-amazing-ui/guide/components/empty.html#empty)，用于配置暂无数据样式 | object | {}
ellipsisProps | `Ellipsis` 组件属性配置，参考 [Ellipsis Props](https://themusecatcher.github.io/vue-amazing-ui/guide/components/ellipsis.html#ellipsis)，用于全局配置文本省略样式 | object | {}
showPagination | 是否显示分页 | boolean | true
pagination | `Pagination` 组件属性配置，参考 [Pagination Props](https://themusecatcher.github.io/vue-amazing-ui/guide/components/pagination.html#pagination)，用于配置分页功能 | object | {}
scroll | 表格是否可滚动，也可以指定滚动区域的宽、高 | [ScrollOption](#scrolloption-type) &#124; boolean | undefined
tableLayout | 表格布局方式，设为 `fixed` 表示内容不会影响列的布局，参考 [table-layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout) 属性，固定表头/列或使用了 `column.ellipsis` 时，默认值为 `fixed` | 'auto' &#124; 'fixed' | undefined
showExpandColumn | 是否展示展开列 | boolean | false
expandColumnTitle | 自定义展开列表头 | string &#124; slot | undefined
expandColumnWidth | 展开列的宽度 | string &#124; number | 48
expandCell | 自定义展开按钮 | slot | undefined
expandedRowRender | 自定义额外的展开行内容 | slot | undefined
expandFixed | 是否固定展开列 | boolean | false
expandedRowKeys <Tag color="cyan">v-model</Tag> | 展开行的 `key` 数组，控制展开行的属性 | (string \| number)[] | []
expandRowByClick | 点击行是否展开 | boolean | false

### Column Type

名称 | 说明 | 类型 | 默认值
-- | -- | -- | --
title? | 列头显示文字 | string | undefined
width? | 列宽度，单位 `px` | string &#124; number | undefined
dataIndex | 列数据字符索引 | string | undefined
ellipsis? | 超过宽度是否自动省略 | boolean | undefined
ellipsisProps? | `Ellipsis` 组件属性配置，参考 [Ellipsis Props](https://themusecatcher.github.io/vue-amazing-ui/guide/components/ellipsis.html#ellipsis)，用于单独配置某列文本省略样式 | object | undefined
fixed? | 列是否固定 | 'left' &#124; 'right' | undefined
slot? | 列插槽名称索引 | string | undefined
customCell? | 设置单元格属性 | (record: any, rowIndex: number, column: Column) => object | undefined

### ScrollOption Type

名称 | 说明 | 类型 | 默认值
-- | -- | -- | --
x? | 设置横向滚动，也可用于指定滚动区域的宽，可以设置为像素值，百分比，`true` 和 `'max-content'` | string &#124; number &#124; true | undefined
y? | 设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值 | string &#124; number | undefined

## Slots

名称 | 说明 | 类型
-- | -- | --
headerCell | 个性化头部单元格 | v-slot:headerCell="{ column, title }"
expandCell | 自定义展开按钮 | v-slot:expandCell="{ record, index, expanded }"
bodyCell | 个性化单元格 | v-slot:bodyCell="{ column, record, text, index }"
expandedRowRender | 自定义额外的展开行内容 | v-slot:expandedRowRender="{ record, index, expanded }"

## Events

名称 | 说明 | 类型
-- | -- | --
change | 分页变化时的回调 | (pager: { page: number, pageSize: number }) => void

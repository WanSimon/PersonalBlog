<template>
  <a-table :columns="columns"> </a-table>
</template>

<script>
import { defineComponent, ref } from "vue";
// import { Typography } from "ant-design-vue";
// const { Title } = Typography;
export default defineComponent({
  name: "BlogListPage",
  setup() {
    const columns = [
      {
        title: "标题",
        dataIndex: "title",
      },
      {
        title: "摘要",
        dataIndex: "abstract",
      },
      {
        title: "作者",
        dataIndex: "author",
      },
      {
        title: "标签",
        dataIndex: "label",
      },
      {
        title: "创建日期",
        dataIndex: "createdAt",
      },
      {
        title: "最近更新",
        dataIndex: "updatedAt",
      },
    ];
    const data = [];
    for (let i = 0; i < 1000; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: i + 1,
        address: `London Park no. ${i}`,
      });
    }
    return {
      dataSource: ref(data),
      columns: ref(columns),
    };
  },
});
</script>

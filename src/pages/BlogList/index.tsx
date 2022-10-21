import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';

const BlogList: React.FC = () => {
  return (
    <PageContainer
      header={{
        title: '博客列表',
      }}
    >
      <Button>博客列表</Button>
    </PageContainer>
  );
};

export default BlogList;

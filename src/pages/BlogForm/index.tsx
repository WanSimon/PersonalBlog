import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';

const BlogForm: React.FC = () => {
  return (
    <PageContainer
      header={{
        title: '新增博客',
      }}
    >
      <Button>新增博客</Button>
    </PageContainer>
  );
};

export default BlogForm;

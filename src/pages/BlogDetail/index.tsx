import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';

const BlogDetail: React.FC = () => {
  return (
    <PageContainer
      header={{
        title: '博客详情',
      }}
    >
      <Button>博客详情</Button>
    </PageContainer>
  );
};

export default BlogDetail;

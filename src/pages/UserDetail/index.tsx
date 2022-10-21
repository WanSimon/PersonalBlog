import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';

const UserDetail: React.FC = () => {
  return (
    <PageContainer
      header={{
        title: '用户详情',
      }}
    >
      <Button>用户详情</Button>
    </PageContainer>
  );
};

export default UserDetail;

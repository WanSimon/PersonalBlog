import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';

const UserList: React.FC = () => {
  return (
    <PageContainer
      header={{
        title: '用户列表',
      }}
    >
      <Button>用户列表</Button>
    </PageContainer>
  );
};

export default UserList;

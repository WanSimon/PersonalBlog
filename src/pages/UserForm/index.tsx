import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';

const UserForm: React.FC = () => {
  return (
    <PageContainer
      header={{
        title: '新增用户',
      }}
    >
      <Button>新增用户</Button>
    </PageContainer>
  );
};

export default UserForm;

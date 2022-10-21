import React, { useState } from 'react';
import { Button, Checkbox, Col, Form, Input, Radio, Row } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { useNavigate } from '@umijs/max';
import styles from './index.less';

export interface LoginMessage {
  password: string;
  username: string;
  agree: boolean;
}

const LoginPage: React.FC = () => {
  const [selected, setSelected] = useState('login');
  // const [form] = Form.useForm();
  //表单数据控制用
  // let formRef = createRef<FormInstance>();
  let navigate = useNavigate();

  const onFinish = (val: LoginMessage) => {
    console.log('Success:', val);
    if (
      val.username === '123' &&
      val.password === '123' &&
      val.agree === true
    ) {
      navigate('/home', { replace: false });
    }
  };

  //用户用相同的浏览器登录时，直接补全用户账户名，保存localStorage

  const options: { label: string; value: string }[] = [
    {
      label: '登录',
      value: 'login',
    },
    { label: '注册', value: 'register' },
  ];
  const changeOption = ({ target: { value } }: RadioChangeEvent) => {
    console.log(value);
    setSelected(value);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <PageContainer ghost>
      <Row>
        <Col span={8} offset={8}>
          <Radio.Group
            options={options}
            onChange={changeOption}
            value={selected}
            optionType="button"
            buttonStyle="solid"
            className={styles.radioGroup}
            size={'large'}
          ></Radio.Group>
        </Col>
      </Row>

      {selected === 'login' ? (
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className={styles.formContainer}
        >
          <Form.Item
            label="姓名"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
            className={styles.input}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            className={styles.input}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="agree"
            label="同意"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
            className={styles.input}
          >
            <Checkbox>同意</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{ offset: 8, span: 16 }}
            // className={styles.submit}
          >
            <Button type="primary" htmlType="submit" className={styles.login}>
              登录
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className={styles.formContainer}
        >
          <Form.Item
            label="账号"
            name="username"
            rules={[{ required: true, message: '请输入账号' }]}
            className={styles.input}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
            className={styles.input}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="验证码"
            name="verifyCode"
            rules={[{ required: true, message: '请输入验证码' }]}
            className={styles.input}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="agree"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
            className={styles.input}
          >
            <Checkbox>同意协议</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{ offset: 8, span: 16 }}
            className={styles.submit}
          >
            <Button
              type="primary"
              htmlType="submit"
              className={styles.submitButton}
            >
              注册
            </Button>
          </Form.Item>
        </Form>
      )}
    </PageContainer>
  );
};

export default LoginPage;

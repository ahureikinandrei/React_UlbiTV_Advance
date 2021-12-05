import { Button, Form, Input } from 'antd';
import React, { FC } from 'react';
import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { rules } from '../utils/rules';

const LoginForm: FC = () => {
    const { error, isLoading } = useTypedSelector(state => state.auth);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useActions();

    const submit = () => {
        login(username, password);
    }

    return (
        <Form
            onFinish={submit}
        >
            {error && <div style={{ color: "red" }}>
                {error}
            </div>}

            <Form.Item
                label="имя пользователя"
                name="username"
                rules={[rules.required("Пожалуйста введите имя пользователя")]}
            >
                <Input value={username} onChange={e => setUsername(e.target.value)} />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Пожалуйста введите имя пользователя пароль')]}
            >
                <Input type="password" value={username} onChange={e => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
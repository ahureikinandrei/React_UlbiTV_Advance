import Layout, { Content } from 'antd/lib/layout/layout';
import React, { FC, useEffect } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import './App.css'
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';

const App: FC = () => {
    const { setUser, setIsAuth } = useActions();
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setUser({ username: localStorage.getItem('username' || '') } as IUser);
            setIsAuth(true);
        }
    }, [])

    return (
        <Layout>
            <Navbar />
            <Content>
                <AppRouter />
            </Content>
        </Layout>
    );
};

export default App;
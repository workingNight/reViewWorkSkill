import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const TestPage: React.FC<{}> = () => {
    return (
        <Layout>
            <Sider>Sider</Sider>
            <Layout>
                <Header style={{backgroundColor:"blue",color:'white'}}>Header</Header>
                <Content>
                        <div style={{height:600}}>center</div>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    )
}


export default TestPage;
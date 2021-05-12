import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Typography, Divider, 
    Button, Space, Dropdown, PageHeader, Pagination, Steps 
,Popover } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    HighlightOutlined,
    DownloadOutlined,
    CopyOutlined,
    QuestionCircleOutlined,
    RightOutlined,
    DownOutlined
} from '@ant-design/icons';
import menuList from '../../config/menuConfig';

const { Header, Content, Footer, Sider } = Layout;
const { Title, Text, Paragraph } = Typography
const { Step } = Steps
//自定义进度栏的悬浮显示。
const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );


const Admin: React.FC<{}> = () => {
    const [aa, setAa] = useState('测试可编辑属性')
    const sayhello = () => {
        console.log("hello");
    }
    const sayBaga = () => {
        console.log('BugYellow')
    }
    return (
        <div>
            <Title level={2}>
                组件测试场
           </Title>
            <Divider dashed orientation={'right'} type={'horizontal'}> cool </Divider>
            <Text type={'warning'} keyboard>你好?</Text>
            <Button
                // block
                // danger
                // disabled
                ghost
                icon={<DownloadOutlined />}
                loading={false}
                type="link"
                shape="round"
                onClick={sayhello}
            >clickme</Button>
            <Divider orientation={'right'}>划分线</Divider>
            <Text editable={{
                icon: <HighlightOutlined />,
                tooltip: 'clickme',
                onChange: setAa,
                autoSize: { minRows: 2, maxRows: 4 },
                maxLength: 100,
                onEnd: sayhello
            }}>{aa}</Text>
            <Paragraph
                title={`停留这有提示`}   //类似tip属性
                ellipsis={{
                    rows: 2,
                    expandable: true,
                    // suffix: '--William Shakespeare',
                    onEllipsis: sayBaga,
                    onExpand: sayhello,
                }}
                copyable={{
                    onCopy: sayBaga,
                    text: 'please copy me',   //拷贝到剪切板里的文本
                    icon: <CopyOutlined />,
                    tooltips: 'tip tip ?'
                }}
            >
                Line 5:5:    'PieChartOutlined' is defined but never used  @typescript-eslint/no-unused-vars
                Line 6:5:    'FileOutlined' is defined but never used      @typescript-eslint/no-unused-vars
                Line 7:5:    'TeamOutlined' is defined but never used      @typescript-eslint/no-unused-vars
                Line 8:5:    'UserOutlined' is defined but never used      @typescript-eslint/no-unused-vars
                Line 12:8:   'menuList' is defined but never used          @typescript-eslint/no-unused-vars
                Line 14:9:   'Header' is assigned a value but never used   @typescript-eslint/no-unused-vars
                Line 14:17:  'Content' is assigned a value but never used  @typescript-eslint/no-unused-vars
                Line 14:26:  'Footer' is assigned a value but never used   @typescript-eslint/no-unused-vars
                Line 14:34:  'Sider' is assigned a value but never used    @typescript-eslint/no-unused-vars
            </Paragraph>


            <Space split={<QuestionCircleOutlined />}>
                <div>😀</div>
                <div>😀</div>
                <div>😀</div>
                <div>😀</div>
            </Space>

            <Divider>面包屑</Divider>
            <Breadcrumb separator={<RightOutlined />}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item >Application Center</Breadcrumb.Item>
                <Breadcrumb.Item >Application List</Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>,


            <Divider>下拉菜单</Divider>
            <Dropdown overlay={(
                <Menu onClick={({ key }) => {
                    console.log(`Click on item ${key}`);
                }}>
                    <Menu.Item key="1">1st menu item</Menu.Item>
                    <Menu.Item key="2">2nd menu item</Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="3">3rd menu item</Menu.Item>
                </Menu>
            )}>
                {/**这里的a标签是随着这个一起携带的*/}
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Hover me <DownOutlined />
                </a>
            </Dropdown>

            <PageHeader ghost={false} style={{ backgroundColor: "pink" }}>
                <Button type={'primary'} shape={'round'}>登录</Button>
            </PageHeader>

            <Divider>分页</Divider>
            <Pagination
                total={85}
                showSizeChanger
                showQuickJumper
                showTotal={total => `Total ${total} items`}
            />

            <Divider>步骤条</Divider>
            <Steps size="small" direction="vertical" current={1} progressDot={customDot} >
                <Step title="你好" description="不好不好" />
                <Step title="你好" description="不好不好" />
                <Step title="你好" description="不好不好" />
                <Step title="你好" description="不好不好" />
            </Steps>
        </div>
    )
}


export default Admin;
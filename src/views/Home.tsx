import React, { useEffect, useState } from 'react';
import { BarChartOutlined, DesktopOutlined, DollarOutlined, FileOutlined, LaptopOutlined, LogoutOutlined, MenuOutlined, MoneyCollectOutlined, NotificationOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Button, MenuProps, Tooltip } from 'antd';
import { Layout, Menu, theme } from 'antd';
import SideMenu from '../components/MainMenu'
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const App: React.FC = () => {

  /*****状態定義*****/
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  //OS種類
  const { isMobile } = useSelector((state: RootState) => ({

    isMobile: state.mobileDataReducer.isMobile
  }))

  //遷移処理
  const navigation = useNavigate();

  //Menu展開状態
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  //TABデータ
  const items: MenuItem[] = [
    {
      label: 'Home',
      key: '/page01',
      icon: <BarChartOutlined />,
    },
    {
      label: '在庫管理',
      key: '/page02',
      icon: <FileOutlined />,
    },
    {
      label: 'ユーザー',
      key: '/page03',
      icon: <UserOutlined />,
    },
    {
      label: '入荷明細',
      key: '/page04',
      icon: <DollarOutlined />,
    },
    {
      label: '販売明細',
      key: '/page05',
      icon: <MoneyCollectOutlined />,
    },
    {
      label: '戻る',
      key: '/login',
      icon: <LogoutOutlined />,
    },
  ]



  /*****関数定義*****/
  //画面遷移処理
  const meunClick = (e: { key: string }) => {
    navigation(e.key);
  }

  //Menu展開処理
  function handleMenu(): void {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <Layout>
      <Header className="header" style={{ display: isMobile ? '' : 'none' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          onClick={meunClick} />
      </Header>
      <Content style={{ padding: '0 10px' }}>
        <div style={{ margin: '16px 0' }}>Book Sale System</div>
        <Layout style={{
          padding: isMobile ? '' : '30px',
          height: '100vh',
          background: 'rgba(255,255,255,0.8)',
          borderRadius: 10,
          boxShadow: 'rgb(201 196 196 / 33%) 1px 1px 20px ',
          opacity: 0.9,
        }}>
          <Sider style={{ background: colorBgContainer, display: !isMobile ? '' : 'none' }} width={200} collapsed={isOpenMenu}>
            <SideMenu handleMenu={handleMenu} items={items} />
          </Sider>
          <Content style={{ margin: '16px 16px 0' }}>
            <div style={{
              padding: 24,
              minHeight: 360,
              height: '100%',
              background: colorBgContainer,
              boxShadow: 'rgb(201 196 196 / 67%) 0px 0px 20px ', borderRadius: 15,
            }}>
              <Outlet />
            </div>
          </Content>
          <Tooltip title="search" style={{ display: isMobile ? '' : 'none' }}>
            <Button style={{ display: !isMobile ? '' : 'none' }} shape="circle" icon={<MenuOutlined onClick={handleMenu} />} />
          </Tooltip>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center', marginTop: 20 }}>Design ©2023 Created by WU</Footer>
    </Layout>
  );
};

export default App;

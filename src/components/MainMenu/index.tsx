import { useState } from "react";
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

interface MenuStatus {
    handleMenu: Function
    items: MenuItem[]
}

const SideMenu: React.FC<MenuStatus> = (props) => {

    /*****状態定義*****/
    //route取得
    const currentRoute = useLocation();

    //展開状態
    const [openKey, setOpenKey] = useState(['/' + currentRoute.pathname.split('/')[1].toString()]);
    //遷移処理
    const navigation = useNavigate();

    /*****関数定義*****/
    //画面遷移処理
    const meunClick = (e: { key: string }) => {
        navigation(e.key);
    }

    //menu展開処理
    const handleOpen = (openList: string[]) => {
        setOpenKey([openList[openList.length - 1]])
    }

    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={[currentRoute.pathname]}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRadius: 15, boxShadow: 'rgb(201 196 196 / 69%) 2px 2px 20px 1px', opacity: 0.9 }}
            items={props.items}
            onClick={meunClick}
            onOpenChange={handleOpen}
            openKeys={openKey}
        />
    )

}

export default SideMenu;
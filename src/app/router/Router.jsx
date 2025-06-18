import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import Error from "../../pages/error/Error.jsx";
import Main from "../../pages/main/Main.jsx";
import '../../styles/Core.module.css'
import Video from "../../pages/video/Video.jsx";
import TwoPages from "../../pages/twoPages/TwoPages.jsx";
import ThreePages from "../../pages/threePages/ThreePages.jsx";
import ProductManagement from "../../pages/productManagement/ProductManagement.jsx";
import WarehousesShops from "../../pages/warehousesShops/WarehousesShops.jsx";
import ProductArchive from "../../pages/productArchive/ProductArchive.jsx";
import StoreSettings from "../../pages/storeSettings/StoreSettings.jsx";
import SubscriptionManagement from "../../pages/subscriptionManagement/SubscriptionManagement.jsx";
export const routes = {
    main: '/',
    video: '/video',
    two: '/two',
    three:'/three',
    ProductManagement: '/ProductManagement',
    WarehousesShops: '/WarehousesShops',
    ProductArchive:'/ProductArchive',
    StoreSettings:'/StoreSettings',
    SubscriptionManagement:'/SubscriptionManagement'

}


export const Router = createBrowserRouter([
    {
        element: <Layout/>,
        errorElement:<Error/>,
        children: [
            {
                path: routes.main,
                element: <Main/>
            },{
                path:routes.video,
                element: <Video/>
            },{
                path:routes.two,
                element:<TwoPages/>
            },
            {
                path:routes.three,
                element: <ThreePages/>
            },
            {
                path:routes.ProductManagement,
                element: <ProductManagement/>
            },
            {
                path:routes.WarehousesShops,
                element: <WarehousesShops/>
            },
            {
                path:routes.ProductArchive,
                element: <ProductArchive/>
            },
            {
                path:routes.StoreSettings,
                element: <StoreSettings/>
            },
            {
                path:routes.SubscriptionManagement,
                element: <SubscriptionManagement/>
            }
        ]
    }
])
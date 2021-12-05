import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import {Link} from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutLined, BulbOutLined , FundOutlined, MenuOutlined
} from '@ant-design/icons/lib/icons'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
            <Avatar />
            <Typography.Title level={2} className= "logo">
                <Link to="/">Crypto World</Link>
>            </Typography.Title>
            <Button className='="Minu'
            </div>
        </div>
    )
}

export default Navbar

/*
 * @Descripttion: svg文件 定义项目常用图标
 * @version:
 * @Author: zy
 * @Date: 2020-03-19
 */
import React from 'react';

/**
 * 绘制实心圆
 * @Author: zy
 * @Date: 2020-03-19
 * @param {} radius：半径大小  
 * @param {} color：实心圆填充色
 */
export const SolidCircle = ({ radius = 3, color = 'black', ...props }) => {
    return (
        <svg
            width={2 * radius}
            height={2 * radius}
            {...props}
            style={{
                marginRight: 10
            }}
        >
            <circle cx={radius} cy={radius} r={radius} fill={color} />
        </svg >
    )
}



/**
 * 绘制关闭按钮  背景红色 x白色
 * @Author: zy
 * @Date: 2020-03-19
 * @param {} radius：半径大小  
 */
export const CloseButton = ({ ...props }) => {
    return (
        <svg
            width='16'
            height='16'
            {...props}
            style={{
                marginRight: '0px',
            }}
        >
            <circle cx='8' cy='8' r='8' fill='#ff0000' />
            <line x1='4' y1='4' x2='12' y2="12" stroke='#ffffff' strokeWidth='2' />
            <line x1='4' y1='12' x2='12' y2="4" stroke='#ffffff' strokeWidth='2' />
        </svg>
    )
}

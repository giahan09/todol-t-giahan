import React from 'react'

import GiaHan from '../image/GiaHan.jpg'
function About(){
    return (
        <div className="container-about">
        <div>
            <div className="title-heading">Sinh Viên Thực Hiện</div>
            <img 
                className="image-about"
                src={GiaHan}
                alt="Phạm Trương Gia Hân avatar"
            />
        </div>
        <div className="container-desc__wrapper">
            <div className="container-desc">
                <p className="context"> Họ và tên: Phạm Trương Gia Hân</p>
                <p className="context"> MSSV: 46.01.104.046</p>
                <p className="context">Email: hangia21092002@gmail.com</p>
                <p className="context">Trường Đại học Sư Phạm TP.HCM</p>
                <p className="context">Lớp: 2211COMP1031</p>
            </div>
        </div>
    </div>
    )   
}

export default About
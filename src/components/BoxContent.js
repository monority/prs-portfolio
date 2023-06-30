import React from 'react'
import IconCustom from './IconCustom'

const BoxContent = ({ keys, title, action, content, image, arial_image, typeIcon, typeIconSecond, isShow = false }) => {
    return (
        <div className='wrapper-box'>
            <div className="wrapper-image">
                <img src={`${process.env.PUBLIC_URL}/${image}`} alt={arial_image} />
            </div>
            <div className="wrapper-content">
                <h1>{title}</h1>
                <p>{content}</p>
                <div className="wrapper-icon">
                    <IconCustom isShow="true" size="3rem" type={typeIcon} className="icon-content" />
                    {isShow ? <IconCustom size="3rem" type={typeIconSecond} className="icon-content" /> : null}
                    <p onClick={action} className='btn btn-redirect'>Check this project</p>
                </div>
            </div>
        </div>
    )
}

export default BoxContent;
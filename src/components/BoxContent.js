import React from 'react'
import IconCustom from './IconCustom'

const BoxContent = ({ keys, title, action, content, image, arial_image, typeIcon }) => {
    return (
        <div className='wrapper-box'>
            <div className="wrapper-image">
                <img src={`${process.env.PUBLIC_URL}/${image}`} alt={arial_image} />
            </div>
            <div className="wrapper-content">
                <h1>{title}</h1>
                <p>{content}</p>
                <IconCustom size="8rem" type={typeIcon} className="icon-content" />
                <IconCustom size="8rem" type={typeIcon} className="icon-content" />
                <p onClick={action} className='btn btn-redirect'>Check this project</p>
            </div>
        </div>
    )
}

export default BoxContent
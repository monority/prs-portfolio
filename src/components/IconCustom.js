import React from 'react';
import { BiLogoRedux, BiLogoReact } from 'react-icons/bi'

const components = {
    BiLogoRedux,
    BiLogoReact,
};

const IconCustom = ({ type, size, className, isShow}) => {
    const SpecificIcon = components[type];
    return <SpecificIcon size={size} className={className} />;
}

export default IconCustom;
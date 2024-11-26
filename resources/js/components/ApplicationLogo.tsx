import { ImgHTMLAttributes, SVGAttributes } from 'react';
import logo from '@/assets/logo.png'

export default function ApplicationLogo(props: any) {
    return (
        <img src={logo} {...props} />
    );
}

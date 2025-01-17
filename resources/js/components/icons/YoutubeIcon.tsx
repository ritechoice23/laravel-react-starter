import React, {SVGProps} from 'react'

export default function YoutubeIcon({className, ...rest}: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
             className={`w-6 h-6 pointer-events-none  ${className}`} {...rest}>
            <path fill="red" fillRule="evenodd"
                  d="M21.588 7.191a2.506 2.506 0 0 0-1.763-1.763C18.26 5 12 5 12 5s-6.26 0-7.825.412c-.84.23-1.533.922-1.763 1.78C2 8.755 2 12.001 2 12.001s0 3.261.412 4.81c.23.857.906 1.532 1.763 1.763 1.581.428 7.825.428 7.825.428s6.26 0 7.825-.412a2.506 2.506 0 0 0 1.763-1.763c.412-1.565.412-4.81.412-4.81s.016-3.262-.412-4.827ZM10.007 15V9.003l5.205 2.999L10.007 15Z"
                  clipRule="evenodd"/>
        </svg>
    )
}

import React, {SVGProps} from 'react'

export default function TwitterIcon({className, ...rest}: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             className={`w-6 h-6 pointer-events-none ${className}`} {...rest}>
            <g id="Color=Yes">
                <path id="Vector"
                      d="M13.4821 10.6218L20.0389 3H18.4852L12.7919 9.61788L8.24467 3H3L9.87627 13.0074L3 21H4.55384L10.5661 14.0113L15.3683 21H20.613L13.4817 10.6218H13.4821ZM11.3539 13.0956L10.6572 12.0991L5.11372 4.16971H7.50033L11.974 10.5689L12.6707 11.5655L18.4859 19.8835H16.0993L11.3539 13.096V13.0956Z"
                      fill="#0D1217"/>
            </g>
        </svg>
    )
}

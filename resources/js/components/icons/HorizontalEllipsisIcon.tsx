import { Copy, Ellipsis } from 'lucide-react'
import React, { SVGProps } from 'react'

export default function HorizontalIcon({ ...rest }: SVGProps<SVGSVGElement>) {
    return (
        <Ellipsis {...rest} />
    )
}


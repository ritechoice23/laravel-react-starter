import { Copy, Images } from 'lucide-react'
import React, { SVGProps } from 'react'

export default function ImagesIcon({ ...rest }: SVGProps<SVGSVGElement>) {
    return (
        <Images {...rest} />
    )
}


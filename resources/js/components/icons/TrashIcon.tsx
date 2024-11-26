import { Copy, Plus, Repeat, Trash } from 'lucide-react'
import React, { SVGProps } from 'react'

export default function TrashIcon({ ...rest }: SVGProps<SVGSVGElement>) {
    return (
        <Trash {...rest} />
    )
}


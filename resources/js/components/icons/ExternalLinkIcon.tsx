import { ExternalLink } from 'lucide-react'
import React, { SVGProps } from 'react'

export default function ExternalLinkIcon({ ...rest }: SVGProps<SVGSVGElement>) {
    return (
        <ExternalLink {...rest} />
    )
}

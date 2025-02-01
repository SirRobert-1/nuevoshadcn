import { PortableText } from "@portabletext/react"

export default function SanityBlock({ blocks, components = false }) {
    return Boolean(components) ? (
        <PortableText value={blocks} components={components} />
    ) : (
        <PortableText value={blocks} />
    )
}

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

// Renders a JSON-LD <script> block for structured data (schema.org).
// Safe to use in both server and client components — it only serializes JSON.
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

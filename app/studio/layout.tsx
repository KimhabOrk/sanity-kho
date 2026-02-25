export const metadata = {
  title: 'Sanity Studio | Kimhab Ork Content Management',
  description: "Content management for Kimhab Ork digital asset management",
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <meta name="robots" content="noindex" />
      </head>
      <body>{children}</body>
    </html>
  )
}

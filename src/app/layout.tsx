import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="w-screen h-screen">
      <head>
        <title>Compound</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </head>
      <body className="w-screen h-screen overflow-hidden">{children}</body>
    </html>
  )
}
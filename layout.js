// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/favicon.ico" />
    </head>
    <body>
      <nav>
        <a href="/">Home</a> | <a href="/create">Create</a>
      </nav>
      <main>{children}</main>
    </body>
    </html>
  )
}

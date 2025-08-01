export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
          <html lang="pt-BR">
                <body>
                        <header>
                                  <h1>Desafio Vitalidade</h1>h1>
                                  <nav>Menu aqui</nav>nav>
                                </header>header>
                  {children}
                        <footer>
                                  <p>Footer aqui</p>p>
                                </footer>footer>
                      </body>body>
              </html>html>
        )
}</html>

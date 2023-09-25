import './globals.css'

export const metadata = {
  title: 'Vertical Slider',
  description: 'package to implement a vertical slider',
}

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <body>
      {children}
    </body>
  </html>
)

export default RootLayout
import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import "./globals.scss"

const note = Noto_Sans_JP({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "セルマネ | Self Management Planner",
  description: "Created by weak-kajuma & takapc",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={note.className}>{children}</body>
    </html>
  )
}

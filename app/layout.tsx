import type { Metadata } from 'next';
import { pretendard, tossface } from '@/styles/fonts';
import '@/styles/global.css';
import Header from '@/components/Header';
import { ThemeProviders } from './ThemeProviders';
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='ko'
      className={`${tossface.variable} ${pretendard.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProviders>
          <Header />
          <main>{children}</main>
          {/* footer */}
        </ThemeProviders>
      </body>
    </html>
  );
}

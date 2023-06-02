'use client';
import Footer from '@/components/ui/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PropsWithChildren, useEffect } from 'react';

export default function DefaultLayout({ children }: PropsWithChildren) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <>
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}

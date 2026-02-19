import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyCallbackButton from '@/components/layout/StickyCallbackButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
      <StickyCallbackButton />
    </div>
  );
};

export default Layout;

import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col rounded-none">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
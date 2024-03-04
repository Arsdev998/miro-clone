interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <nav className="nav bg-red-400 p-5">This is navbar</nav>
      <div className="">{children}</div>
      <footer className="bg-red-400 p-5">This is footer</footer>
    </div>
  );
};

export default Layout;

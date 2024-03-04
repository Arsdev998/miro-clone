import OrgSidebar from "./_components/org-sidebar";
import Sidebar from "./_components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DasboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-y-4 h-full">
          <div className="h-full flex-1">
            <OrgSidebar/>
            {/* add Navbar */}
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DasboardLayout;

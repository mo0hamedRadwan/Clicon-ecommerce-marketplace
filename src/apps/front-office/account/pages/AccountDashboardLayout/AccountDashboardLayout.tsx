import BaseLayout from "apps/front-office/design-system/layouts/BaseLayout";
import AccountDashboardNavigationTabs from "./sections/AccountDashboardNavigationTabs";

export type AccountDashboardLayoutProps = {
  children: React.ReactNode;
};

export default function AccountDashboardLayout({
  children,
}: AccountDashboardLayoutProps) {
  return (
    <BaseLayout>
      <div className="py-10 container flex items-start flex-wrap gap-10 xl:gap-20">
        <AccountDashboardNavigationTabs />
        <main>{children}</main>
      </div>
    </BaseLayout>
  );
}

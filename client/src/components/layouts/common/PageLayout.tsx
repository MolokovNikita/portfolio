import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen w-[60%] ml-auto mr-auto">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

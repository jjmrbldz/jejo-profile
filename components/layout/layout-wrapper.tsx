import { Header } from "./header";

export function LayoutWrapper({
  children
}:{
  children?: React.ReactNode
}) {
  return (
    <div className="w-full max-w-7xl m-auto px-4">
      <Header />
      {children}
    </div>
  );
}
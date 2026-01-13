import { LayoutWrapper } from "../components/layout/layout-wrapper";
import { ThemeProvider } from "./theme-provider";

export default function AppProvider({
  children
}:{
  children?: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
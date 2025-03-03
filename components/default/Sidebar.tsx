import { LayoutDashboard, ShoppingCart, Box, FileText, BarChart, Users, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  return (
    <div className="w-16 bg-[#023E8A] flex flex-col items-center py-4 text-white">
      <nav className="flex-1 flex flex-col gap-6">
        <Button variant="ghost" size="icon" className="text-white">
          <LayoutDashboard className="h-8 w-8" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white">
          <ShoppingCart className="h-8 w-8" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white">
          <Box className="h-8 w-8" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white">
          <FileText className="h-8 w-8" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white">
          <BarChart className="h-8 w-8" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white">
          <Users className="h-8 w-8" />
        </Button>
      </nav>
      <div className="mt-auto flex flex-col gap-2">
        <Button variant="ghost" size="icon" className="text-white">
          <Settings className="h-8 w-8" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white">
          <LogOut className="h-8 w-8" />
        </Button>
      </div>
    </div>
  )
}


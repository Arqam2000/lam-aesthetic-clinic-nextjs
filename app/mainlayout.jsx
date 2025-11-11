'use client'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { usePathname } from "next/navigation"

const mainlayout = ({children}) => {
  const path = usePathname()

  return (
    <div className="flex flex-col min-h-screen">
      {path != "/al-quran" && <Navbar />}
      {children}
      {path != "/al-quran" && <Footer />}
      {/* <Footer /> */}
    </div>
  )
}

export default mainlayout

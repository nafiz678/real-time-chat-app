"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()
    console.log(theme)

    const toggleDarkMode = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <Button
            variant="outline"
            size="icon"
            className=""
            onClick={toggleDarkMode}
        >
            {theme === "dark" ? (
                <Sun className={`h-[1.2rem] w-[1.2rem]`} />
            ) : (
                <Moon className={`h-[1.2rem] w-[1.2rem]`} />
            )}
        </Button>
    )
}

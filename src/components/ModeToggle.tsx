import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [theme, setThemeState] = useState<"theme-light" | "dark">(
    "dark"
  );

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  useEffect(() => {
    document.documentElement.classList[theme === "dark" ? "add" : "remove"](
      "dark"
    );
  }, [theme]);

  return (
    <div>
      <Button
        onClick={() => setThemeState(theme === "dark" ? "theme-light" : "dark")}
        variant="ghost"
        size="icon"
        className="group"
      >
        <Sun 
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 
          dark:scale-0 group-hover:fill-zinc-950" 
        />
        <Moon 
          className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all 
          dark:rotate-0 dark:scale-100 group-hover:fill-zinc-100" 
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}

"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			aria-label="Toggle theme"
		>
			<motion.div
				animate={{ rotate: theme === "dark" ? 0 : 180 }}
				transition={{ duration: 0.5 }}
				className="relative h-6 w-6"
			>
				<Sun className="absolute h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				<Moon className="absolute h-6 w-6 rotate-180 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			</motion.div>
		</Button>
	);
}

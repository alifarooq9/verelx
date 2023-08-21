"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import darkModeImage from "../../public/darkMode.png";
import lightModeImage from "../../public/lightMode.png";
import systemModeImage from "../../public/systemMode.png";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

const AppearanceModes = () => {
    const { setTheme, theme } = useTheme();

    return (
        <div className="flex mt-5 space-x-8">
            <button onClick={() => setTheme("dark")}>
                <Image
                    src={darkModeImage}
                    alt="dark"
                    className={cn(
                        "w-48 rounded-lg overflow-hidden",
                        theme === "dark" &&
                            "outline-2 outline outline-offset-2 outline-primary",
                    )}
                />

                <div className="mt-3 flex items-center space-x-2">
                    {theme === "dark" && <CheckIcon className="w-5 h-5" />}
                    <span>dark</span>
                </div>
            </button>

            <button onClick={() => setTheme("light")}>
                <Image
                    src={lightModeImage}
                    alt="light"
                    className={cn(
                        "w-48 rounded-lg overflow-hidden",
                        theme === "light" &&
                            "outline-2 outline outline-offset-2 outline-primary",
                    )}
                />
                <div className="mt-3 flex items-center space-x-2">
                    {theme === "light" && <CheckIcon className="w-5 h-5" />}
                    <span>Light</span>
                </div>
            </button>

            <button onClick={() => setTheme("system")}>
                <Image
                    src={systemModeImage}
                    alt="system"
                    className={cn(
                        "w-48 rounded-lg overflow-hidden",
                        theme === "system" &&
                            "outline-2 outline outline-offset-2 outline-primary",
                    )}
                />
                <div className="mt-3 flex items-center space-x-2">
                    {theme === "system" && <CheckIcon className="w-5 h-5" />}
                    <span>System</span>
                </div>
            </button>
        </div>
    );
};

export default AppearanceModes;

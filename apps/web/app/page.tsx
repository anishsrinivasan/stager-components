"use client";

import { useState, useEffect } from "react";
import { Button } from "@workspace/ui/components/button";
import { ChartModule } from "./modules/chart-module";
import { DialogDemo } from "./modules/dialog-module";
import { SonnerTypes } from "./modules/toast-module";

export default function Home() {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Reset to default theme
  const resetTheme = () => {
    setIsDarkMode(false);
  };
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            UI Component Library
          </h1>
          <p className="text-muted-foreground">
            A comprehensive component library built with Tailwind CSS, Radix UI,
            and shadcn/ui
          </p>
        </div>

        {/* Theme Customization Controls */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Theme Customization</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Toggle between light and dark mode
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                For advanced theme customization, use the{" "}
                <a
                  href="https://tweakcn.com/editor/theme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  TweakCN Theme Editor
                </a>{" "}
                to generate custom CSS variables
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={resetTheme}>
                Reset to Default
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div>
                <label className="block text-sm font-medium text-foreground">
                  Dark Mode
                </label>
                <p className="text-xs text-muted-foreground">
                  Toggle between light and dark themes
                </p>
              </div>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isDarkMode ? "bg-primary" : "bg-muted"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isDarkMode ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* TweakCN Reference */}
            <div className="p-4 border border-border rounded-lg bg-muted/30">
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Advanced Theme Customization
              </h3>
              <p className="text-xs text-muted-foreground mb-3">
                For complete control over colors, typography, and spacing, use
                the TweakCN Theme Editor to generate custom CSS variables.
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open("https://tweakcn.com/editor/theme", "_blank")
                  }
                >
                  Open TweakCN Editor
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Chart Component</h2>
          <ChartModule />
        </section>
        {/* Buttons Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Button Component</h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Sizes</h3>
              <div className="flex flex-wrap gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">🚀</Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">States</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
                <Button asChild>
                  <a href="#demo">As Link</a>
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Interactive Examples</h3>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => alert("Button clicked!")}>
                  Click Me
                </Button>
                <Button
                  variant="outline"
                  onClick={() => console.log("Secondary clicked")}
                >
                  Console Log
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => confirm("Are you sure?")}
                >
                  Confirm Action
                </Button>
                <DialogDemo />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Toast Component</h3>
                <div className="flex flex-wrap gap-4">
                  <SonnerTypes />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

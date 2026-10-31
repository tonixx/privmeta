"use client";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import Link from "next/link";
import Typography from "./Typography";

const Logo = () => (
  <svg viewBox="0 0 53 53" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-[0.9em] w-auto text-foreground">
    <path d="M35.0002 20.9C28.1002 17.6 22.7002 12 19.6002 5C21.6002 2.9 24.2002 1.4 27.0002 0.5L28.5002 0C28.6002 0.2 28.7002 0.500012 28.7002 0.700012C31.1002 7.50001 36.0002 13 42.6002 16.1C47.2002 18.3 50.6002 22.3 52.2002 27.1L52.7002 28.6C52.5002 28.7 52.2002 28.8 52.0002 28.8C50.1002 29.5 48.2002 30.4 46.4002 31.5C43.9002 27 39.9002 23.2 35.0002 20.9Z" />
    <path d="M6.0004 21.2998C9.7004 26.8998 14.8004 31.3998 21.1004 34.3998C26.2004 36.7998 30.1004 41.2998 31.9004 46.6998L32.4004 48.3998C30.5004 50.0998 28.2004 51.3998 25.7004 52.1998L24.2004 52.6998C24.1004 52.4998 24.0004 52.1998 24.0004 51.9998C21.6004 45.1998 16.7004 39.6998 10.1004 36.5998C5.50039 34.3998 2.0004 30.3998 0.500397 25.5998L0.000396729 24.0998C2.1004 23.4998 4.1004 22.4998 6.0004 21.2998Z" />
    <path d="M36.4 43.1998C33.9 37.1998 29.3 32.2998 23.4 29.4998C18 26.8998 13.5 22.8998 10.4 17.9998C12.7 15.7998 14.6 13.2998 16 10.2998C19.7 17.0998 25.5 22.5998 32.6 25.9998C36.7 27.8998 40 31.1998 42 35.1998C39.8 37.2998 38 39.8998 36.6 42.7998C36.6 42.7998 36.5 42.9998 36.4 43.1998Z" />
  </svg>
);

const Navbar = () => {
  return (
    <header className="relative z-50">
      <nav className="h-40 flex flex-col sm:flex-row gap-(--space-lg) justify-center sm:justify-between items-start sm:items-center">
        <div className="flex justify-between items-center w-full">
          <Link href="/" aria-label="Go to PrivMeta homepage">
            <span className="flex items-center gap-(--fluid-sm-lg) type-fluid type-h1">
              <Logo />
              <Typography as="span" variant="h1" className="leading-none">
                PrivMeta
              </Typography>
            </span>
          </Link>
          <div className="flex gap-(--space-md) sm:hidden">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon-lg" aria-label="View source on GitHub" asChild>
                  <a href="https://github.com/tonixx/privmeta" target="_blank" rel="noopener noreferrer">
                    <Code className="size-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">View source code on GitHub</TooltipContent>
            </Tooltip>
            <ThemeToggle />
          </div>
        </div>

        <div className="gap-(--space-md) hidden sm:flex">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-lg" aria-label="View source on GitHub" asChild>
                <a href="https://github.com/tonixx/privmeta" target="_blank" rel="noopener noreferrer">
                  <Code className="size-5" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">View source code on GitHub</TooltipContent>
          </Tooltip>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

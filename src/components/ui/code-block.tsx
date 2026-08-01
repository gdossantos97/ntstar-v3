"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type CodeBlockProps = {
  language: string;
  filename: string;
  highlightLines?: number[];
  className?: string;
  size?: "default" | "lg";
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

export const CodeBlock = ({
  language,
  filename,
  code,
  highlightLines = [],
  tabs = [],
  className,
  size = "default",
}: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  const tabsExist = tabs.length > 0;

  const copyToClipboard = async () => {
    const textToCopy = tabsExist ? tabs[activeTab].code : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeCode = tabsExist ? tabs[activeTab].code : code;
  const activeLanguage = tabsExist
    ? tabs[activeTab].language || language
    : language;
  const activeHighlightLines = tabsExist
    ? tabs[activeTab].highlightLines || []
    : highlightLines;

  const isLarge = size === "lg";

  return (
    <div
      className={cn(
        "relative w-full rounded-lg bg-slate-900 font-mono",
        isLarge
          ? "min-h-0 p-4 text-xs sm:min-h-[20rem] sm:p-6 sm:text-sm lg:min-h-[30rem] lg:p-8 lg:text-lg"
          : "p-4 text-sm",
        className,
      )}
    >
      <div className={cn("flex flex-col", isLarge ? "gap-3" : "gap-2")}>
        {tabsExist && (
          <div className="no-visible-scrollbar -mx-1 flex overflow-x-auto border-b border-white/10">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "shrink-0 whitespace-nowrap font-sans transition-colors",
                  isLarge ? "px-3 py-2.5 text-xs sm:px-4 sm:py-3 sm:text-sm" : "px-3 !py-2 text-xs",
                  activeTab === index
                    ? "border-b-2 border-lime text-white"
                    : "text-zinc-400 hover:text-zinc-200",
                )}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}
        {!tabsExist && filename && (
          <div className="flex justify-between items-center py-2">
            <div className="text-xs text-zinc-400">{filename}</div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-sans"
            >
              {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
            </button>
          </div>
        )}
      </div>
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={activeLanguage}
          style={atomDark}
          customStyle={{
            margin: 0,
            padding: 0,
            background: "transparent",
            fontSize: isLarge ? "clamp(0.75rem, 2.5vw, 1.05rem)" : "0.875rem",
            lineHeight: isLarge ? "1.6" : "1.5rem",
            minWidth: "min-content",
          }}
        wrapLines={true}
        showLineNumbers={true}
        lineProps={(lineNumber) => ({
          style: {
            backgroundColor: activeHighlightLines.includes(lineNumber)
              ? "rgba(255,255,255,0.1)"
              : "transparent",
            display: "block",
            width: "100%",
          },
        })}
        PreTag="div"
      >
        {String(activeCode)}
      </SyntaxHighlighter>
      </div>
    </div>
  );
};

"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

type TokenKind =
  | "comment"
  | "keyword"
  | "number"
  | "operator"
  | "string"
  | "text";

type CodeToken = {
  kind: TokenKind;
  value: string;
};

const KEYWORDS = new Set([
  "AND", "DIV", "ELSE", "END", "FALSE", "FOR", "IF", "INPUT", "MOD",
  "NOT", "OR", "PRINT", "STEP", "THEN", "TO", "TRUE", "WHILE",
]);

const FUNCTIONS = new Set([
  "ABS", "CEIL", "FLOOR", "INT", "MAX", "MIN", "ROUND", "SQRT", "TRUNC",
]);

function getTokenClass(kind: TokenKind) {
  switch (kind) {
    case "comment":
      return "text-emerald-400 italic";
    case "keyword":
      return "font-semibold text-violet-300";
    case "number":
      return "text-cyan-300";
    case "operator":
      return "text-zinc-300";
    case "string":
      return "text-orange-300";
    default:
      return "text-zinc-100";
  }
}

function tokenizeLine(line: string): CodeToken[] {
  const tokens: CodeToken[] = [];
  let index = 0;

  while (index < line.length) {
    const char = line[index];

    if (char === "#") {
      tokens.push({ kind: "comment", value: line.slice(index) });
      break;
    }

    if (char === '"') {
      let end = index + 1;
      while (end < line.length) {
        if (line[end] === '"' && line[end - 1] !== "\\") {
          end += 1;
          break;
        }
        end += 1;
      }
      tokens.push({ kind: "string", value: line.slice(index, end) });
      index = end;
      continue;
    }

    const numberMatch = line.slice(index).match(/^\d+(?:\.\d+)?/);
    if (numberMatch) {
      tokens.push({ kind: "number", value: numberMatch[0] });
      index += numberMatch[0].length;
      continue;
    }

    const wordMatch = line.slice(index).match(/^[A-Za-z_][A-Za-z0-9_]*/);
    if (wordMatch) {
      const value = wordMatch[0];
      const upper = value.toUpperCase();
      tokens.push({
        kind: KEYWORDS.has(upper) || FUNCTIONS.has(upper) ? "keyword" : "text",
        value,
      });
      index += value.length;
      continue;
    }

    const operatorMatch = line
      .slice(index)
      .match(/^(<=|>=|==|!=|[+\-*/%=<>(){},])/);
    if (operatorMatch) {
      tokens.push({ kind: "operator", value: operatorMatch[0] });
      index += operatorMatch[0].length;
      continue;
    }

    tokens.push({ kind: "text", value: char });
    index += 1;
  }

  return tokens;
}

export function HighlightedCodeBlock({
  code,
  languageLabel = "MiniScript+",
}: {
  code: string;
  languageLabel?: string;
}) {
  const [copied, setCopied] = useState(false);
  const lines = code.replace(/\s+$/, "").split("\n");

  async function handleCopy() {
    setCopied(true);
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // The visual feedback remains useful when clipboard access is restricted.
    }
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-sm shadow-md">
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-3 py-2.5 sm:px-4">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-red-400" />
          <span className="size-2.5 rounded-full bg-yellow-400" />
          <span className="size-2.5 rounded-full bg-green-500" />
          <span className="ml-2 text-xs font-medium text-zinc-400">
            {languageLabel}
          </span>
        </div>
        <Button
          type="button"
          size="sm"
          variant="ghost"
          className="h-7 gap-1.5 px-2 text-xs text-zinc-300 hover:bg-zinc-800 hover:text-white"
          onClick={handleCopy}
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
      <pre className="max-h-[360px] overflow-auto p-0 font-mono text-[13px] leading-7 [scrollbar-width:thin]">
        <code>
          {lines.map((line, lineIndex) => (
            <span
              key={`${lineIndex}-${line}`}
              className="grid min-w-max grid-cols-[3.25rem_minmax(0,1fr)] border-b border-zinc-900/60 last:border-b-0"
            >
              <span className="select-none bg-zinc-900/40 px-3 text-right text-zinc-600">
                {lineIndex + 1}
              </span>
              <span className="whitespace-pre px-4">
                {tokenizeLine(line).map((token, tokenIndex) => (
                  <span
                    key={`${tokenIndex}-${token.value}`}
                    className={getTokenClass(token.kind)}
                  >
                    {token.value}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

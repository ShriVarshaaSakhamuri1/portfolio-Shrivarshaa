"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypingEffectProps {
  textArray?: string[];
  className?: string;
  staticText?: string;
}

const defaultTextArray = [
  "ML Engineer",
  "Data Scientist",
  "AI Engineer"
];

export function TypingEffect({
  textArray = defaultTextArray,
  className,
  staticText = "ML Engineer / Data Scientist",
}: TypingEffectProps) {
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = textArray[currentTextIndex];
    const isComplete = typedText === currentText;
    const delay = isComplete && !isDeleting ? 1600 : isDeleting ? 50 : 85;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentText.substring(0, typedText.length + 1));

        if (isComplete) {
          setIsDeleting(true);
        }
      } else {
        setTypedText(currentText.substring(0, typedText.length - 1));

        if (typedText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % textArray.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [typedText, currentTextIndex, isDeleting, textArray]);

  return (
    <div className={cn("flex min-h-7 items-center", className)}>
      <span className="hidden motion-reduce:inline">{staticText}</span>
      <span className="motion-reduce:hidden">
        {typedText}
        <span className="animate-blink">_</span>
      </span>
    </div>
  );
}

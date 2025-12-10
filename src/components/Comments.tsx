"use client";

import React, { useState, useEffect } from "react";
import Giscus from "@giscus/react";

// This function runs on the client to determine the current theme
const getTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") {
    return "light";
  }
  return (
    (document.documentElement.getAttribute("data-theme") as "light" | "dark") ||
    "light"
  );
};

export default function Comments() {
  // State to hold the current theme
  const [theme, setTheme] = useState<"light" | "dark">(getTheme());

  useEffect(() => {
    // Set the initial theme once the component mounts on the client
    setTheme(getTheme());

    // Use a MutationObserver to listen for changes to the data-theme attribute on the <html> tag
    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-10 pt-10 border-t border-[var(--border-color)]">
      <Giscus
        id="comments"
        repo="Yuvraj-cyborg/meweb"
        repoId="R_kgDOMf_qFA"
        category="General"
        categoryId="DIC_kwDOMf_qFM4Chfxb"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}

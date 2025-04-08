import React, { useEffect } from "react";
import Script from "next/script";

export default function Reviews() {
  useEffect(() => {
    // Initialize the iframe resizing after the script has loaded
    if (typeof iFrameResize !== "undefined") {
      iFrameResize();
    }
  }, []);

  return (
    <>
      {/* Load the Embedsocial script asynchronously */}
      <Script
        src="https://embedsocial.com/js/iframe.js"
        strategy="afterInteractive" // Load script after the page has rendered
        onLoad={() => {
          // Optionally trigger any function from the loaded script
          if (typeof iFrameResize !== "undefined") {
            iFrameResize();
          }
        }}
      />
      <iframe
        style={{ border: 0, width: "100%", height: "100%" }}
        scrolling="no"
        src="https://embedsocial.com/api/pro_hashtag/62df22c67d69c682692fa8893d523e0bd2cc0304"
      ></iframe>
    </>
  );
}

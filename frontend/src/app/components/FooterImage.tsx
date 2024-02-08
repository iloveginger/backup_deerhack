"use client";
import Image from "next/image";
import React from "react";
import { useLayoutEffect, useRef, useState } from "react";

function FooterImage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
  }, []);
  return (
    <div className="relative" ref={targetRef}>
      <Image
        src="FooterArt.svg"
        alt="footer Art"
        height={dimensions.height}
        width={dimensions.width}
        className="absolute top-[50%]  translate-y-[-65%]"
      />
    </div>
  );
}

export default FooterImage;

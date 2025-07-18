"use client";
import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const PixelTracker = () => {
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID!;
    ReactPixel.init(pixelId);
    ReactPixel.pageView();
  }, []);
  return null;
};
export default PixelTracker;
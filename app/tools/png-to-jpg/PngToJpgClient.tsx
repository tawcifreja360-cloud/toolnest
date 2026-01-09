"use client";

import { useEffect, useRef, useState } from "react";

export default function PngToJpgClient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [jpgUrl, setJpgUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!imageSrc || !canvasRef.current) return;
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = img.width;
      canvas.height = img.height;
      const context = canvas.getContext("2d");
      if (!context) return;
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        if (!blob) return;
        setJpgUrl(URL.createObjectURL(blob));
      }, "image/jpeg");
    };
    img.src = imageSrc;
  }, [imageSrc]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    if (!jpgUrl) return;
    const link = document.createElement("a");
    link.download = "converted-image.jpg";
    link.href = jpgUrl;
    link.click();
  };

  return (
    <section style={{ display: "grid", gap: "1rem", maxWidth: 760 }}>
      <input type="file" accept="image/png" onChange={handleFileChange} />
      {imageSrc ? (
        <div style={{ display: "grid", gap: "0.75rem" }}>
          <button type="button" onClick={handleDownload}>
            Download JPG
          </button>
          <canvas ref={canvasRef} style={{ maxWidth: "100%", border: "1px solid #ddd" }} />
          {jpgUrl ? (
            <img
              src={jpgUrl}
              alt="Converted JPG preview"
              style={{ maxWidth: "100%", border: "1px solid #ddd" }}
            />
          ) : null}
        </div>
      ) : (
        <p>Upload a PNG file to convert it to JPG.</p>
      )}
    </section>
  );
}

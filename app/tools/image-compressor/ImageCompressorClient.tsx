"use client";

import { useEffect, useRef, useState } from "react";

export default function ImageCompressorClient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [quality, setQuality] = useState(0.8);
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);
  const [compressedSize, setCompressedSize] = useState<number | null>(null);

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
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0);
      canvas.toBlob(
        (blob) => {
          if (!blob) return;
          setCompressedSize(blob.size);
          setCompressedUrl(URL.createObjectURL(blob));
        },
        "image/jpeg",
        quality,
      );
    };
    img.src = imageSrc;
  }, [imageSrc, quality]);

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
    if (!compressedUrl) return;
    const link = document.createElement("a");
    link.download = "compressed-image.jpg";
    link.href = compressedUrl;
    link.click();
  };

  return (
    <section style={{ display: "grid", gap: "1rem", maxWidth: 760 }}>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imageSrc ? (
        <div style={{ display: "grid", gap: "0.75rem" }}>
          <label>
            Compression quality: {Math.round(quality * 100)}%
            <input
              type="range"
              min={0.4}
              max={1}
              step={0.05}
              value={quality}
              onChange={(event) => setQuality(Number(event.target.value))}
            />
          </label>
          <button type="button" onClick={handleDownload}>
            Download compressed image
          </button>
          {compressedSize ? (
            <p>Estimated file size: {(compressedSize / 1024).toFixed(1)} KB</p>
          ) : null}
          <canvas ref={canvasRef} style={{ maxWidth: "100%", border: "1px solid #ddd" }} />
          {compressedUrl ? (
            <img
              src={compressedUrl}
              alt="Compressed preview"
              style={{ maxWidth: "100%", border: "1px solid #ddd" }}
            />
          ) : null}
        </div>
      ) : (
        <p>Select an image to compress.</p>
      )}
    </section>
  );
}

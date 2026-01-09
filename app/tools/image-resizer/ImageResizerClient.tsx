"use client";

import { useEffect, useRef, useState } from "react";

export default function ImageResizerClient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [originalSize, setOriginalSize] = useState({ width: 0, height: 0 });
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [keepAspect, setKeepAspect] = useState(true);

  useEffect(() => {
    if (!imageSrc || !canvasRef.current) return;
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = width || img.width;
      canvas.height = height || img.height;
      const context = canvas.getContext("2d");
      if (!context) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = imageSrc;
  }, [height, imageSrc, width]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setImageSrc(result);
      const img = new Image();
      img.onload = () => {
        setOriginalSize({ width: img.width, height: img.height });
        setWidth(img.width);
        setHeight(img.height);
      };
      img.src = result;
    };
    reader.readAsDataURL(file);
  };

  const handleWidthChange = (value: number) => {
    if (keepAspect && originalSize.width) {
      const ratio = originalSize.height / originalSize.width;
      setHeight(Math.round(value * ratio));
    }
    setWidth(value);
  };

  const handleHeightChange = (value: number) => {
    if (keepAspect && originalSize.height) {
      const ratio = originalSize.width / originalSize.height;
      setWidth(Math.round(value * ratio));
    }
    setHeight(value);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "resized-image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <section style={{ display: "grid", gap: "1rem", maxWidth: 760 }}>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imageSrc ? (
        <div style={{ display: "grid", gap: "0.75rem" }}>
          <p>
            Original size: {originalSize.width} × {originalSize.height}
          </p>
          <label>
            Width
            <input
              type="number"
              min={1}
              value={width}
              onChange={(event) => handleWidthChange(Number(event.target.value))}
            />
          </label>
          <label>
            Height
            <input
              type="number"
              min={1}
              value={height}
              onChange={(event) => handleHeightChange(Number(event.target.value))}
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={keepAspect}
              onChange={(event) => setKeepAspect(event.target.checked)}
            />{" "}
            Keep aspect ratio
          </label>
          <button type="button" onClick={handleDownload}>
            Download resized image
          </button>
          <canvas ref={canvasRef} style={{ maxWidth: "100%", border: "1px solid #ddd" }} />
        </div>
      ) : (
        <p>Upload an image to start resizing.</p>
      )}
    </section>
  );
}

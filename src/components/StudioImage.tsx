import { type ImgHTMLAttributes, useState } from "react";

export type StudioImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  sources: string[];
};

export function StudioImage({ sources, ...props }: StudioImageProps) {
  const [sourceIndex, setSourceIndex] = useState(0);

  return (
    <img
      {...props}
      src={sources[sourceIndex]}
      onError={() => {
        if (sourceIndex < sources.length - 1) {
          setSourceIndex(sourceIndex + 1);
        }
      }}
    />
  );
}

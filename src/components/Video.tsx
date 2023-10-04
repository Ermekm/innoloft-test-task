import { type FC } from "react";
import { convertToEmbedLink } from "../helpers/convertToEmbedLink";

interface VideoProps {
  src: string;
}

export const Video: FC<VideoProps> = ({ src }) => {
  const link = convertToEmbedLink(src);

  return (
    <div className="relative mx-auto md:w-[70%] w-[100%]">
      <div className="pt-[56.25%]"></div>
      {link !== null ? (
        <iframe
          className="absolute top-0 left-0 w-[100%] h-[100%]"
          src={link}
          allowFullScreen
        ></iframe>
      ) : (
        <div className="absolute top-[50%] w-[100%] text-center">
          Incorrect link
        </div>
      )}
    </div>
  );
};

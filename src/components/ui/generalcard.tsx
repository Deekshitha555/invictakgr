import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export const UniformGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const UniformCard = ({
  title,
  description,
  icon,
  img,
  imgAlt,
  className,
}: {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  imgAlt?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center bg-gradient-to-b from-purple-500 to-purple-700 text-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4",
        className
      )}
    >
      {/* Icon */}
      {icon && (
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg font-bold mb-2">{title}</h3>

      {/* Image */}
      {img && (
        <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
          <Image
            src={img}
            alt={imgAlt || `${title} illustration`}
            layout="fill"
            className="object-cover"
          />
        </div>
      )}

      {/* Description */}
      <p className="text-sm text-center">{description}</p>
    </div>
  );
};

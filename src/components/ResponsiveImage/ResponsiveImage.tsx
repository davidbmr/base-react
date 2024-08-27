import React from 'react'
import { Box } from "@mui/material";

interface ResponsiveImageProps {
  alt: string;
  src?: any;
  maxWidth?: number;
}

export const ResponsiveImage = ({ alt = 'Responsive Image', src = "https://via.placeholder.com/300", maxWidth = 150 }: ResponsiveImageProps) => {
  return (
    <Box
      component="img"
      sx={{
        width: '100%',  // Hace la imagen responsive
        maxWidth,  // Limita el tamaño máximo para mantenerla pequeña
        height: maxWidth, // Mantiene la proporción de la imagen
        borderRadius: 2, // Opcional: añade bordes redondeados
      }}
      src={src} // Reemplaza esta URL con la de tu imagen
      alt={alt}
    />
  );
};
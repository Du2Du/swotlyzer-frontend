import {
  Badge,
  Box,
  Flex,
  Image,
  Portal,
  useSafeLayoutEffect,
} from "@chakra-ui/react";
import html2canvas from "html2canvas";
import React, { useEffect, useRef, useState } from "react";
import { SwotAnalysis, SwotLayoutDictionary } from "../../GlobalInterface/Swot";
import { SwotFiedList } from "../SwotFieldList";

export const SwotCard: React.FC<SwotAnalysis & { index: number }> = (props) => {
  //   const printContainer = useRef<HTMLDivElement>(null);
  const { index, ...rest } = props;
  const { swotLayoutType, swotTemplate, title } = rest;
  const [previewURL, setPreviewURL] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [hasFailedPreview, setHasFailedPreview] = useState(false);

  const handleDownloadImage = async (element: HTMLDivElement) => {
    console.log(element);
    console.log(isLoading, previewURL, hasFailedPreview);
    if (isLoading || previewURL || hasFailedPreview) return;
    console.log("PASSEI");
    try {
      setIsLoading(true);
      const canvas = await html2canvas(element as HTMLElement, {
        height: 360,
        width: 400,
      });

      const data = canvas.toDataURL("image/png");
      setPreviewURL(data);
    } catch (error) {
      console.warn(error);
      setIsLoading(false);
      setHasFailedPreview(true);
    }
  };

  return (
    <Box
      w="330px"
      h="350px"
      borderRadius="lg"
      bg="white"
      overflow="hidden"
      shadow="lg"
      color="white"
      cursor="pointer"
      transition="transform .2s"
      _hover={{
        transform: "scale(1.02)",
      }}
    >
      <Box h="60%">
        <Image
          boxSize="100%"
          objectFit="contain"
          filter="blur(4px)"
          src={previewURL}
          alt={title}
        />
      </Box>
      <Box bg="blackAlpha.700" h="40%" p="5">
        <Box display="flex" alignItems="baseline">
          <Box letterSpacing="wide" fontSize="xs">
            {SwotLayoutDictionary[swotLayoutType]} {" - "}
            {swotTemplate && (
              <Badge
                borderRadius="full"
                color="white"
                px="2"
                colorScheme="whatsapp"
              >
                Template
              </Badge>
            )}
          </Box>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {title}
        </Box>
      </Box>
      <Portal appendToParentPortal={false}>
        {/* HACK */}
        <Box position="relative" overflow="hidden">
          <Box
            position="absolute"
            ref={handleDownloadImage}
            top={19999999 * (index + 1)}
            right={300000000}
          >
            <SwotFiedList {...rest} />
          </Box>
        </Box>
      </Portal>
    </Box>
  );
};

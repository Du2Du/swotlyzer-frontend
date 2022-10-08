import { Badge, Box } from "@chakra-ui/react";
import React from "react";
import { SwotAnalysis, SwotLayoutDictionary } from "../../GlobalInterface/Swot";

export const SwotCard: React.FC<SwotAnalysis & { index: number }> = (props) => {
  //   const printContainer = useRef<HTMLDivElement>(null);
  const { index, ...rest } = props;
  const colors = ["red.400", "white.400", "cyan.400"]
  const { swotLayoutType, swotTemplate, title } = rest;
  // const [previewURL, setPreviewURL] = useState<string>();
  // const [isLoading, setIsLoading] = useState(false);
  // const [hasFailedPreview, setHasFailedPreview] = useState(false);

  // const handleDownloadImage = async (element: HTMLDivElement) => {
  //   console.log(element);
  //   console.log(isLoading, previewURL, hasFailedPreview);
  //   if (isLoading || previewURL || hasFailedPreview) return;
  //   console.log("PASSEI");
  //   try {
  //     setIsLoading(true);
  //     const canvas = await html2canvas(element as HTMLElement, {
  //       height: 360,
  //       width: 400,
  //     });

  //     const data = canvas.toDataURL("image/png");
  //     setPreviewURL(data);
  //   } catch (error) {
  //     console.warn(error);
  //     setIsLoading(false);
  //     setHasFailedPreview(true);
  //   }
  // };

  return (
    <Box
      w="100%"
      h="100%"
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
      <Box bg={colors[index]} h="60%"/>
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
    </Box>
  );
};

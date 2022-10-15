import {
  Modal as ChakraModal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps as ChakraModalProps,
  useBoolean,
} from "@chakra-ui/react";
import React from "react";
interface ModalProps extends ChakraModalProps {
  useOverlay?: boolean;
  title?: string;
  footer?: React.ReactNode;
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  children,
  useOverlay = true,
  footer,
  title,
  ...props
}) => {
  return (
    <ChakraModal {...props}>
      {useOverlay && <ModalOverlay />}
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        {children}
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;

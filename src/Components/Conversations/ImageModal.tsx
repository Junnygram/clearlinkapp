import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import React from 'react';

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal = ({ isOpen, onClose, src }: ImageModalProps) => {
  if (!src) {
    return null;
  }

  return (
    // <Modal isOpen={isOpen} onClose={onClose} size="md">
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Image objectFit="cover" alt="Image" src={src} />
        </ModalBody>
      </ModalContent>
    </>
    // </Modal>
  );
};

export default ImageModal;

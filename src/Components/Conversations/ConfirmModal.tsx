import useConversation from '@/src/hooks/useConversation';
import {
  ModalOverlay,
  useDisclosure,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Flex,
} from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import toast from 'react-hot-toast';

interface ConfirmModalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}
function ConfirmModal({ isOpen, onClose }: ConfirmModalDrawerProps) {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const router = useRouter();
  const { conversationId } = useConversation();
  const [isLoading, setIsLoading] = useState(false);

  const onDelete = useCallback(() => {
    setIsLoading(true);

    axios
      .delete(`/api/conversations/${conversationId}`)
      .then(() => {
        onClose();
        router.push('/conversations');
        toast.success('Conversations deleted');
        router.refresh();
      })
      .catch(() => toast.error('Something went wrong!'))
      .finally(() => setIsLoading(false));
  }, [router, conversationId, onClose]);

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader> Delete conversation</ModalHeader>
          <ModalCloseButton />
          <ModalBody pt=".2rem">
            <Text>
              {' '}
              Are you sure you want to delete this conversation? This action
              cannot be undone.
            </Text>
            <Flex justify="space-evenly" py="1rem">
              {' '}
              <Button onClick={onDelete}>Delete</Button>
              <Button onClick={onClose}>Cancel </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ConfirmModal;

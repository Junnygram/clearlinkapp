'use client';
import useOtherUser from '@/src/hooks/useOtherUser';
import { Conversation, User } from '@prisma/client';
import React from 'react';
interface ProfileDrawerProps {
  data: Conversation & {
    users: User[];
  };
  isOpen: boolean;
  onClose: () => void;
}
const ProfileDrawer = ({ data, isOpen, onClose }: ProfileDrawerProps) => {
  const otherUser = useOtherUser(data);

  return <div>ProfileDrawer</div>;
};

export default ProfileDrawer;

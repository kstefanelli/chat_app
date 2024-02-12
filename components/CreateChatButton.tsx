'use client';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { MessageSquarePlusIcon } from 'lucide-react';

function CreateChatButton() {
  const router = useRouter();

  const CreateNewChat = async () => {
    // add logic
    router.push(`/chat/abc`);
  };
  return (
    <Button onClick={CreateNewChat} variant={'ghost'}>
      <MessageSquarePlusIcon className="text-black dark:text-white" />
    </Button>
  );
}

export default CreateChatButton;

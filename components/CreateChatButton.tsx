'use client';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { MessageSquarePlusIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useToast } from './ui/use-toast';
// import LoadingSpinner from "./LoadingSpinner"
import { v4 as uuidv4 } from 'uuid';

function CreateChatButton({ isLarge }: { isLarge?: boolean }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  // const subscription = useSubscriptionStore((state: any) => state.subscription);

  const CreateNewChat = async () => {
    if (!session?.user.id) return;

    setLoading(true);
    toast({
      title: 'Creating new chat...',
      description: 'Hold tight while we create your new chat...',
      duration: 3000,
    });

    const chatId = uuidv4();

    router.push(`/chat/abc`);
  };

  if (isLarge) {
    return (
      <div>
        <Button>
          {/* {loading ? <LoadingSpinner /> : 'Create New Chat' } */}
        </Button>
      </div>
    );
  }

  return (
    <Button onClick={CreateNewChat} variant={'ghost'}>
      <MessageSquarePlusIcon className="text-black dark:text-white" />
    </Button>
  );
}

export default CreateChatButton;

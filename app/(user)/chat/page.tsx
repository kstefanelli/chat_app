import React from 'react';

type Props = {
  params: {};
  searchParams: {
    error: string;
  };
};

function ChatsPage({ searchParams: { error } }: Props) {
  return <div>Chat</div>;
}

export default ChatsPage;

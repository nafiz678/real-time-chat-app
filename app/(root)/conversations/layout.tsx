"use client";

import ItemList from '@/components/shared/item-list/ItemList'
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { Loader } from 'lucide-react';
import React from 'react'
import DMConversationItems from './_components/DMConversationItems';
import CreateGroupDialog from './_components/CreateGroupDialog';
import GroupConversationItems from './_components/GroupConversationItems';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = React.PropsWithChildren<{}>

const ConversationLayout = ({ children }: Props) => {

  const conversations = useQuery(api.conversations.get)

  return (
    <>
      <ItemList title='Conversations' action={<CreateGroupDialog />}>{
        conversations ? conversations.length === 0 ? <p className='w-full h-full flex items-center justify-center'>No Conversation Found</p> :
          conversations.map(conversations => conversations.conversation.isGroup ? <GroupConversationItems
            key={conversations.conversation._id}
            id={conversations.conversation._id}
            name={conversations.conversation.name || ""}
            lastMessageContent={conversations.lastMessage?.content}
            lastMessageSender={conversations.lastMessage?.sender}
          /> : <DMConversationItems
            key={conversations.conversation._id}
            id={conversations.conversation._id}
            username={conversations.otherMember?.username || ""}
            imageUrl={conversations.otherMember?.imageUrl || ""}
            lastMessageContent={conversations.lastMessage?.content}
            lastMessageSender={conversations.lastMessage?.sender}
          />)
          : <Loader className='animate-spin' />
      }</ItemList>
      {children}
    </>
  )
}

export default ConversationLayout
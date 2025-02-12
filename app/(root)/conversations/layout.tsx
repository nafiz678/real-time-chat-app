"use client";

import ItemList from '@/components/shared/item-list/ItemList'
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { Loader } from 'lucide-react';
import React from 'react'
import DMConversationItems from './_components/DMConversationItems';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = React.PropsWithChildren<{}>

const ConversationLayout = ({ children }: Props) => {

  const conversations = useQuery(api.conversations.get)

  return (
    <>
      <ItemList title='Conversations'>{
        conversations ? conversations.length === 0 ? <p className='w-full h-full flex items-center justify-center'>No Conversation Found</p> :
          conversations.map(conversations => conversations.conversation.isGroup ? null : <DMConversationItems  key={conversations.conversation._id} id={conversations.conversation._id} username={conversations.otherMember?.username || ""} imageUrl={conversations.otherMember?.imageUrl || ""} />)
          : <Loader className='animate-spin' />
      }</ItemList>
      {children}
    </>
  )
}

export default ConversationLayout
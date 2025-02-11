import ItemList from '@/components/shared/item-list/ItemList'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = React.PropsWithChildren<{}>

const ConversationLayout = ({children}: Props) => {
  return (
    <>
      <ItemList title='Conversations'>Conversation page</ItemList>
    {children}
    </>
  )
}

export default ConversationLayout
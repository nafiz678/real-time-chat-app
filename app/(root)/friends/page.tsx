import ConversationFallback from "@/components/shared/conversation/ConversationFallback"
import ItemList from "@/components/shared/item-list/ItemList"
import AddFriendDialog from "./_components/AddFriendDialog"

const FriendsPage = () => {
  return (
    <>
      <ItemList title="Friends" action={<AddFriendDialog />} >Friends Page</ItemList>
      <ConversationFallback />
    </>
  )
}

export default FriendsPage
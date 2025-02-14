"use client";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel'
import { useMutationState } from '@/hooks/useMutationState';
import { ConvexError } from 'convex/values';
import React, { Dispatch, SetStateAction } from 'react'
import { toast } from 'sonner';

type Props = {
    conversationId: Id<"conversations">;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;


}

const RemoveFriendDialog = ({ conversationId, open, setOpen }: Props) => {

    const {mutate: removeFriend, pending} = useMutationState(api.friend.remove)

    const handleRemoveFriend = async () => {
        removeFriend({conversationId})
        .then(()=> {
            toast.success("Removed Friend");
        })
        .catch((error)=> {
            toast.error(error instanceof ConvexError? error.data : "Unexpected error happened");
        })
    }


    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>This action will remove from your friend list permanently. You will no longer be able to interact with them. This action cannot be undone.All group chats will still work as normal. Are you sure you want to proceed?</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel disabled={pending}>Cancel</AlertDialogCancel>
                    <AlertDialogAction disabled={pending} onClick={handleRemoveFriend}>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default RemoveFriendDialog
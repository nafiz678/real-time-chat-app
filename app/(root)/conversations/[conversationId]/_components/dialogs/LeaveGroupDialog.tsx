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

const LeaveGroupDialog = ({ conversationId, open, setOpen }: Props) => {

    const {mutate: leaveGroup, pending} = useMutationState(api.conversation.leaveGroup)

    const handleLeaveGroup = async () => {
        leaveGroup({conversationId})
        .then(()=> {
            toast.success("You left");
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
                    <AlertDialogDescription>You will no longer be able to interact with them. This action cannot be undone. Are you sure you want to proceed?</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel disabled={pending}>Cancel</AlertDialogCancel>
                    <AlertDialogAction disabled={pending} onClick={handleLeaveGroup}>Leave</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default LeaveGroupDialog
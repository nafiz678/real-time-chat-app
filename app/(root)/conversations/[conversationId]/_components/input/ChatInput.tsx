"use client";

import { Card } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { api } from '@/convex/_generated/api';
import { useConversation } from '@/hooks/useConversation';
import { useMutationState } from '@/hooks/useMutationState';
import { zodResolver } from '@hookform/resolvers/zod';
import { ConvexError } from 'convex/values';
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import TextAreaAutoSize from "react-textarea-autosize"
import { Button } from '@/components/ui/button';
import { SendHorizonal } from 'lucide-react';

const chatMessageSchema = z.object({
    content: z.string().min(1, { message: "Message cannot be empty" })
})

const ChatInput = () => {

    const { conversationId } = useConversation()

    const { mutate: createMessage, pending } = useMutationState(api.message.create)

    const form = useForm<z.infer<typeof chatMessageSchema>>({
        resolver: zodResolver(chatMessageSchema),
        defaultValues: {
            content: ""
        }
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value, selectionStart } = event.target

        if (selectionStart !== null) {
            form.setValue("content", value)
        }
    }

    const handleSubmit = async (values: z.infer<typeof chatMessageSchema>) => {
        createMessage({
            conversationId,
            type: "text",
            content: [values.content]
        })
            .then(() => { form.reset() })
            .catch((error) => {
                toast.error(error instanceof ConvexError
                    ?
                    error.data
                    :
                    "Unexpected error occurred")
            })
    }

    return (
        <Card className='w-full p-2 rounded-lg relative'>
            <div className='flex gap-2 items-end w-full'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className='flex gap-2 items-end w-full'>
                        <FormField control={form.control} name='content'
                            render={({ field }) => {
                                return <FormItem className='h-full w-full'>
                                    <FormControl>
                                        <TextAreaAutoSize
                                            onKeyDown={async (e) => {
                                                if(e.key === "Enter" && !e.shiftKey){
                                                    e.preventDefault();
                                                    await form.handleSubmit(handleSubmit)()
                                                }
                                            }}
                                            rows={1}
                                            maxRows={4}
                                            {...field}
                                            onChange={handleInputChange}
                                            placeholder='Type here...'
                                            className='min-h-full w-full resize-none border-0 outline-0 bg-card text-card-foreground placeholder:text-muted-foreground px-1.5 pt-1.5'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            }}
                        />
                        <Button disabled={pending} size={"icon"} type='submit'>
                            <SendHorizonal></SendHorizonal>
                        </Button>
                    </form>
                </Form>
            </div>
        </Card>
    )
}

export default ChatInput
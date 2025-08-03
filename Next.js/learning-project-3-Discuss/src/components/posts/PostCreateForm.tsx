"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { createPost } from "@/actions/create-post"
import { useActionState } from "react"


type createPostFormProps = {
    slug: string
}

const PostCreateForm: React.FC<createPostFormProps> = ({slug}) => {

    const [formState, action] = useActionState(createPost.bind(null, slug), { errors: {} })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Create Post</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <form action={action}>
                    <DialogHeader>
                        <DialogTitle>Create a Post</DialogTitle>
                        <DialogDescription>
                            Write a new post. Click save when you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div>
                            <Label htmlFor="title">
                                Title
                            </Label>
                            <Input id="title" name="title" />
                        </div>
                        {formState.errors.title && <p className="text-sm text-red-600" >{formState.errors.title}</p>}
                        <div>
                            <Label htmlFor="content" className="text-right">
                                Content
                            </Label>
                            <Textarea id="content" name="content" />
                        </div>
                        {formState.errors.content && <p className="text-sm text-red-600">{formState.errors.content}</p>}
                        {formState.errors.formError && <div className="border border-red-600 p-2 bg-red-200 rounded-md my-2">{formState.errors.formError}</div>}
                    </div>
                    <DialogFooter>
                        <Button type="submit" className="w-full">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default PostCreateForm
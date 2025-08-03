'use server'
import { z } from 'zod'

const createCommentSchema = z.object({
    content: z.string().min(3)
})

export const createComment = async (formData: FormData) => {
    const result = createCommentSchema.safeParse({
        content: formData.get('content')
    })
}
'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

const CommentCreateForm = () => {
    const [open, setOpen] = useState(true);

    return (
        <div>
            <Button onClick={() => setOpen(!open)} variant={'link'}>Reply</Button>
            {
                open && (
                    <form action="">
                        <Textarea name='content' placeholder='write a comment...' />
                        <Button>Save</Button>
                    </form>
                )
            }

        </div>
    )
}

export default CommentCreateForm

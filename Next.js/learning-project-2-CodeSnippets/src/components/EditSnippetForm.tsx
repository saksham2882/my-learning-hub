"use client"

import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import type { Snippet } from '@prisma/client'
import { Button } from './ui/button'
import { saveSnippet } from '@/actions'

const EditSnippetForm = ({snippet}: {snippet : Snippet}) => {
    const [code, setCode] = useState(snippet.code);

    const changeEventHandler = (value: string = "") => {
        setCode(value);
    }

    // you can't use server action as a inline inside client component
    // async function saveSnippet(){
    //     "use server"
    // }

    // using imported saveSnippet 
    const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);

    return (
        <div className='flex flex-col gap-4'>
            <form action={saveSnippetAction} className='flex items-center justify-between'>
                <h1 className='font-semibold text-2xl'>Your Code Editor: </h1>
                <Button type='submit'>Save</Button>
            </form>
            <Editor
                height="70vh"
                defaultLanguage="javascript"
                defaultValue={code}
                theme='vs-dark'
                onChange={changeEventHandler}
                options={{
                    minimap: {
                        enabled: false,
                    },
                    folding: true,
                    fontSize: 18,
                }}
            />
        </div>
    )
}

export default EditSnippetForm

import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import React from 'react'
import * as actions from "@/actions"
import { notFound } from 'next/navigation';
// import LoadingPage from './loading';

type SnippetDetailProps = {
    params: Promise<{ id: string }>
}

// Method 1: 
// const SnippetDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {

// Method 2:
const SnippetDetailPage: React.FC<SnippetDetailProps> = async ({ params }) => {
    const id = parseInt((await params).id);

    // Add for testing loading
    await new Promise((r) => setTimeout(r, 3000))

    // fetch data from database by id
    const snippet = await prisma.snippet.findUnique({
        where: {
            id,
        }
    })

    if (!snippet) return notFound()

    const deleteSnippetActions = actions.deleteSnippet.bind(null, snippet.id)

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-xl'>{snippet.title}</h1>
                <div className='flex items-center gap-2'>
                    <Link href={`/snippet/${snippet.id}/edit`}><Button>Edit</Button></Link>

                    <form action={deleteSnippetActions}>
                        <Button variant={"destructive"} type='submit'>Delete</Button>
                    </form>
                </div>
            </div>
            <pre className='p-3 bg-gray-200 rounded-md border-gray-200'>
                <code>{snippet.code}</code>
            </pre>
            <div className='mx-auto'>
                <Link href={"/"}><Button>Back</Button></Link>
            </div>
        </div>
    )
}

export default SnippetDetailPage

// all params are got in "string".
// params are used for :
// 1. get data from server, local storage, database, API, other sources, other components, other pages


export const generateStaticParams = async () => {
    const snippets = await prisma.snippet.findMany();

    return snippets.map((snippets) => {
        return { id: snippets.id.toString() }
    })
}
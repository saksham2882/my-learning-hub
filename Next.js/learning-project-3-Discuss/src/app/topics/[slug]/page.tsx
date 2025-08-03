import PostList from '@/components/posts/post-list';
import PostCreateForm from '@/components/posts/PostCreateForm';
import { Separator } from '@/components/ui/separator';
import { fetchPostByTopicSlug } from '@/lib/query/post';
import React from 'react';

type TopicShowPageProps = {
    params: Promise<{ slug: string }>;
};

const TopicShowPage: React.FC<TopicShowPageProps> = async ({ params }) => {
    const slug = (await params).slug;

    return (
        <div className="mt-[100px] px-6 lg:px-16 bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex justify-between">
                <h1 className="text-3xl font-extrabold text-gray-600 mb-4">{slug}</h1>
                <PostCreateForm slug={slug} />
            </div>
            <Separator className="my-6 bg-gray-300" />
            <div className="mt-10 mb-10">
                <PostList fetchData={() => fetchPostByTopicSlug(slug)} />
            </div>
        </div>
    );
};

export default TopicShowPage;

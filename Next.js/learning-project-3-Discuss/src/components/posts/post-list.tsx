import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { PostWithData } from '@/lib/query/post';

type PostListProps = {
    fetchData: () => Promise<PostWithData[]>;
};

const PostList: React.FC<PostListProps> = async ({ fetchData }) => {
    const posts = await fetchData();

    return (
        <div className="space-y-3"> 
            {posts.map((post) => (
                <Card
                    key={post.id}
                    className="transition duration-300 transform bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 relative z-10"
                >
                    <CardHeader className="relative z-10 bg-white shadow-md rounded-lg">
                        <CardTitle className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition">
                            {post.title}
                        </CardTitle>
                        <CardDescription className="flex justify-between text-gray-500 text-sm">
                            <h1 className="font-medium">By {post.user?.name}</h1>
                            <h1>{post._count.comments} comments</h1>
                        </CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
};

export default PostList;

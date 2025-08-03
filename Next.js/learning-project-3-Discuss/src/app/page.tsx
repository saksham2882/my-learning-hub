import PostList from "@/components/posts/post-list";
import TopicCreateForm from "@/components/topics/TopicCreateForm";
import { Separator } from "@/components/ui/separator";
import { fetchTopPosts } from "@/lib/query/post";

export default async function Home() {
    return (
        <div className="mt-[100px] px-6 lg:px-16 bg-gray-100 p-6 rounded-lg shadow-md mb-20">
            <div className="flex justify-between">
                <h1 className="text-3xl font-extrabold text-gray-600 mb-4">Top Posts</h1>
                <TopicCreateForm />
            </div>
            <Separator className="my-6 bg-gray-300" />
            <div className="mt-10 mb-10">
                <PostList fetchData={fetchTopPosts} />
            </div>
        </div>
    );
}

import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';

function PostCard(post: Post) {
  return (
    <div className='mb-8'>
      <h2 className='mb-1 text-xl'>
        <Link href={post.slug} className='text-blue-700 hover:text-blue-900 dark:text-blue-400'>
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.publishAt} className='mb-2 block text-xs text-gray-600'>
        {format(parseISO(post.publishAt), 'LLLL d, yyyy')}
      </time>
      <div
        className='text-sm [&>*]:mb-3 [&>*:last-child]:mb-0'
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.publishAt), new Date(b.publishAt)));

  return (
    <div className='mx-auto max-w-xl py-8'>
      <h1 className='mb-8 text-center text-2xl font-black'>Next.js + Contentlayer Example</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}

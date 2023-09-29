import { allPosts } from "@/.contentlayer/generated";
import { AnimatedText } from "@/components/animated-text";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <AnimatedText
        text={[
          "This is written on",
          "a typing machine. Tick tick",
          "tick tack tack...",
        ]}
        className="text-4xl"
        repeatDelay={10000}
      />

      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  );
}

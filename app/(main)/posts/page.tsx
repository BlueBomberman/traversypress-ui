import BackButton from "@/components/BackButton";
import PostPagination from "@/components/posts/PostPagination";
import PostTable from "@/components/posts/PostsTable";

const PostPage = () => {
  return (
    <>
      <BackButton text="Go Back" link="/x" />
      <PostTable />
      <PostPagination />
    </>
  );
}

export default PostPage;
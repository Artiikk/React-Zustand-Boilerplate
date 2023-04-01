import { usePosts } from 'src/modules/landing/pages/Homepage/homepage.service';
import { usePostStore } from 'src/modules/landing/pages/Homepage/store';

export interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export const Homepage = () => {
  const posts = usePostStore((state) => state.posts);
  const addNewPost = usePostStore((state) => state.addNewPost);
  const addNewPosts = usePostStore((state) => state.addNewPosts);
  usePosts({ onSuccess: addNewPosts });

  // We can get a certain value from the cache of react-query in every place we need it

  // const queryClient = useQueryClient();
  // const { data: post } = usePost(50);
  // const postItem = queryClient.getQueryData(['post', 50]); // getting cached data
  // console.log('postItem', postItem);

  return (
    <div>
      <h1>Welcome to the homepage!</h1>
      {posts?.map(({ title, id }: IPost, idx: number) => (
        <h3 key={idx}>
          {id}. {title}
        </h3>
      ))}
      <button onClick={addNewPost}>Add new post</button>
    </div>
  );
};

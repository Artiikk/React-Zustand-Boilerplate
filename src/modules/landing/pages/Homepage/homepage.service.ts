import { useQuery } from '@tanstack/react-query';
import { requestURLs } from 'src/constants/api';
import { IPost } from 'src/modules/landing/pages/Homepage';

interface IPostsProps {
  onSuccess: (posts: IPost[]) => void;
}

const getPosts = () => fetch(requestURLs.posts.GET).then((res) => res.json());

export const usePosts = ({ onSuccess }: IPostsProps) =>
  useQuery({ queryKey: ['posts'], queryFn: getPosts, onSuccess });

const getPostById = async (id: number) =>
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );

export function usePost(postId: number) {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPostById(postId),
    enabled: Boolean(postId),
  });
}

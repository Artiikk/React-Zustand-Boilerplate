import { createPersistStore } from 'src/lib/store/zustand';
import { IPost } from 'src/modules/landing/pages/Homepage';

interface IPostsStore {
  posts: IPost[];
  isLoading: boolean;
  error: boolean;
  addNewPost: () => void;
  addNewPosts: (posts: IPost[]) => void;
}

const postsStore = (set: any): IPostsStore => ({
  posts: [],
  isLoading: false,
  error: false,
  addNewPost: () =>
    set((state: IPostsStore) => {
      state.posts.push({
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      });
    }),
  addNewPosts: (posts: IPost[]) => {
    set((state: IPostsStore) => {
      state.posts.push(...posts);
    })
  }
});

export const usePostStore = createPersistStore('posts', postsStore);

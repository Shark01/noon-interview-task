/**
 * Interface Class for Posts
 *
 */
interface PostProps {
  id: number;
  content: string;
  image_url: string;
  liked: boolean;
  added_by: string;
  profile_image_url: string;
}

export default PostProps;

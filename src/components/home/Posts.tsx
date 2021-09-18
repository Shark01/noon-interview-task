import { NextPage } from "next";
import PostItem from "@components/home/PostItem";
import PostProps from "@data/PostProps";
import styles from '@styles/home/Posts.module.css';

/**
 * Layout for the Post list
 * 
 * 
 * @param {posts} PostProps[] List of Post data
 * @param {favorite} boolean `true` when it's display on `favorite` page
*/
const Posts: NextPage<{ posts: PostProps[], favorite: boolean }> = ({ posts, favorite }) => {
    return (
        <div className={`${styles.post_list} ${favorite ? styles.favorite : ''}`}>
            {
                posts.map((post) => (
                    <PostItem key={post.id} post={post} favorite={favorite} />
                ))
            }
        </div>
    );
}

export default Posts;
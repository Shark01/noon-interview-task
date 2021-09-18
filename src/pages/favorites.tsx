import { GetServerSideProps, NextPage } from "next";
import Meta from "@components/Meta";
import Posts from "@components/home/Posts";
import PostProps from "@data/PostProps";
import styles from '@styles/favorites/Favorites.module.css';

/**
 *  Layout for the Favorite page
 * 
 * 
 * @param {posts} PostProps[] List of liked posts
*/
const Favorites: NextPage<{ posts: PostProps[] }> = ({ posts }) => {
    return (
        <>
            <Meta title="Liked Posts - Noon Task" />
            <div className={styles.container}>
                <h1 className={styles.title}>Liked Posts</h1>
                <Posts posts={posts} favorite={true} />
            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const baseUrl = process.env.hosted ? process.env.host_url : process.env.dev_url;

    // Retrieve Liked Posts data
    const res = await fetch(`${baseUrl}/api/users/1/liked-posts`).then(data => data.json());
    const posts = res.data;

    return {
        props: {
            posts: posts
        },
    };
}

export default Favorites;
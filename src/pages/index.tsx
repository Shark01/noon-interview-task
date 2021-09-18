import type { GetServerSideProps, NextPage } from 'next';
import Meta from '@components/Meta';
import Profile from '@components/home/Profile';
import Stories from '@components/home/Stories';
import NewPost from '@components/home/NewPost';
import AdsBlock from '@components/home/AdsBlock';
import Posts from '@components/home/Posts';
import PostProps from '@data/PostProps';
import StoryProps from '@data/StoryProps';
import styles from '@styles/home/Home.module.css';

/**
 *  Layout for the Home page
 * 
 * 
 * @param {posts} PostProps[] List of posts
 * @param {stories} StoryProps[] List of Stories
*/
const Home: NextPage<{ posts: PostProps[], stories: StoryProps[] }> = ({ posts, stories }) => {
  return (
    <>
      <Meta title="Home - Noon Task" />
      <div className={styles.container}>
        <Profile />
        <Stories stories={stories} />
        <NewPost />
        <Posts posts={posts} favorite={false} />
        <AdsBlock />
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const baseUrl = process.env.hosted ? process.env.host_url : process.env.dev_url;

  // Retrieve Posts data
  const resPosts = await fetch(`${baseUrl}/api/posts`).then(data => data.json());
  const posts = resPosts.data;
  
  // Retrieve Stories data
  const resStories = await fetch(`${baseUrl}/api/stories`).then(data => data.json());
  const stories = resStories.data;

  return {
    props: {
      posts,
      stories
    },
  };
}

export default Home

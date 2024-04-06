import Image from 'next/image';
import Link from 'next/link';

import styles from './postCard.module.css';

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/20807272/pexels-photo-20807272.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt="post"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          blanditiis nemo, quo consequuntur cumque praesentium quae nulla
          molestiae, quibusdam laboriosam nostrum sunt pariatur tempore
          voluptate quisquam laudantium! Ratione, voluptatem. Amet.
        </p>
        <Link href="/blog/post" className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

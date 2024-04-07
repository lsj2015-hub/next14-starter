import Image from 'next/image';
import styles from './singlePost.module.css';

const SinglePostpage = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/20753710/pexels-photo-20753710.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt="Post Image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/20807272/pexels-photo-20807272.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt="Uer Image"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          totam sed ducimus ea quasi rem atque neque, accusamus aliquam facere
          quidem obcaecati ipsam nihil iusto repellat laborum magni, ratione
          aut!
        </div>
      </div>
    </div>
  );
};

export default SinglePostpage;

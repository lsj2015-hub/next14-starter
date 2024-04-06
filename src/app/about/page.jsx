import Image from 'next/image';

import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/17920141/pexels-photo-17920141.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt="about"
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;

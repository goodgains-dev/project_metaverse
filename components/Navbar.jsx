'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles} py-8 relative`}
  >
    <div className="gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <h3 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        <a href="https://goodgainsgram.vercel.app/">NFTs</a>
      </h3>
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        <a href="https://goodgainsgram.vercel.app/">Trading</a>
      </h2>
      <h4 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        <a href="https://goodgainsgram.vercel.app/" target="_blank" rel="noreferrer">Gram</a>
      </h4>
      <h5 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        <a href="https://deepblue.vercel.app/">Live</a>
      </h5>
      <h6 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        <a href="https://goodgains-gram.vercel.app//">Music</a>
      </h6>
    </div>
  </motion.nav>
);

export default Navbar;

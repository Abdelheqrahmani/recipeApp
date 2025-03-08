import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import { motion } from "framer-motion";
import Main from "../components/Main";
import Category from "../components/Category";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Main />
      <Category />
      <Popular />
      <Veggie />
    </motion.div>
  );
};

export default Home;

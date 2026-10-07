import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay },
  }),
};

/** Fades + slides its content in when it scrolls into view. `as` changes the HTML tag. */
export default function Reveal({ as = "div", delay = 0, ...props }) {
  const Tag = motion[as];
  return (
    <Tag
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    />
  );
}

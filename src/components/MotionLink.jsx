import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

// Motion-enhanced router links — reused everywhere a nav/CTA link needs the
// same spring hover/tap feedback the rest of the site uses, without losing
// real client-side routing (react-router's Link/NavLink).
export const MotionLink = motion.create(Link);
export const MotionNavLink = motion.create(NavLink);

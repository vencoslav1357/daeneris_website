import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaArrowRight } from 'react-icons/fa';

interface TextLink {
  text: string;
  href: string;
}

interface ContentItem {
  subtitle: string;
  text?: string;
  textLink?: TextLink;
  bullets?: string[];
}

interface ContentSectionProps {
  id: string;
  title: string;
  content: ContentItem[];
  icon?: IconType;
}

export function ContentSection({ id, title, content, icon: Icon }: ContentSectionProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        {Icon && <Icon className="text-2xl text-blue-500" />}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>

      <div className="space-y-6">
        {content.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="space-y-3"
          >
            {item.subtitle && (
              <h3 className="text-lg font-semibold dark:text-gray-200 text-gray-800">
                {item.subtitle}
              </h3>
            )}

            {item.text && (
              <p className="dark:text-gray-400 text-gray-600 leading-relaxed">
                {item.text}
              </p>
            )}

            {item.textLink && (
              <motion.a
                href={item.textLink.href}
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
              >
                {item.textLink.text}
                <FaArrowRight className="text-sm" />
              </motion.a>
            )}

            {item.bullets && (
              <motion.ul className="space-y-2">
                {item.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-2 dark:text-gray-400 text-gray-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
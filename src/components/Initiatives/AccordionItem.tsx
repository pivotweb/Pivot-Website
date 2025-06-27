import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";

type AccordionItemProps = {
  title: string;
  content: string;
  link: string;
  index: number;
};

export default function AccordionItem({
  title,
  content,
  link,
  index,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 rounded-xl overflow-hidden">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-orange-500 px-5 py-4 text-left rounded-xl"
      >
        <div className="flex items-center gap-3 font-semibold text-lg text-black">
          <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
            {index}
          </span>
          {title}
        </div>
        <ChevronDown
          className={`transform transition-transform duration-300 text-black ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Centered Dropdown Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex justify-center mt-2 mb-4">
              <div className="bg-white shadow-md rounded-lg text-gray-700 p-5 w-[95%] md:w-[95%] lg:w-[95%]">
                <p className="mb-4">{content}</p>
                <div className="flex justify-end">
                  <a
                    href={link}
                    className="inline-flex items-center gap-2 text-sm bg-black text-white px-4 py-3 rounded-md hover:bg-gray-800 transition"
                  >
                    Visit Site <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

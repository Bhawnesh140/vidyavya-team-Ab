import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRequestCallback } from '@/context/RequestCallbackContext';

const StickyCallbackButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { openModal } = useRequestCallback();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            variant="cta"
            size="lg"
            className="rounded-full shadow-2xl gap-2"
            onClick={openModal}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Request Callback</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCallbackButton;

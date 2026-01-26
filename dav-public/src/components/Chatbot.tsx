import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes } from 'react-icons/fa';

type Message = {
  from: 'user' | 'bot';
  text: string;
  time: string;
};

const responses = [
  {
    q: 'Admission details',
    a: 'Admissions are currently open 🎓 Please visit our Admissions page or contact the office for guidance.',
  },
  {
    q: 'Contact information',
    a: 'You can reach us at 📞 821 2488429 or ✉️ info@davpublicschoolmysuru.ac.in',
  },
  {
    q: 'School timings',
    a: 'School operates from 🕗 9:00 AM to 3:00 PM, Monday to Friday.',
  },
  {
    q: 'Facilities available',
    a: 'We offer smart classrooms, science labs, library, sports ground, and a computer lab 🏫.',
  },
  {
    q: 'Transport facility',
    a: 'Yes, we provide safe and reliable school bus transportation across major routes 🚌.',
  },
];

const getTime = () =>
  new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [messages, typing]);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          from: 'bot',
          text: 'Hello 👋 How can I help you today?',
          time: getTime(),
        },
      ]);
    }
  }, [open]);

  const handleQuestion = (q: string, a: string) => {
    setMessages((msgs) => [
      ...msgs,
      { from: 'user', text: q, time: getTime() },
    ]);

    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: a, time: getTime() },
      ]);
    }, 900 + Math.random() * 700); // realistic delay
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="w-80 bg-white rounded-2xl shadow-2xl p-4 mb-2 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-blue-900">
                School Assistant
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-red-500"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={ref}
              className="flex-1 overflow-y-auto max-h-64 mb-3 space-y-2"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[75%] text-sm px-3 py-2 rounded-xl ${
                    msg.from === 'user'
                      ? 'bg-blue-100 ml-auto text-blue-900'
                      : 'bg-gray-100 mr-auto text-gray-800'
                  }`}
                >
                  <div>{msg.text}</div>
                  <div className="text-[10px] text-gray-400 mt-1 text-right">
                    {msg.time}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="bg-gray-100 text-gray-500 text-sm px-3 py-2 rounded-xl w-fit">
                  Typing…
                </div>
              )}
            </div>

            {/* Quick Questions */}
            <div className="flex flex-col gap-2">
              {responses.map((r, idx) => (
                <button
                  key={idx}
                  className="bg-blue-900 text-white rounded-xl px-3 py-2 text-sm font-semibold hover:bg-blue-700 transition"
                  onClick={() => handleQuestion(r.q, r.a)}
                >
                  {r.q}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        className="bg-blue-900 text-white rounded-full shadow-lg p-4 hover:bg-blue-700 transition flex items-center justify-center"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chatbot"
      >
        <FaComments size={24} />
      </button>
    </div>
  );
};

export default Chatbot;

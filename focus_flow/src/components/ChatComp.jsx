import { useEffect, useRef, useState } from 'react';

const ChatComp = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm your productivity assistant. I can help you with focus techniques, time management, productivity hacks, and study/work strategies. What would you like to know?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

  const isProductivityRelated = (message) => {
    const productivityKeywords = [
      'focus', 'productivity', 'time management', 'pomodoro', 'study', 'work', 'efficiency',
      'concentration', 'distraction', 'schedule', 'routine', 'habits', 'goals', 'planning',
      'task management', 'prioritization', 'motivation', 'procrastination', 'deep work',
      'mindfulness', 'meditation', 'break', 'energy', 'sleep', 'workspace', 'organization'
    ];
    
    const messageLower = message.toLowerCase();
    return productivityKeywords.some(keyword => messageLower.includes(keyword));
  };

  const sendMessage = async () => {
    if (loading || !input.trim()) return;

    const userMessage = input.trim();
    const newMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setInput('');

    // Check if the message is related to productivity
    if (!isProductivityRelated(userMessage)) {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: "I'm here to help with productivity, focus, and time management. Could you ask me something related to those topics? For example:\n\n• How can I improve my focus?\n• What are some good time management techniques?\n• Can you suggest a study schedule?"
        }]);
      }, 500);
      return;
    }

    try {
      setLoading(true);
      
      // System message to guide the AI's responses
      const systemMessage = {
        role: 'system',
        content: `You are a helpful productivity assistant focused on helping users with focus, time management, and productivity. 
        Only answer questions related to these topics. For any off-topic questions, politely guide the user back to productivity topics.
        Keep responses concise, practical, and actionable.`
      };

      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.href,
          'X-Title': 'Focus Flow App'
        },
        body: JSON.stringify({
          model: 'openai/gpt-4o',
          messages: [systemMessage, ...newMessages.map(({ role, content }) => ({
            role,
            content: content.toString()
          }))]
        })
      });

      const data = await res.json();
      const reply = data.choices?.[0]?.message;

      if (reply) {
        setMessages([...newMessages, reply]);
      } else {
        throw new Error('No reply received');
      }
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: 'assistant', content: "Sorry, something went wrong!" }]);
    } finally {
      setLoading(false);
    }
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="w-full md:w-[92%] lg:w-[82%] xl:w-[72%] mx-auto p-3 sm:p-4 bg-white shadow rounded-md h-[70vh] md:h-[75vh] flex flex-col overflow-hidden">
      <div className="sticky top-0 bg-white pt-1 pb-2 z-10 border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold">🧠 Productivity Assistant</h2>
      </div>
      <div className="flex-1 overflow-y-auto mb-3 sm:mb-4 space-y-2 pr-1">
        {messages.map((msg, i) => (
          <div key={i} className={`p-2 rounded text-sm sm:text-base ${msg.role === 'user' ? 'bg-purple-100 text-right' : 'bg-gray-100 text-left'}`}>
            <p className="whitespace-pre-wrap break-words">{msg.content}</p>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <form className="flex gap-2 pt-1" onSubmit={(e) => { e.preventDefault(); sendMessage(); }} aria-label="Send a message">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Type your message..."
          rows={1}
          className="flex-1 px-3 sm:px-4 py-2 border rounded-md text-sm sm:text-base resize-none"
          aria-label="Message input"
        />
        <button
          type="submit"
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className={`bg-purple-500 hover:bg-purple-600 text-white px-3 sm:px-4 py-2 rounded text-sm sm:text-base ${loading || !input.trim() ? 'opacity-60 cursor-not-allowed' : ''}`}
          aria-label="Send message"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default ChatComp;

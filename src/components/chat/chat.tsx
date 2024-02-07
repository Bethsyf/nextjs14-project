'use client';

import { useChat } from 'ai/react';

export const Chat = (props: { agent: string }) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
        id: '1',
        role: 'system',
        content: props.agent,
      },
    ],
  });

  return (
    <main>
      <section>
        {messages
          .filter((m) => m.role !== 'system')
          .map((m) => (
            <div className="mb-4" key={m.id}>
              {m.role === 'user' ? 'User: ' : 'AI: '}
              {m.content}
            </div>
          ))}
      </section>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />
        <button type="submit">Send</button>
      </form>
    </main>
  );
};

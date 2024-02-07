'use client';
import { useChat } from 'ai/react';
import styles from './Chat.module.scss';

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
    <main className={styles.Chat}>
      <h1 className={styles.title}>Pregunta cualquier cosa</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          value={input}
          onChange={handleInputChange}
          placeholder="¿Qué te gustaria saber?"
        />
        <button className={styles.button}>Enviar</button>
      </form>
      <section className={styles.messages}>
        {messages
          .filter((m) => m.role !== 'system')
          .map((m) => {
            return (
              <span key={m.id} className={styles.message}>
                <div className={styles.icon}>
                  {m.role === 'assistant' ? '🤖' : '😊'}
                </div>
                <div>{m.content}</div>
              </span>
            );
          })}
      </section>
    </main>
  );
};

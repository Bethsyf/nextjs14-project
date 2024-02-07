'use client';

import { useCompletion } from 'ai/react';

export default function Chat() {
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <output>
          <p>User: {input}</p>
          <p>AI: {completion}</p>
        </output>
        <label>
          <input
            placeholder="Say something..."
            value={input}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={stop}>
          Stop
        </button>
        <button disabled={isLoading} type="submit">
          Send
        </button>
        <br />
      </form>
    </div>
  );
}

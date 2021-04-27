import { Error } from 'mongoose';
import { Message } from 'node-nats-streaming';

/**
 * @todo: Create a logger
 * @param err
 * @param msg
 */
export const handleListenerError = (err: Error, msg: Message) => {
  console.error(err.message, msg.getSubject());
};

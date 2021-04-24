import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

export class Password {
  static scryptAsync = promisify(scrypt);

  static async toHash(password: string) {
    const salt = randomBytes(8).toString('hex');
    const buffer = (await this.scryptAsync(password, salt, 64)) as Buffer;
    return `${buffer.toString('hex')}.${salt}`;
  }

  static async compare(storedPassword: string, suppliedPassword: string) {
    const [hashedPassword, salt] = storedPassword.split('.');
    const buffer = (await this.scryptAsync(
      suppliedPassword,
      salt,
      64,
    )) as Buffer;
    return buffer.toString('hex') === hashedPassword;
  }
}

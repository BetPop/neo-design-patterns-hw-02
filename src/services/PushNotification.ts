import { NotificationChannel, LoggerInterface } from "../core/interfaces";

export class PushNotification implements NotificationChannel {
  constructor(private logger: LoggerInterface) {}

  send(recipient: string, message: string): void {
    this.logger.log(`Sending PUSH to ${recipient}`);
    console.log(`Push sent to ${recipient}: ${message}`);
  }
}

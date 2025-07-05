import { NotificationChannel, LoggerInterface } from "../core/interfaces";

export class EmailNotification implements NotificationChannel {
  constructor(private logger: LoggerInterface) {}

  send(recipient: string, message: string): void {
    this.logger.log(`Sending EMAIL to ${recipient}`);
    console.log(`Email sent to ${recipient}: ${message}`);
  }
}

import { NotificationChannel, LoggerInterface } from "../core/interfaces";

export class SMSNotification implements NotificationChannel {
  constructor(private logger: LoggerInterface) {}

  send(recipient: string, message: string): void {
    this.logger.log(`Sending SMS to ${recipient}`);
    console.log(`SMS sent to ${recipient}: ${message}`);
  }
}

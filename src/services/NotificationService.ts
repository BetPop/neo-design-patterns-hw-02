import { NotificationChannel } from "../core/interfaces";

export class NotificationService {
  constructor(private channels: NotificationChannel[]) {}

  notifyAll(recipientIdentifiers: string[], message: string): void {
    this.channels.forEach((channel, index) => {
      channel.send(recipientIdentifiers[index], message);
    });
  }
}

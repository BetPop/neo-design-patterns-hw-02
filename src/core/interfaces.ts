export interface LoggerInterface {
    log(message: string): void;
  }
  
  export interface NotificationChannel {
    send(recipient: string, message: string): void;
  }
  
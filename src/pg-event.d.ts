declare module "@/pg-event" {
  export class PGEvent {
    data: {
      type: string;
      id: string;
    };
    getValues(): void;
    postToPg(dataObject: Record<string, unknown>): void;
  }
}

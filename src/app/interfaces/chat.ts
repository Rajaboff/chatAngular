export interface IRoom {
  uid: string;
  room: string;
  avatar: string;
  messages: IMessage[]
}

export interface IMessage {
  id: string;
  type: "own" | "user";
  content: string;
  time: string;
}

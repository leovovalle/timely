import { Events } from "src/app/models/Events";

export interface EventsResponse {
  data:{
    items: Events[];
  }
}

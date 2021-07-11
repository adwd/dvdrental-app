export interface Actor {
  first_name: string;
  id: number;
  last_name: string;
  last_update: string;
}

export interface Db {
  actors: Actor[];
}

export const db: Db = {
  actors: [{ id: 1, first_name: "foo", last_name: "bar", last_update: "" }],
};

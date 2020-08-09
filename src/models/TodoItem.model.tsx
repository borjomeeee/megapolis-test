export interface ITodoItem {
  id: string;

  descr: string;
}

export default class TodoItem implements ITodoItem {
  id: string;

  descr: string;

  constructor(id: string, descr: string) {
    this.id = id;
    this.descr = descr;
  }
}

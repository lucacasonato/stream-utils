export class JSONParseStream extends TransformStream<string, unknown> {
  constructor() {
    super({
      transform(chunk, controller) {
        const obj = JSON.parse(chunk);
        controller.enqueue(obj)
      },
    });
  }
}

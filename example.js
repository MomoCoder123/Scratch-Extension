class MyExtension {
  getInfo() {
    return {
      id: 'momos'
      name: 'My Extension',

      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.COMMAND,
          text: 'momo'
        }
      ]
    };
  }
  hello() {
    return 'Hello Momo!';
  }
}
Scratch.extensions.register(new MyExtension());

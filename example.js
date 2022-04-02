class MyExtension {
  getInfo() {
    return {
      id: 'myextensionexample',

      // `name` is what the user sees in the toolbox
      // It can be changed without breaking projects.
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

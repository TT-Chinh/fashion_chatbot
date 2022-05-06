
// MessageParser starter code
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
        const mes = message.toLowerCase();
        
        if (mes.includes("javascript")) {
            this.actionProvider.handleJavascriptList();
        }
        else if (mes.includes('dog')) {
            this.actionProvider.handleDog();
        }
        else this.actionProvider.greet()
    }
  }
  
  export default MessageParser;
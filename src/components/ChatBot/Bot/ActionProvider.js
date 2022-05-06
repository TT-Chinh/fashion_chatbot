
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleDog = () => {    
    const message = this.createChatBotMessage(
      "Đây là một hình ảnh chú chó đẹp cho bạn!",
      {
        widget: "dogPicture",
      }
    );

    this.updateChatbotState(message);
  };
  
  greet() {
    const greetingMessage = 
    this.createChatBotMessage("Xin chào, tôi có thể giúp gì cho bạn?")
    this.updateChatbotState(greetingMessage)
  }
  
  updateChatbotState(message) {
   this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider;
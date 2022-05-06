import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from "./Bot/LearningOptions/LearningOptions";
import LinkList from "./Bot/LinkList/LinkList";
import DogPicture from './Bot/DogPicture/DogPicture';
import FlightBotAvatar from './ChatBox/FlightBotAvatar/FlightBotAvatar';

const config = { 
  botName: "ChatBot",

  initialMessages: [createChatBotMessage(
    "Xin chào, Tôi ở đây để hỗ trợ cho bạn. Bạn muốn tôi giúp gì nào?"
  )], 

  customComponents: {
     // Replaces the default header
    // header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>This is the header</div>,
    // Replaces the default bot avatar
    botAvatar: () => <FlightBotAvatar />,
    // Replaces the default bot chat message container
    // botChatMessage: (props) => <CustomChatMessage {...props} />,
    // Replaces the default user icon
    // userAvatar: (props) => <MyUserAvatar {...props} />,
    // Replaces the default user chat message
    // userChatMessage: (props) => <MyUserChatMessage {...props} />
  },

  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  
  widgets: [
    {
        widgetName: "learningOptions",
        widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
        widgetName: 'dogPicture',
        widgetFunc: (props) => <DogPicture {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
}

export default config
interface ChatRoomMediator {
    showMessage(user: User, message: string): any;
  }
  
  class ChatRoom implements ChatRoomMediator {
    showMessage(user: User, message: string) {
      var timee = new Date();
      let day = timee.getDay();
      let month = timee.getMonth();
      let year = timee.getFullYear();
      var time: string = `${day}.${month}.${year}`;
  
      let sender = user.getName();
  
      console.log(time, sender, message);
    }
  }
  
  class User {
    protected name: string;
  
    protected chatMediator: any;
  
    constructor(name: string, chatMediator: any) {
      this.name = name;
  
      this.chatMediator = chatMediator;
    }
  
    getName() {
      return this.name;
    }
  
    send(message: any) {
      this.chatMediator.showMessage(this, message);
    }
  }
  export{
    ChatRoom,
    User
  }
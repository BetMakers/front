import { ChatUIProvider, ChatView, MODAL_POSITION_TYPE } from "@pushprotocol/uiweb";


function GroupChat(props:any ) {
    return (
      <>
        <h2>
          Live chat with pushai.eth, connect your wallet and chat to get sassy
          response from PushAI.eth
        </h2>
        <div style={{ height: "75vh", margin: "20px auto" }}>
          <ChatUIProvider>
            <ChatView
              chatId="0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666"
              limit={10}
              isConnected={true}
              verificationFailModalPosition={MODAL_POSITION_TYPE.RELATIVE}
            />
          </ChatUIProvider>
        </div>
      </>
    );
  }

  export default GroupChat;
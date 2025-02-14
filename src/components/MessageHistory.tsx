import Response from "./Response";
import Message from "./Message";
import Typing from "./Typing";

type ObjectOfList = {
    id: string;
    from: { name: string };
    type: string;
    time: string;
    text?: string;
  };
  
export type List = ObjectOfList[];

const MessageHistory = ({list = []}: {list: List}) => {

 return (
    <ul>
        {list.map(obj => {
            if (obj.type === 'response') return <Response from={ obj.from } message={{ id: obj.id, time: obj.time, text: obj.text }}/>;
            if (obj.type === 'message') return <Message from={ obj.from } message={{ id: obj.id, time: obj.time, text: obj.text }}/>;
            if (obj.type === 'typing') return <Typing from={ obj.from } message={{ id: obj.id, time: obj.time, text: obj.text }}/>;
        })}
    </ul>
 );
 
}

export default MessageHistory;
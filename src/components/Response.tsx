import { TypeOfMessage } from "../types/TypeOfMessage";

const Response = ({ from, message }: TypeOfMessage) => {
    return (
        <li key={ message.id }>
        <div className="message-data">
          <span className="message-data-name"><i className="fa fa-circle online"></i> { from.name }</span>
          <span className="message-data-time">{ message.time }</span>
        </div>
        <div className="message my-message">
          { message.text || '...'}
        </div>
      </li>
    );
}

export default Response;
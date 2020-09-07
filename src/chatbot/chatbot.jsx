import React from "react";
import "./chatbot.css";
import { useState } from "react";


//options Brother ////////////////////
////////////////
const Option = (props)=>{
    return <option id={props.id} value={props.value} onClick={props.onClick}  className="option">{props.children}</option>
}

const OptionArea = (props)=>{

    return <div className="option-area">
        {props.children}
    </div>
}





//messages brother/////////////////////
//////////////////
const Message = (props)=>{
    return <section className="message">
        {props.children}
    </section>
}

const MessageArea = (props)=>{
    const [Chat,setChat] = useState([])
    const [opt,setOpt] = useState([])
    const messages = [
        {
            id:1,
            message:["How are you","Ihope you are fine and good"],
            option:"greeting"
        },
        {
            id:2,
            message:["dont worry if some thing wrong","if you need some help we are here"],
            option:"help"
        },
        {
            id:3,
            message:["need web designing","We are very good web designiers"],
            option:"about us"
        }
    ]
    return <div className="message-area">
        <Message>
            Hello My name is Jirry the chatbot.Iam ready for chating when you are. try to choose from
            above options.
        </Message>
        {Chat.map((val,index) => <Message key={index}>{val}</Message>)}
        <OptionArea>
        {messages.map((val)=>{
            let onSelected = ()=>{
                val.message.forEach(mess =>{
                    setChat(PrevChat =>[...PrevChat,mess])
                })
            }
            return <Option key={val.id} value={val.message} onClick={onSelected} id={val.id}>{val.option}</Option>
        })}
        </OptionArea>
    </div>
};

//MAIN CHATBOT IT IS HORRIBLE
class ChatBot extends React.Component{
    render(){
        return <div className="bot">
            <nav className="intro">
                <h1>Jirry ChatBot</h1>
                <button className="btn1">Hello</button>
            </nav>
            <MessageArea/>
        </div>
    };
}

export default ChatBot;
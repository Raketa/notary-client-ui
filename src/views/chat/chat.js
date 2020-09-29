import React, {useEffect} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Input, Row} from "reactstrap";
import {
    MessageBox,
    ChatItem,
    SystemMessage,
    MessageList,
    ChatList,
    Popup,
    SideBar,
    Navbar,
    Dropdown,
    Avatar
} from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';

function register() {
    fetch('https://notarius-api.herokuapp.com/api/register', {
        method: 'POST',
        body: JSON.stringify({
            "username": "user",
            "password": "user",
            "role": "CLIENT"
        })
    })
        .then(data => data.json())
        .then(data => {
            console.log(data);
            auth();
        })
        .catch(data => {
            console.log(data);
        });
}

function auth() {
    console.log(" before")
    let formData = new FormData();
    formData.append('username', 'user');
    formData.append('password', 'user');

    fetch('https://notarius-api.herokuapp.com/login', {
        method: 'POST',
        "Content-Type": "multipart/form-data;boundary='",
        body: formData,
        credentials: "include"
    })
        .then(data => data.json())
        .then(data => {
            console.log(data);
        })
        .catch(data => {
            console.log(data);
        });
    console.log(" after")

}

const ChatComponent = ({role, ...restProps}) => {


    useEffect(() => {
        auth();
    })


    let messages = [{
        title: 'Негодяев Злыдень Иванович',
        titleColor: '#8717ae',
        position: 'right',
        type: 'text',
        text: 'Много сообщений от одного',
        date: new Date(),
    }, {
        title: 'Негодяев Злыдень Иванович',
        titleColor: '#8717ae',
        position: 'right',
        type: 'text',
        text: 'пользователя',
        date: new Date(),
    }];

    return (
        <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                    <Col xs="8">
                        <h3 className="mb-0">Чат</h3>
                    </Col>
                </Row>
            </CardHeader>
            <CardBody>
                <div className='chat-scroll'>
                    <MessageBox
                        title={'Петренко Петр Петрович'}
                        titleColor={'#24ae00'}
                        position={'left'}
                        type={'photo'}
                        text={'react.svg'}
                        data={{
                            uri: 'https://facebook.github.io/react/img/logo.svg',
                            status: {
                                click: false,
                                loading: 0,
                            }
                        }}/>

                    <SystemMessage text={'Системное сообщение типо разделиние дат. Дальше сообщения списком идут'}/>

                    <MessageList
                        className='message-list'
                        lockable={true}
                        toBottomHeight={'100%'}
                        dataSource={messages}/>

                </div>
                <hr className="my-4"/>
                <Input
                    className="form-control-alternative"
                    placeholder="Введите ваше сообщение..."
                    rows="4"
                    type="textarea"
                />

                <Button onClick={console.log('')} className="my-4" color="info" type="button">
                    Отправить
                </Button>
                <input type="file" name="photo" multiple accept="image/*,image/jpeg"/>
            </CardBody>

        </Card>);

};

export default ChatComponent;
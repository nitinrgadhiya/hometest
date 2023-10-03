// import neccessary component
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Image,
  SafeAreaView,
} from 'react-native';
//import style sheet
import Styles from './styles';
//improt moment library for date time format
import Moment from 'react-moment';

const ChatScreen = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const [isDeleteIconVisible, longPressOnMessage] = useState(-1);

  // When user clicks on "Send" button "sendMessage" method trigger
  const sendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([
        {
          id: messages.length + 1,
          text: inputText,
          date: new Date(),
        },
        ...messages,
      ]);
      setInputText('');
    }
  };

  // Show Delete icon
  const visibleDeleteIcon = index => {
    longPressOnMessage(index);
  };

  // Delete data from Array
  const deleteMessage = index => {
    messages.splice(index, 1);
    let messageArray = JSON.stringify(messages);
    let JsonParse = JSON.parse(messageArray);
    setMessages(JsonParse);
    longPressOnMessage(-1);
  };

  // Render Delete icon view
  const renderDeleteIcon = index => {
    if (isDeleteIconVisible === index) {
      return (
        <TouchableOpacity
          style={Styles.deleteView}
          key={index}
          onPress={() => deleteMessage(index)}>
          <Image
            source={require('../../assets/delete_icon.png')}
            style={Styles.deleteImage}
          />
        </TouchableOpacity>
      );
    }
    return <View />;
  };

  return (
    // SafeAreaView => Use for notch device
    <SafeAreaView style={Styles.container}>
      {/* Custom Header Component */}
      <View style={Styles.headerView}>
        <Text style={Styles.headerText}>Chat Test App</Text>
      </View>

      {/* List view for load chat messaging */}
      <FlatList
        data={messages}
        style={Styles.flex1}
        keyExtractor={item => item.id.toString()}
        inverted={true}
        renderItem={({item, index}) => (
          <View style={Styles.messageView}>
            {renderDeleteIcon(index)}
            <TouchableOpacity
              style={Styles.message}
              onLongPress={() => visibleDeleteIcon(index)}>
              <Text style={Styles.messageText}>{item.text}</Text>
              <Moment element={Text} format="hh:mm a" style={Styles.timeText}>
                {item.date}
              </Moment>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Input Container View */}
      {/* KeyboardAvoidingView Use => Stick Input container with Keyboard */}
      {/* TextInput => "Use for write chat message" */}
      {/* TouchableOpacity => Click event use for send Button */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder="Type a message..."
            value={inputText}
            onChangeText={text => setInputText(text)}
          />
          <TouchableOpacity style={Styles.sendButton} onPress={sendMessage}>
            <Text style={Styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

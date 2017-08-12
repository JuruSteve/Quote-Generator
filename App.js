import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Font} from 'expo'

const quotes = [
  {
    message: 'You have to understand your own personal DNA. Don’t do things because I do them or Steve Jobs or Mark Cuban tried it. You need to know your personal brand and stay true to it.',
    author: 'Gary Vaynerchuk'
  },
  {
    message: 'Your legacy is being written by yourself. Make the right decisions.',
    author: 'Gary Vaynerchuk'
  },
  {
    message: 'We only get to play this game one time. We have one life.',
    author: 'Gary Vaynerchuk'
  },
  {
    message: 'I see all of you bad asses killing it in the gym. I love that. Dont forget to be good to your mind. You dont train it, it’ll become weak.',
    author:'Mike Rashid'
  },
    {
      message: 'You must do what you want, what you feel you should do.. Not what people think is best, do what feels right for you. F*ck the status quo. F*ck the norm. There are so many ‘experts’ and know it alls, that think they have it all figured out. But guess what? Life is way too dynamic. You’ll never have it figured out. Not fitness, not business, not relationships. Nothing.',
    author: 'Mike Rashid'
  },
  {
    message: 'Legacy is greater than currency.',
    author: 'Gary Vaynerchuk'
  },
  {
    message: 'If you live for the weekends and vacations, your sh*t is broken.',
    author: 'Gary Vaynerchuk'
  },
  {
    message: 'Skills are cheap. Passion is priceless.',
    author: 'Gary Vaynerchuk'
  },
    {
      message: 'People are chasing cash, not happiness. When you chase money, you’re going to lose. You’re just going to. Even if you get the money, you’re not going to be happy.',
    author: 'Gary Vaynerchuk'
  },

    {
      message: 'Tell people that you love how much you love them. Tell people that you dont like, that you dont like them and why. Step into actions with boldness. But never be too ‘Alpha’ that you cant take constructive criticism. Or learn from a mistake. No matter how much it may sting, DO NOT reject the truth. And if you are a leader. Be a damn good leader. Be an example. Dont half ass anything. Dont be out of shape telling people how to be in shape. Dont be a cheater telling people not to cheat. Walk the walk. That is it.Simple common sense.',
      author: 'Mike Rashid'
    },
    {
      message: 'When it comes down to it, nothing trumps execution.',
    author: 'Gary Vaynerchuk'
  },
    {
      message: 'I’m the happiest because I’m doing exactly what I want to do.',
    author: 'Gary Vaynerchuk'
  },
    {
      message: 'No matter what you do, your job is to tell your story.',
      author: 'Gary Vaynerchuk'
    },
    {
      message: 'We are in control of the one asset that we all give the most f*cks about, and that is time.',
      author: 'Gary Vaynerchuk'
    },
        {
          message: 'You are not patient enough. Your lack of patience is killing you and your need of things is killing you.',
    author: 'Gary Vaynerchuk'
  },
      {
        message: 'Love your family, work super hard, live your passion.',
    author: 'Gary Vaynerchuk'
  },
      {
        message: 'What are you all about Mike Rashid? A rich living experience. Mental and physical fitness. Progressive thoughts. Optimizing every area of my life. Enhancing relationships of those in my circle. Laughing. Conquering. Learning. Progressing. Enjoying good people and conversations, food, movies, all of the great pleasures in life. Consciously trying to become a better person everyday. Constantly trying to help my loved ones become better. What are you about?',
    author:'Mike Rashid'
  },
    {
      message: 'I dont care what your profession is. You will be more successful if you trained regularly, and ate well. You will have more energy, more confidence, look better, and people will treat you like the boss that you are or can be. A word to the wise is sufficient. Get off your asses.',
        author: 'Mike Rashid'
      }

];



export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      activeQuoteIndex: 0,
      isFontLoaded: false,
    };
  }

  componentDidMount(){
    Font.loadAsync({
      'Lora': require('./assets/fonts/Lora-Regular.ttf'),
      'Poppins' : require('./assets/fonts/Poppins-Regular.ttf')
    }).then(()=>{
      this.setState({
        isFontLoaded: true,
      });
    })
  }

  nextQuote = ()=>{
    const {activeQuoteIndex} = this.state;

    if(activeQuoteIndex < quotes.length -2){
      this.setState({
        activeQuoteIndex: activeQuoteIndex + 1
      });
    } else {
      this.setState({
        activeQuoteIndex:0
      })
    }
  }

  render() {
    const activeQuoteIndex = quotes[this.state.activeQuoteIndex];
    const { isFontLoaded } = this.state;
    return (
      <View style={styles.container}>
        <Text style={[styles.message, isFontLoaded && { fontFamily: 'Lora'}]}>{activeQuoteIndex.message}</Text>
        <Text style={[styles.author, isFontLoaded && { fontFamily: 'Poppins'}]}>{activeQuoteIndex.author}</Text>
      <View style={styles.button}>
        <Button 
        title={'Next Quote'}
        onPress={this.nextQuote}
        />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4D991',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:10,
  },
  message:{
    fontSize: 18,
    marginBottom: 25,
  },
  author:{
    fontSize:15,

  },
  button:{
    position: 'absolute',
    bottom: 30,
  }
});

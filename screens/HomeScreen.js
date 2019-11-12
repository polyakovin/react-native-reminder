import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';
import { Container, Button, Text, Header, Content, List, ListItem } from 'native-base';

const { width } = Dimensions.get('screen');

const reminders = [
  {
    title: 'Погладить кота',
    date: Date.now() + 1000 * 5,
    description: 'очень надо',
  },
  {
    title: 'Почистить зубы',
    date: Date.now() + 1000 * 5,
    description: 'очень надо',
  },
  {
    title: 'Выпить воды',
    date: Date.now() + 1000 * 5,
    description: 'очень надо',
  },
  {
    title: 'Провести стрим',
    date: Date.now() + 1000 * 5,
    description: 'очень надо',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header />
        <Content>
          <Image
            style={{width, height: width * 9 / 16}}
            source={require('../assets/logo.jpg')}
          />
          <Button block onPress={() => alert('привет')}>
            <Text>Click Me!</Text>
          </Button>
          <List>
            {reminders.map((reminder, i) => (
              <ListItem
                key={i}
                onPress={() => this.props.navigation.navigate('Reminder', reminder)}>
                <Text>{reminder.title}</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

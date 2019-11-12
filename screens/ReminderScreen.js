import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';
import { Container, Button, Text, Header, Content, List, ListItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class ReminderScreen extends React.Component {
  render() {
    const date = this.props.navigation.getParam('date', '');
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();

    return (
      <Container>
        <Grid>
          <Row style={{ height: 50 }}>
            <Col>
              <Text>{this.props.navigation.getParam('title', 'Напоминалка')}</Text>
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <Text style={{ textAlign: 'right' }}>{`${day}.${month}.${year}`}</Text>
            </Col>
          </Row>
          <Row>
            <Text>{this.props.navigation.getParam('description', 'Дщкуь шзыгь')}</Text>
          </Row>
        </Grid>
      </Container>
    );
  }
}

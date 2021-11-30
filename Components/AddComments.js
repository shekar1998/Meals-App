import { Button, Modal, FormControl, Input, Icon } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Rating } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import MealData from '../assets/MealData.json';

const AddComments = (props) => {
  const [rating, setRating] = useState();
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');
  const handleRating = (val) => {
    setRating(val);
  };

  const handleSubmit = async () => {
    const addedComment = {
      id: Date.now(),
      comment: comment,
      user: user,
      rating: rating,
    };
    const selectedData = await MealData.filter((data) => {
      if (data.id === props.item.id) {
        data.comments.push(addedComment);
      }
    });
    // await MealData[props.item.id].comments.push(addedComment)
    props.handleClose();
  };

  return (
    <>
      <Modal isOpen={props.visible} onClose={() => props.handleClose()}>
        <Modal.Content maxWidth='500px'>
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <View>
              <Rating
                type='star'
                fractions={1}
                startingValue={0}
                ratingCount={5}
                imageSize={25}
                onFinishRating={handleRating}
                showRating
              />
            </View>
            <FormControl>
              <FormControl.Label>User</FormControl.Label>
              <Input
                onChangeText={(text) => setUser(text)}
                value={user}
                InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml='2' color='muted.400' />}
                placeholder='Name'
              />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Comment</FormControl.Label>
              <Input
                onChangeText={(text) => setComment(text)}
                value={comment}
                InputLeftElement={<Icon as={<MaterialIcons name='comment' />} size={5} ml='2' color='muted.400' />}
                placeholder='Comment'
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant='ghost'
                colorScheme='blueGray'
                onPress={() => {
                  props.handleClose();
                }}
              >
                Cancel
              </Button>
              <Button onPress={handleSubmit}>Submit</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default AddComments;

const styles = StyleSheet.create({});

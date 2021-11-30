import { Button, Modal, FormControl, Input, Icon } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Rating } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { addComment } from './../Redux/Actions/commentActions';
import ErrorComponent from './Error';



const AddComments = (props) => {
  const [rating, setRating] = useState();
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleRating = (val) => {
    setRating(val);
  };

  const dispatch = useDispatch()

  const handleSubmit = () => {
    if (comment !== "" && user !== "") {

      const addedComment = {
        id: Date.now(),
        comment: comment,
        user: user,
        rating: rating,
      };
      dispatch(addComment(addedComment))
      setRating(0)
      setUser("")
      setComment("")
      props.handleClose();
    } else {
      setError("Please fill all details")
    }
  };

  return (
    <>
      <Modal isOpen={props.visible} onClose={() => props.handleClose()}>
        <Modal.Content maxWidth='500px'>
          <Modal.CloseButton />
          <Modal.Header>Add Comments</Modal.Header>
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
            {error.length > 0 && <ErrorComponent message={error} />}
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

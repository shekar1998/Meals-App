import { Button, Modal, FormControl, Input, Center, NativeBaseProvider } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AddComments = (props) => {
  return (
    <>
      <Modal isOpen={props.visible} onClose={() => props.handleClose()}>
        <Modal.Content maxWidth='500px'>
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>Email</FormControl.Label>
              <Input />
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
              <Button
                onPress={() => {
                  props.handleClose();
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default AddComments;

const styles = StyleSheet.create({});

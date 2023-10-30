import React, { useState } from 'react';
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';

interface IGoalHeaderProps {
  addGoalHandler: (goalInputText: string) => void,
  isAddModal: boolean,
  closeAddModal: () => void,
}

const GoalHeader = ({addGoalHandler, isAddModal, closeAddModal}: IGoalHeaderProps) => {
  const [inputGoalText, setGoalInputText] = useState('');

  function goalInputHandler(enteredText: string) {
    setGoalInputText(enteredText);
  }

  function addGoal() {
    addGoalHandler(inputGoalText);
    setGoalInputText('');
  }

  return (
    <Modal visible={isAddModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.webp')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal"
          onChangeText={goalInputHandler}
          value={inputGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color="#5e0acc" title="Return" onPress={closeAddModal}/>
          </View>
          <View style={styles.button}>
            <Button color="#5e0acc" title="Add your goal" onPress={addGoal}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalHeader;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#391f81',
  },
  image: {
    width: 100,
    height: 100,
    margin: 16,
    backgroundColor: 'transparent',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: '35%',
    marginHorizontal: 8,
  }
});
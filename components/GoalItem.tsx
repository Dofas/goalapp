import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface IGoalItemProps {
  text: string;
  id: string;
  onDeleteGoal: (goalId: string) => void;
}

const GoalItem = ({text, id, onDeleteGoal}: IGoalItemProps) => {

  // function onGoalPress() {
  //   onDeleteGoal(id);
  // }

  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteGoal.bind(this, id)}
        android_ripple={{color: '#380879'}}
        // android ripple doest work for IOS
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItemText: {
    color: 'white',
    padding: 8,
  }
});

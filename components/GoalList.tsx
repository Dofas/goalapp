import React from 'react';
import GoalItem from './GoalItem';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export interface IGoal {
  text: string,
  id: string,
}

interface IGoalListProps {
  goals: IGoal[];
  onDeleteGoal: (goalId: string) => void;
}

// View is not scrollable but default so keep it in mind
// instead of default View you should ScrollView
// ScrollView is good for articles etc. because it always renders all his childs
//  ScrollView inherits height from container so additional View is required for styling
// <ScrollView
// {goals.map((goal, index) =>
//   // additional View requires for IOS platform because of styling
//   // also important that this is not css so styles are not cascading
//   // so Text is standalone component that requires direct text color
//   <View style={styles.goalItem} key={index
//     <Text style={styles.goalItemText}>{goal}</Text
//   </View
// </ScrollView
//
// for simple list use FlatList because it renders only items in visible area

const GoalList = ({goals, onDeleteGoal}: IGoalListProps) => {
  return (
    <View style={styles.goalsContainer}>
      {goals.length ?
        <FlatList
          keyExtractor={(item) => item.id}
          data={goals}
          // also can pass key as a prop for list item
          // renderItem={goalData => <GoalItem key={goalData.index} text={goalData.item}/>}
          renderItem={goalData => <GoalItem
            text={goalData.item.text}
            id={goalData.item.id}
            onDeleteGoal={onDeleteGoal}
          />}
          alwaysBounceVertical={false}
        />
        : <Text style={styles.emptyGoalsText}>No goals</Text>
      }
    </View>

  );
};

export default GoalList;

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 3,
    marginBottom: 24,
  },
  emptyGoalsText: {
    fontSize: 24,
    alignSelf: 'center',
    marginTop: '50%',
  }
});
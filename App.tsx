import { Alert, Button, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import GoalList, { IGoal } from './components/GoalList';
import GoalHeader from './components/GoalHeader';
import { StatusBar } from 'expo-status-bar';

const emptyGoalAlert = () => {
  Alert.alert('Goal can not be empty');
};

// "backgroundColor": "#391f81",
// in app.json applies backColor for all MAIN screens not modals and etc

export default function App() {
  const [goals, setGoals] = useState<IGoal[]>([]);
  const [isAddGoalModal, setIsAddGoalModal] = useState(false);

  function openAddGoalModal() {
    setIsAddGoalModal(true);
  }

  function closeAddGoalModal() {
    setIsAddGoalModal(false);
  }

  function addGoalHandler(inputGoalText: string) {
    if (!inputGoalText.trim().length) {
      return emptyGoalAlert();
    }
    setGoals((currentGoals) => [...currentGoals, {text: inputGoalText, id: Math.random().toString()}]);
    closeAddGoalModal();
  }

  function deleteGoalHandler(goalId: string) {
    setGoals(prevState => prevState.filter(goal => goal.id !== goalId));
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button title="Add new goal" color="#5e0acc" onPress={openAddGoalModal}/>
        {/*{isAddGoalModal && <GoalHeader addGoalHandler={addGoalHandler}/>}*/}
        <GoalHeader addGoalHandler={addGoalHandler} isAddModal={isAddGoalModal} closeAddModal={closeAddGoalModal}/>
        <GoalList goals={goals} onDeleteGoal={deleteGoalHandler}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  }
});

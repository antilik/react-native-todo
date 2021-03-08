import React from 'react';
import { Text, View, StyleSheet } from "react-native";

import { SUMMARY_DONE, SUMMARY_NOT_DONE } from "../constants/TextNames";

const TaskSummaryInfo = ({tasksListArr}) => {
  const getSumStatusOfTasks = (condition) => {
    return tasksListArr.reduce((accum, elem) => ((elem['isFinished'] === condition) ? accum + 1 : accum), 0);
  }
  return (
    <>
      {tasksListArr.length
      ? (
        <View style={styles.summaryList}>
          <Text>{SUMMARY_DONE} {getSumStatusOfTasks(true)}</Text>
          <Text>{SUMMARY_NOT_DONE} {getSumStatusOfTasks(false)}</Text>
        </View>
      ) : null}
    </>
  )
};

const styles = StyleSheet.create({
  summaryList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 5,
  }
})

export default TaskSummaryInfo;
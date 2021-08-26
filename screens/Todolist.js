import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Tick, Back } from "../assets/svg";
import { StatusBar } from "expo-status-bar";
import { OpenAndClose } from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { RemoveTask, SaveTask } from "../store/actions/actions";

const slope = { top: 10, bottom: 10, left: 10, right: 10 };
export default function TodoList() {
  const [isAdding, setAdd] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const { task } = useSelector((state) => state.countReducer);

  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemCont} activeOpacity={0.7}>
        {item.isReminding ? <View style={styles.setReminder} /> : null}
        <View style={styles.tasks}>
          <View style={{ width: 250 }}>
            <Text style={styles.task}>{item.task}</Text>
            <Text style={{ fontSize: 15 }}>{item.day}</Text>
          </View>
          <TouchableOpacity onPress={() => remove(item.key)} hitSlop={slope}>
            <Back />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const remove = (key) => {
    return dispatch(RemoveTask(key));
  };

  const AddItem = () => {
    if (!name || !date) {
      alert("Enter your details");
    } else {
      const dataToAdd = {
        key: task.length + 1,
        task: name,
        day: date,
        isReminding: reminder,
      };
      setDate("");
      setName("");
      setReminder(false);
      return dispatch(SaveTask(dataToAdd));
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.tracker}>Task Tracker</Text>
            <OpenAndClose
              isAdding={isAdding}
              onPress={() => setAdd(!isAdding)}
            />
          </View>
          {isAdding ? (
            <View>
              <Text style={{ fontSize: 20 }}>Task</Text>
              <TextInput
                value={name}
                style={styles.input}
                placeholder="Add Task"
                onChangeText={(val) => setName(val)}
              />
              <Text style={{ fontSize: 20 }}>Day & Time</Text>
              <TextInput
                value={date}
                style={styles.input}
                placeholder="Add Day & Time"
                onChangeText={(val) => setDate(val)}
              />
              <View style={styles.reminderBox}>
                <Text style={styles.reminder}>Set Reminder</Text>
                <TouchableOpacity
                  style={styles.checkBox}
                  onPress={() => setReminder(!reminder)}
                  hitSlop={slope}
                >
                  {reminder ? <Tick /> : null}
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.touch} onPress={() => AddItem()}>
                <Text style={{ color: "white", fontSize: 17 }}>Save Task</Text>
              </TouchableOpacity>
            </View>
          ) : null}
          {task.length > 0 ? (
            <FlatList data={task} renderItem={_renderItem} />
          ) : (
            <View>
              <Text style={{ fontSize: 17 }}>No Tasks to Show</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  itemCont: {
    width: "100%",
    height: 70,
    backgroundColor: "#F8F8F8",
    borderRadius: 1,
    borderColor: "grey",
    borderWidth: 0.3,
    marginTop: 7,
    flexDirection: "row",
    alignItems: "center",
  },
  tasks: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  setReminder: {
    width: 5,
    height: "100%",
    backgroundColor: "green",
  },
  task: {
    fontSize: 20,
    fontWeight: "bold",
  },
  touch: {
    width: "100%",
    height: 50,
    backgroundColor: "black",
    borderRadius: 6,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 15,
  },
  reminderBox: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderColor: "#C3C3C3",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 30,
  },
  checkBox: {
    width: 20,
    height: 20,
    backgroundColor: "#C3C3C3",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  reminder: {
    fontSize: 17,
    textAlign: "justify",

    lineHeight: 21,
  },
  tracker: {
    fontSize: 30,

    fontWeight: "bold",
    color: "#3B3B3B",
    marginRight: 10,
  },
  container: {
    flex: 1,
    paddingTop: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  content: {
    paddingVertical: 20,
    borderRadius: 5,
    borderColor: "magenta",
    borderWidth: 1,
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 25,
  },
});

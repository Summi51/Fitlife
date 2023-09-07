import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";

function UserProfileScreen({ navigation }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const saveProfile = () => {
    console.log("Saving Profile:", { name, age, gender });

  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      <CustomButton title="Save" onPress={saveProfile} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "geay",
  },
  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "50%", // Set the width to 60% of the container width
    backgroundColor: "white",
    textAlign: "center", // Center-align text within the input
  },
});

export default UserProfileScreen;
























// import React, { useState } from "react";
// import { StyleSheet, Text, TextInput, View } from "react-native";
// import CustomButton from "../components/CustomButton";

// function UserProfileScreen({ navigation }) {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");

//   const saveProfile = () => {
//     // In a real application, you would save the user's profile details to a database or server.
//     // For now, you can log the details to the console.
//     console.log("Saving Profile:", { name, age, gender });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>User Profile</Text>
//       <View style={styles.inputWrapper}>
//         <TextInput
//           style={styles.input}
//           placeholder="Name"
//           value={name}
//           onChangeText={setName}
//         />
//       </View>
//       <View style={styles.inputWrapper}>
//         <TextInput
//           style={styles.input}
//           placeholder="Age"
//           value={age}
//           onChangeText={setAge}
//         />
//       </View>
//       <View style={styles.inputWrapper}>
//         <TextInput
//           style={styles.input}
//           placeholder="Gender"
//           value={gender}
//           onChangeText={setGender}
//         />
//       </View>
//       <CustomButton title="Save" onPress={saveProfile} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//   },
//   title: {
//     color: "black",
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   inputWrapper: {
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     elevation: 3, // Shadow effect
//     backgroundColor: "white",
//   },
//   input: {
//     padding: 10,
//     width: "100%",
//     textAlign: "center",
//   },
// });

// export default UserProfileScreen;

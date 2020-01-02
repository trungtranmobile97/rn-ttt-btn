import React from "react";
import { TouchableOpacity, Text } from "react-native";

class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: "black"
        }}
      >
        <Text style={{ fontSize: 15, color: "white", marginVertical: 10 }}>
          Press me
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Button;

import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { TextInput, Checkbox } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
const Login = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            height: "auto",
            display: "flex",
            gap: 8,
            padding: "5%",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.header}>
            <Text style={styles.textHeader}>Sign in</Text>
            <Text style={{ color: "#A1A1A1", paddingTop: 30, fontSize: 16 }}>
              Welcome back! please enter your details
            </Text>
          </View>
          <View style={{ height: 50 }}></View>
          <View style={{ height: 10 }}></View>
          <View style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <TextInput
              style={{
                borderRadius: 10,
                backgroundColor: "#f7f7f7",
                borderBottomWidth: 0,
              }}
              mode="offline"
              label="Email"
              left={
                <TextInput.Icon
                  size={12}
                  icon={"email-outline"}
                  style={{ backgroundColor: "#F8D3FE" }}
                ></TextInput.Icon>
              }
            />
            <TextInput
              style={{
                borderRadius: 10,
                backgroundColor: "#f7f7f7",
                borderBottomWidth: 0,
              }}
              mode="offline"
              label="Password"
              secureTextEntry
              left={
                <TextInput.Icon
                  size={16}
                  icon={"lock-outline"}
                  style={{ backgroundColor: "#E1EAFF" }}
                />
              }
              //   right={<TextInput.Icon icon="eye" />}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                fontSize: 19,
                borderRadius: 10,
                borderColor: '#A1A1A1',
                // borderWidth: 1, 
                marginRight: 5,
              }}
            >
              <Checkbox.Android 
              status="unchecked" 
              style={{borderRadius:10, borderColor:'#A1A1A1'}} />
              <Text style={{ fontSize: 17, paddingRight:11 }}>Remember</Text>
            </View>
            <View style={{ height: 90 }}></View>
            <View style={{ height: 10 }}></View>
            <View style={{ display: "flex", justifyContent: "center" }}>
              <TouchableOpacity style={{ flex: 1 }}>
                <Text
                  style={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: "auto",
                    paddingBottom: 30,
                    fontWeight: "bold",
                    color: "#44B1FF",
                    textAlign: "center",
                  }}
                >
                  Forgot password
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingVertical: 15,
                  width: "auto",
                  backgroundColor: "#44B1FF",
                  alignItems: "center",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: 24,
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: 20 }}></View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: 'center',
              justifyContent: "space-between",
            }}
          >
            <Text style={{color:'#A1A1A1', fontSize:15}}>Create account </Text>
            <TouchableOpacity
              style={{ 
                borderRadius: 40, 
                backgroundColor: "#f7f7f7",
                alignItems: "center",
                justifyContent: "center",
                width: 100,
                height: 40,
                marginHorizontal: 1,
                 }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#fcc76d",
                  borderRadius: 3,
                  fontSize:15,
                }}
              >
                signUp{" "}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 90 }}></View>
          <View style={styles.footerIcons}>
            <TouchableOpacity style={styles.square}>
              <Icon name="facebook-square" size={30} color="#257EFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.square}>
              <Icon name="google" size={30} color="#FF583F" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.square}>
              <Icon name="apple" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export { Login };
const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop:
      Platform.OS === "android"
        ? 40
        : null || Platform.OS === "ios"
        ? 10
        : null,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
  },
  textHeader: {
    //   alignSelf: 'flex-end',
    fontSize: 30,
    fontWeight: "bold",
    paddingRight: 12,
    paddingTop: 20,
  },

  footerIcons: {
    // flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

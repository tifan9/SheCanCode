import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import tw from "twrnc";
import { StatusBar } from "expo-status-bar";
import { styles } from "../styles";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput, Checkbox, MD3Colors } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
// import { Icon } from 'react-native-elements'
export const HomeScreen = () => {
  return (
    <ScrollView style={{  flex: 1 }}>
      <View style={{ height: 30 }}></View>
      <View style={tw`py-9 px-5 `}>
        <View style={tw` `}>
          <Text style={tw `text-3xl font-bold `}>Home</Text>
          <View style={tw `flex flex-row justify-between items-center mt-6`}>
            <View style={tw `flex items-center`}>
              <View
                style={tw `rounded-full bg-[#FBFBFC] w-12 h-12 justify-center items-center`}
              >
                <FontAwesome name="bell" size={24} color="#7687FF" />
              </View>
              <Text>Price Alert</Text>
            </View>

            <View style={tw`flex items-center`}>
              <View
                style={tw`rounded-full bg-[#FBFBFC] w-12 h-12 justify-center items-center`}
              >
                <FontAwesome name="exchange" size={24} color="#F7C480" />
              </View>
              <Text>Convert</Text>
            </View>

            <View style={tw`flex items-center`}>
              <View
                style={tw`rounded-full bg-[#FBFBFC] w-12 h-12 justify-center items-center`}
              >
                <FontAwesome name="balance-scale" size={24} color="#7589FF" />
              </View>
              <Text>Compare</Text>
            </View>

            <View style={tw`flex items-center`}>
              <View
                style={tw`rounded-full bg-[#FBFBFC] w-12 h-12 justify-center items-center`}
              >
                <FontAwesome name="list-alt" size={24} color="#6FC584" />
              </View>
              <Text>Watchlist</Text>
            </View>
          </View>
        </View>
        {/* Wallet section */}
        <View style={{ height: 40 }}></View>
        <View
          style={{
            backgroundColor: "#F6F6FA",
            borderStartStartRadius: 2,
            
          }}
        >
          <Text style={tw`text-2xl font-bold mt-6 pb-6`}>Your Wallet</Text>
          <ScrollView horizontal>
            <View style={[tw`flex flex-row gap-6 rounded`, { marginBottom: 20 }]}>
            <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    borderRadius: 10,
                    overflow: "hidden",
                    marginBottom: 10,
                    height: 120, // Adding height to the container
                  }}
                >
                  <View style={{ flexDirection: "row", height: "100%"}}>
                    {/* First column */}
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: "#FFFFFF",
                        paddingHorizontal: 6,
                        paddingVertical: 10,
                        alignContent: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Text style={tw  `text-gray-300 font-bold`}>Neo</Text>
                      <Text style={tw ` text-xl font-bold`}>Neo 0.2124</Text>
                      <Text style={tw ` text-xl font-bold`}>$32,128.80</Text>
                    </View>
                    {/* Second column */}
                    <View
                      style={{
                        flex: 1,
                        gap:4,
                        alignSelf:"stretch",
                        backgroundColor: "#FFFFFF",
                        paddingHorizontal: 6,
                        paddingVertical: 10,
                      }}
                    >
                        <View
                            style={tw `rounded-full bg-[#E1E9C7] w-12 h-12 justify-center items-center`}
                        >
                            <FontAwesome name="table" size={24} color="#6FC584" />
                        </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        
                        <Text style={{ marginLeft: 7, color: "gray", marginTop:7,}}>2.5%</Text>
                      </View>
                    </View>
                  </View>
                </View>
            </View>
            
            
            
            

              
            </View>
            <View style={[tw`flex flex-row gap-6 ml-6 rounded`, { marginBottom: 20 }]}>
            <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    borderRadius: 10,
                    overflow: "hidden",
                    marginBottom: 10,
                    height: 120, // Adding height to the container
                  }}
                >
                  <View style={{ flexDirection: "row", height: "100%"}}>
                    {/* First column */}
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: "#FFFFFF",
                        paddingHorizontal: 6,
                        paddingVertical: 10,
                        alignContent: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Text style={tw  `text-gray-300 font-bold`}>Neo</Text>
                      <Text style={tw ` text-xl font-bold`}>Neo 0.2124</Text>
                      <Text style={tw ` text-xl font-bold`}>$32,128.80</Text>
                    </View>
                    {/* Second column */}
                    <View
                      style={{
                        flex: 1,
                        gap:4,
                        alignSelf:"stretch",
                        backgroundColor: "#FFFFFF",
                        paddingHorizontal: 6,
                        paddingVertical: 10,
                      }}
                    >
                        <View
                            style={tw `rounded-full bg-[#E1E9C7] w-12 h-12 justify-center items-center`}
                        >
                            <FontAwesome name="table" size={24} color="#6FC584" />
                        </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        
                        <Text style={{ marginLeft: 7, color: "gray", marginTop:7,}}>2.5%</Text>
                      </View>
                    </View>
                  </View>
                </View>
            </View>
            </View>
            <View style={[tw`flex flex-row gap-6 ml-6 rounded`, { marginBottom: 20 }]}>
            <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    borderRadius: 10,
                    overflow: "hidden",
                    marginBottom: 10,
                    height: 120, // Adding height to the container
                  }}
                >
                  <View style={{ flexDirection: "row", height: "100%"}}>
                    {/* First column */}
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: "#FFFFFF",
                        paddingHorizontal: 6,
                        paddingVertical: 10,
                        alignContent: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Text style={tw  `text-gray-300 font-bold`}>Neo</Text>
                      <Text style={tw ` text-xl font-bold`}>Neo 0.2124</Text>
                      <Text style={tw ` text-xl font-bold`}>$32,128.80</Text>
                    </View>
                    {/* Second column */}
                    <View
                      style={{
                        flex: 1,
                        gap:4,
                        alignSelf:"stretch",
                        backgroundColor: "#FFFFFF",
                        paddingHorizontal: 6,
                        paddingVertical: 10,
                      }}
                    >
                        <View
                            style={tw `rounded-full bg-[#E1E9C7] w-12 h-12 justify-center items-center`}
                        >
                            <FontAwesome name="table" size={24} color="#6FC584" />
                        </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        
                        <Text style={{ marginLeft: 7, color: "gray", marginTop:7,}}>2.5%</Text>
                      </View>
                    </View>
                  </View>
                </View>
            </View>
            </View>
          </ScrollView>
        </View>

        
        {/* Trending section */}
        <View style={{ backgroundColor: "#F6F6FA", height: 40 }}></View>
        <View
          style={{
            backgroundColor: "#F6F6FA",
          }}
        >
          <Text style={tw`text-2xl font-bold`}>Trending</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={tw `flex flex-row`}>
              <View
                style={tw `rounded-full bg-[#FFE3C3] w-12 h-12 justify-center items-center`}
              >
                <FontAwesome name="bitcoin" size={24} color="#F5951D" />
              </View>
                <Text style={[  tw `text-xl font-bold`,{ color:'black' }]}>Bitcoin</Text>
                <Text style={[  tw ``,{ color:'gray' }]}>BTC</Text>
              </View>
              <View>
                <Text style={{ fontSize: 18 }}>$32,128.80</Text>
                <Icon name="angle-down" size={12} color="#F04086" />
                <Text style={{ fontSize: 16 }}>2.5%</Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
              <View
                style={tw `rounded-full bg-[#FEE5ED] w-12 h-12 justify-center items-center`}
              >
                <FontAwesome name="bitcoin" size={24} color="#F04086" />
              </View>
                <Text style={[  tw `text-xl font-bold`,{ color:'black' }]}>Bytecoin</Text>
                <Text style={{ fontSize: 16 }}>BCN</Text>
              </View>
              <View>
                <Text style={{ fontSize: 18 }}>$15,128.80</Text>
                <Text style={{ fontSize: 16 }}>2.2%</Text>
              </View>
            </View>
          </View>
        </View>
        {/* footer */}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "#FFF",
          borderRadius: 4,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Icon name="home" size={30} color="#000" />
          <Icon name="bar-chart" size={30} color="#000" />
          <Icon name="book" size={30} color="#000" />
          <Icon name="file-text" size={30} color="#000" />
          <Icon name="user" size={30} color="#000" />
        </View>
      </View>
    </ScrollView>
  );
};

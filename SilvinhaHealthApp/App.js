import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons"; 

export default function App() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [imct, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [MessangeImc, setMessangeImc] = useState("Preencha o peso e a altura");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Silvinha Health App</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subTitle}>Calculadora de IMC</Text>

        <View>
          <Text style={styles.label}>Altura:</Text>
          <TextInput
            style={styles.input}
            placeholder='Ex. 1.70'
            keyboardType='numeric'
          />
        </View>

        <View style={{ marginTop: 25}}>
          <Text style={styles.label}>Peso:</Text>
          <TextInput
            style={styles.input}
            placeholder='Ex. 70.5'
            keyboardType='numeric'
          />
        </View>

        <TouchableOpacity style={styles.button}
         onPress={() => alert('Drinho do Dry novamente')}
         >
          <Ionicons name= {"calculator-sharp"} size={24} color="#edf2f4"/>
            <Text style={styles.text}>{textButton}</Text>
        </TouchableOpacity>

        <View style={styles.imcContainer}>
          <Text style={styles.imcText}>Preecha o peso e a altura</Text>
          <Text style={styles.imcResult}></Text>
        </View>

      </View>
      
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf2f4',
  },
  titleBox: {
  alignItems: 'center',
  justifyContent: 'flex-end',
  height: 100,
  backgroundColor: '#ef233c',
  borderBottomStartRadius: 25,
  borderBottomEndRadius: 25,
  },

  titleText: {
    color: '#edf2f4',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    padding: 40,
    width: '100%',
    backgroundColor: 'edf2f4',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 24,
    color: 'ef233c',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  label: {
    color:'#000',
    fontSize: 18,
  },
  input: {
    height:45,
    width:'100%',
    fontSize:18,
    borderColor:'#ef233c',
    borderBottomWidth: 2,
    marginVertical: 5,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef233c',
    borderRadius: 15,
    marginTop: 40,
    marginBottom: 10,
  },
  text:{
    color: '#edf2f4',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5
  },
  imcContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  imcText: {
    fontSize: 18,
    color: '#ef233c',
    fontWeight: 'bold'
  },
  imcResult: {
    fontSize: 48,
    color: '#ef233c',
    fontWeight: 'bold',
  }
});
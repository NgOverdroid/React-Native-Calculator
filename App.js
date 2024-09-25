import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, CustomButton, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

function Calculator(){
  const [slot, setSlot] = useState({
      top: '',
      main:'',
      bottom: '',
      operatorStatus: 0
  });
  function enterNum(title) { 
    let currentNum = slot.main + title;
    setSlot({ ...slot, main: currentNum });
  }

  function enterOperators(title) { 
      if (slot.operatorStatus === 0) {
          let currentOperator = title;
          setSlot({ ...slot, top: slot.main + currentOperator, main: '', operatorStatus: 1 });
      }
  }

  function calculate(){
      let currentCalculation = slot.top + slot.main;
      setSlot({...slot, bottom: eval(currentCalculation)});
  }
  function CE(){
      setSlot({...slot, main: slot.main.slice(0, -1)});
  }
  function AC(){
      setSlot({top: '', main: '', bottom: '', operatorStatus: 0});
  }
  const CustomButton = ({ onPress, title, style }) => (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={styles.CustomButtonText}>{title}</Text>
    </TouchableOpacity>
  );
  return(
      <>
      <View style={styles.container}>
          <View style={styles.results}>
            <View>
              <Text style={styles.output}>{ slot.top }</Text>
            </View>
            <View>
              <Text style={styles.output}>{ slot.main }</Text>
              </View>
            <View>
              <Text>{ slot.bottom }</Text>
              </View>
          </View>
          <View style={styles.buttonContainer}>
              <CustomButton onPress={AC} style={styles.clearButtonStyle} title='AC'></CustomButton>
              <CustomButton onPress={CE} style={styles.clearButtonStyle} title='CE'></CustomButton>
              <CustomButton onPress={() => enterOperators('%') } style={styles.operatorButtonStyle} title='%'></CustomButton>
              <CustomButton onPress={() => enterOperators('/')} style={styles.operatorButtonStyle} title='/'></CustomButton>
                  <CustomButton title='7' onPress={() => enterNum('7')} style={styles.buttonStyle}></CustomButton>
                  <CustomButton title='8' onPress={() => enterNum('8')} style={styles.buttonStyle}></CustomButton>
                  <CustomButton title='9' onPress={() => enterNum('9')} style={styles.buttonStyle}></CustomButton>
              <CustomButton onPress={() => enterOperators('*') } style={styles.operatorButtonStyle} title='*'></CustomButton>
                  <CustomButton title='4' onPress={() => enterNum('4')} style={styles.buttonStyle}></CustomButton>
                  <CustomButton title='5' onPress={() => enterNum('5')} style={styles.buttonStyle}></CustomButton>
                  <CustomButton title='6' onPress={() => enterNum('6')} style={styles.buttonStyle}></CustomButton>

                  <CustomButton onPress={() => enterOperators('-')} style={styles.operatorButtonStyle} title='-'></CustomButton>
                  <CustomButton title='1' onPress={() => enterNum('1')} style={styles.buttonStyle}></CustomButton>
                  <CustomButton title='2' onPress={() => enterNum('2')} style={styles.buttonStyle}></CustomButton>
                  <CustomButton title='3'onPress={() => enterNum('3')} style={styles.buttonStyle}></CustomButton>
              <CustomButton onPress={() => enterOperators('+')} style={styles.operatorButtonStyle} title='+'></CustomButton>
              <CustomButton onPress={() => enterNum('0')} title='0' style={styles.buttonStyle}></CustomButton>
              <CustomButton onPress={() => enterOperators('.')} title='.' style={styles.buttonStyle}></CustomButton>
              <CustomButton onPress={calculate} title='=' style={styles.resultButtonStyle}></CustomButton>
          </View>
      </View>
      </>
  );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: 'grey'
    },
    output_right:{
      textAlign: 'right',
      fontSize: 30
    },
    output_left: {
      textAlign: 'left',
      fontSize: 30
    },
    results: {
      height: '40%'
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    buttonStyle: {
      backgroundColor: 'white',
      margin: 5,
      borderRadius: 5,
      width: '22%', 
      aspectRatio: 1,  
      justifyContent: 'center',
      alignItems: 'center', 
    },
    clearButtonStyle: {
      backgroundColor: 'white',
      color: 'red',
      margin: 5,
      borderRadius: 5,
      width: '22%', 
      aspectRatio: 1,  
      justifyContent: 'center',
      alignItems: 'center', 
    },
    operatorButtonStyle: {
      backgroundColor: 'white',
      margin: 5,
      color: 'yellow',
      borderRadius: 5,
      width: '22%',  
      aspectRatio: 1, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    resultButtonStyle: {
      backgroundColor: 'yellow',
      margin: 5,
      borderRadius: 5,
      width: '45%',  
      aspectRatio: 1, 
      justifyContent: 'center',
      alignItems: 'center',
    }
});
export default Calculator;

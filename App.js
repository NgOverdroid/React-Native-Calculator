import { StatusBar } from 'expo-status-bar';
import { Text, View, Button} from 'react-native';
import { useState } from 'react';

function Calculator(){
  const [slot, setSlot] = useState({
      top: '',
      main:'',
      bottom: '',
      operatorStatus: 0
  });

  function enterNum(e){ // Bấm vào số thì nhập số
      let currentNum = mainSlot + e.innerText;
      setSlot({...slot, main: currentNum});
  }
  function enterOperators(e){ //Bấm vào toán tử, nếu operatorStatus = 0 thì nhập, không thì thôi
      let currentOperator = e.innerText;
      if(slot.operatorStatus === 0)
          setSlot({...slot, top: slot.main + currentOperator, operatorStatus: 1});
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
  return(
      <>
      <View>
          <View cllassName="">{ topSlot }</View>
          <View>{ mainSlot }</View>
          <View>{ bottomSlot }</View>
          <View>
              <Button onClick={AC}>AC</Button>
              <Button onClick={CE}>CE</Button>
              <Button onClick={(e) => enterOperators(e)}>%</Button>
              <Button onClick={(e) => enterOperators(e)}>/</Button>
              <View onClick={(e) => enterNum(e)}>
                  <Button>7</Button>
                  <Button>8</Button>
                  <Button>9</Button>
              </View>
              <View onClick={(e) => enterOperators(e)}>*</View>
              <View onClick={(e) => enterNum(e)}>
                  <View>4</View>
                  <View>5</View>
                  <View>6</View>
              </View>
              <View onClick={(e) => enterOperators(e)}>-</View>
              <View onClick={(e) => enterNum(e)}>
                  <View>1</View>
                  <View>2</View>
                  <View>3</View>
              </View>
              <View onClick={(e) => enterOperators(e)}>+</View>
              <View onClick={(e) => enterNum(e)}>0</View>
              <View onClick={(e) => enterOperators(e)}>.</View>
              <View onClick={calculate}>=</View>
          </View>
      </View>
      </>
  );
}

export default Calculator;

import { useState } from 'react';
import { Button,  FlatList,  StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView, KeyboardProvider } from 'react-native-keyboard-controller';
import Modal from 'react-native-modal';

const data = Array.from(Array(50).keys());

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const onPress = () => {
    // Partial workaround: uncomment me and set Modal coverScreen to false
    // KeyboardController.dismiss();
    setModalVisible(true);
  };

  return (
    <KeyboardProvider>

      <Modal isVisible={modalVisible} coverScreen={true}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
          <Text style={{color: 'white'}}>Modal content here</Text>

          <Button title='Close modal' onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      <KeyboardAwareScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps={"always"}>

        <View style={{flex: 1}} />

        <Button title="Open modal"  onPress={onPress}/>


        <FlatList scrollEnabled={false} data={data} style={{height: 500}} renderItem={({index}) => <Text style={{textAlign: 'center'}}>{index}</Text>}/>

        <TextInput placeholder='text input' style={{backgroundColor: 'white', padding: 10}} />

        <View style={{flex: 1}} />

      </KeyboardAwareScrollView>
    </KeyboardProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
});

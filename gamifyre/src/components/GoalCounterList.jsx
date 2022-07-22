import { StyleSheet, View, FlatList } from "react-native";


  const ItemSeparator = () => <View style={styles.separator} />;

  const GoalCounterList = ({goals}) => {

    return(

<View>
<FlatList
        data={goals}
        ItemSeparatorComponent={ItemSeparator}

        renderItem = {({item}) =>(
     
          <GoalCounter name={item.name}
           steps={item.steps} 
           increments = {item.increments} 
           description = {item.description}
           progress = {item.progress}
           id = {item.id}
           />
        )}
        keyExtractor={(item) => item.name}
        
      />
      </View>
    )

  }


  import GoalCounter from "./GoalCounter";


const styles = StyleSheet.create({
    
    separator: {
        height: 100,
      },
    
  });
  export default GoalCounterList
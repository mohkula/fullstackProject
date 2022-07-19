import { StyleSheet, View, FlatList } from "react-native";


  const ItemSeparator = () => <View style={styles.separator} />;

  const GoalCounterList = ({goals, setProgress}) => {


    
   


    return(

<View>
<FlatList
        data={goals.allGoals}
        ItemSeparatorComponent={ItemSeparator}

        renderItem = {({item}) =>(
      
          <GoalCounter name={item.name}
           steps={item.steps} 
           increments = {item.increments} 
           description = {item.description}
           setProgress= {setProgress}/>
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
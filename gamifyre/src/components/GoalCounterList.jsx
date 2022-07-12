import { StyleSheet, View, FlatList } from "react-native";



import Text from "./Text";
import ProgressBar from "./ProgressBar";
import GoalCounter from "./GoalCounter";


const styles = StyleSheet.create({
    
    separator: {
        height: 100,
      },
    
  });

  const ItemSeparator = () => <View style={styles.separator} />;

  const GoalCounterList = ({goals}) => {


   


    return(

<View>
<FlatList
        data={goals.allGoals}
        ItemSeparatorComponent={ItemSeparator}

        renderItem = {({item}) =>(
      
          <GoalCounter name={item.name}
           steps={item.steps} 
           increments = {item.increments} 
           description = {item.description}/>
        )}
        keyExtractor={(item) => item.name}
        
      />
      </View>
    )

  }

  export default GoalCounterList
import { StyleSheet, View, FlatList } from "react-native";
import { useApolloClient } from "@apollo/client";
import useDeleteGoal from "../hooks/useDeleteGoal";

import useGoals from "../hooks/useGoals";


  const ItemSeparator = () => <View style={styles.separator} />;

  const GoalCounterList = () => {
    const apolloClient = useApolloClient()


    const [deleteGoal, res] = useDeleteGoal();



    const removeGoal = async(id) =>{

      try {
        await deleteGoal(id);
        await apolloClient.resetStore()

     } catch (e) {
        console.log(e);
      }

    }






const { goals } = useGoals()



let goalNodes = goals ? goals.allGoals
: 
[]








    return(

<View>
  <FlatList
        data={goalNodes}
        ItemSeparatorComponent={ItemSeparator}

        renderItem = {({item}) =>(
     
          <GoalCounter name={item.name}
          removeGoal = {removeGoal}
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
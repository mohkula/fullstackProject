import { StyleSheet, View, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { useApolloClient } from "@apollo/client";
import useDeleteGoal from "../hooks/useDeleteGoal";
import Text from "./Text";


import useGoals from "../hooks/useGoals";

  const ItemSeparator = () => <View style={styles.separator} />;

  const GoalCounterList = (props) => {

    const apolloClient = useApolloClient()


    const [deleteGoal, res] = useDeleteGoal();



    const removeGoal = async() =>{

      console.log("delete")
      try {
        await deleteGoal( props.id );
        await apolloClient.resetStore()

     } catch (e) {
        console.log(e);
      }

    }


const [goals, setGoals] = useState({})

//const  [getGoals] =  useGoals();







    return(

<View>
  <FlatList
        data={goals}
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
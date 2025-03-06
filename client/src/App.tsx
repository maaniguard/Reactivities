import { List, ListItem, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
 
const [activities, setactivities] = useState([]);
useEffect(()=> {
  axios.get('https://localhost:5001/api/activities')
  .then(reponse=> setactivities(reponse.data))
  return () => {}
}, [])

  return (
    <>
      <Typography variant="h3">Reactivities</Typography>
      <List>
        {activities.map((activity)=> (
          <ListItem key= {activity.id}>{activity.title}</ListItem>
        ))}
      </List>
    </>
  )
}

export default App

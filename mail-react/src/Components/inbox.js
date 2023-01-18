import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import inbox from '../jsonData/inbox.json'

export default function Inbox() {

    const [data, setData] = React.useState(inbox)

     React.useEffect(()=>{
    console.log(data[0].subject)
  },[])
    

 


  return (
    <div>
        <div className='inboxHead'>
        <p id='focused'>Focused</p>
        <p id='other'>Other</p>
        </div>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
            data.map((data)=>(
                <>
                <ListItem alignItems="flex-start" className='listItem'>
                    <ListItemAvatar>
                        <Avatar alt={data.subject[0]}  src="/static/images/avatar/2.jpg"/>
                    </ListItemAvatar>
                     <ListItemText
                        primary={data.subject}
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                           
                            </Typography>
                                     {data.content}
                            </React.Fragment>
                            
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </>
      
            ))
        }
      
    </List>
    </div>
  );
}
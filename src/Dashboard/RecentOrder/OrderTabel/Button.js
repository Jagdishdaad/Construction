import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';



const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  export default function NativeSelects() {
    const classes = useStyles();
    const [state, setState ] = React.useState({
      age: '',
      name: 'hai',
    });
  
    const handleChange = (event) => {
      const name = event.target.name;
      setState({
        ...state,
        [name]: event.target.value,
      });
    };


    return (
        <div>
       <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">By Newest</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" style={{backgroundColor:'#FFB600'}}/>
          <option value={10} style={{backgroundColor:'#FFB600'}}>Ten</option>
          <option value={20} style={{backgroundColor:'#FFB600'}}>Twenty</option>
          <option value={30} style={{backgroundColor:'#FFB600'}}>Thirty</option> 

        </Select>
      </FormControl>
      </div>
  );
}

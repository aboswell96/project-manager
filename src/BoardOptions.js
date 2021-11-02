import SettingsIcon from '@mui/icons-material/Settings';

const BoardOptions = (props) => {
    return(
        <div>
           <SettingsIcon sx={{'color':'#ebecf0'}}
           onClick={props.OnSettingButtonClicked}></SettingsIcon>
        </div>
    );
}

export default BoardOptions;
import './CreateTicketModal.css';

import { useTheme } from '@mui/material/styles';
import { Box,
    Button,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    Modal,
    OutlinedInput,
    Select,
    Stack,
    TextField,
    Typography } from '@mui/material';
import { useState } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

  const tagOptions = [
    'bug',
    'spike',
    'new feature',
    'escalation',
  ];

  const getStyles = (name, personName, theme) => {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

const CreateTicketModal = (props) => {

    console.log(props.defaultListValue);

    const theme = useTheme();
    const [tags, setTags] = useState([]);
    const [ticketDescription,changeTicketDescription] = useState("");
    const [ticketName, changeTicketName] = useState("");
    const [ticketList, changeTicketList] = useState(props.defaultListValue);

    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setTags(
          // On autofill we get a the stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

    const handleChangeTicketDescription = (event) => {
        changeTicketDescription(event.target.value);
    }

    const handleChangeTicketName = (event) => {
        changeTicketName(event.target.value);
    }

    const handleCreateButtonClicked = () => {

        const ticket = {
            'title': ticketName,
            'tags': tags,
            'description': ticketDescription,
        }

        props.handleCreateTicketSubmitted(ticket);
    }

    const handleChangeTicketLane = (event) => {
        changeTicketList(event.target.value);
    }

    const listOptions = props.lists.map((list,i) => {
        return(
            <MenuItem value={list}>{list}</MenuItem>
        );
    });

    return(
        <div>
            <Modal
            open={props.isOpen}
            onClose={props.handleClose}
            >
            <Box sx={style}>
                <Typography variant="h4" component="div" gutterBottom>
                    Create Ticket
                </Typography>

                <TextField fullWidth label="Enter a Ticket Name" value={ticketName} onChange={handleChangeTicketName} id="fullWidth" />
    
                <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-simple-select-label">List</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={ticketList}
                label="List"
                onChange={handleChangeTicketLane}
                defaultValue={props.defaultListValue}
                >
                {listOptions}
                </Select>
                </FormControl>

                <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
                <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={tags}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                        <Chip key={value} label={value} />
                    ))}
                    </Box>
                )}
                MenuProps={MenuProps}
                >
                {tagOptions.map((tag) => (
                    <MenuItem
                    key={tag}
                    value={tag}
                    style={getStyles(tag, tags, theme)}
                    >
                    {tag}
                    </MenuItem>
                ))}
                </Select>
                </FormControl>

                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    value={ticketDescription}
                    onChange={handleChangeTicketDescription}
                    multiline
                    rows={4}
                    sx={{width:'46ch',mb:'12px'}}
                    />

                <Stack spacing={2} direction="row">
                    <Button variant="contained" onClick={handleCreateButtonClicked}>Create</Button>
                    <Button variant="outlined" onClick={props.handleClose}>Cancel</Button>
                </Stack>

            </Box>
            </Modal>
        </div>
    )
};

export default CreateTicketModal;
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { grey50, grey900 } from 'material-ui/styles/colors';

const styles = {
    hintStyle: {
        color: grey50,
    },
    buttonStyle: {
        backgroundColor: grey50,
        labelColor: grey900,
    },
    inputStyle: {
        color: grey50
    }
};


const SearchField = props => (
    <div>
        <TextField
            name="SearchforPlaces"
            hintText="Search for Places Here"
            hintStyle={styles.hintStyle}
            inputStyle={styles.inputStyle}
            value={props.searchLocation}
            onChange={props.handleSearchLocationChange}
        />
            <RaisedButton
                label="Search"
                buttonStyle={styles.buttonStyle}
                onTouchTap={this.handleTouchTap}
                onClick={(event) => props.handleFormSubmit(event)}
            />
    </div>
);

export default SearchField;
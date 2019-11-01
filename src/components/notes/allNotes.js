import React, {Component} from 'react';
import AllNotesHeader from "./allNotesHeader";
import AllNotesSearchBox from "./allNotesSearchBox";
import AllNotesContainer from "./allNotesContainer";

class AllNotes extends Component {
    render() {
        return (
            <div className={'AllNotes'}>
                <AllNotesHeader/>
                <AllNotesSearchBox/>
                <AllNotesContainer/>
            </div>
        );
    }
}

export default AllNotes;
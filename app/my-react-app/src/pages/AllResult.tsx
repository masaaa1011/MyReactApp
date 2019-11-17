import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { any } from 'prop-types';

interface Props {
    name: string,
}
interface State {}

class AllResult extends React.Component<Props, State> {

    render() {
        return  (
            <form method='post' action='/upload' encType='multipart/form-data'>
                <input type='file' name='fileUploder'/>
                <input type='submit'/>
            </form>
        );
    }
};

export default AllResult;
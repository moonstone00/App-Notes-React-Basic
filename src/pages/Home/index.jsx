import React from "react";
import Header from "../../components/Header";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <>
                <Header/>
            </>
        )
    }
}

export default Home;
import React from "react";
import Header from "../../components/Header";
import { getInitialData } from "../../utils";
import Card from "../../components/Card";

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
                {
                    getInitialData.map((data, index) => (
                        <Card key={index} title={data.title} body={data.body} createdAt={data.createdAt} />
                    ))
                }
            </>
        )
    }
}

export default Home;
import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

class Nav extends React.Component {

    constructor(){
        super()
        this.state = {
            data: 'Loading ..',
            dataNews: 'Loading ..'
        }
       this.routeToBlog = this.routeToBlog.bind(this);
    }

    routeToBlog(){

    }

    componentDidMount(){
        this.getLast5Tweets();
        this.getNewsAPI()
        var minute = 60000;
        setInterval(() => this.getLast5Tweets(), minute);

        setInterval(() => this.getNewsAPI(), minute);
    }

    getLast5Tweets(){
        
        axios({
            url: "tweets?ids=1228393702244134912,1227640996038684673,1199786642791452673,1261326399320715264,1278347468690915330",
            method: 'get',
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`
            }
        }).then(res => {
            let data = res.data.data;
            var elements = ``
            data.map((element) => {
                elements += `<p>${element.text}</p>`
            });
            console.log(elements)
            this.setState({
                data: <div dangerouslySetInnerHTML={{ __html: elements }}/>
            })
        }).catch( err => {
            console.log(err)
        });

    }

    getNewsAPI(){
        
        axios({
            url: "https://newsapi.org/v2/everything?q=tesla&from=2022-03-22&sortBy=publishedAt&apiKey=d617565158634815b3dd4fbcf960f998",
            method: 'get',
        }).then(res => {
            let data = res.data.articles;
            var elements = ``
            data.map((element) => {
                elements += `<p>${element.title}</p>`
            });
            console.log(elements)
            this.setState({
                dataNews: <div dangerouslySetInnerHTML={{ __html: elements }}/>
            })
        }).catch( err => {
            console.log(err)
        });

    }

    render() {
        return(
            <React.Fragment>
            <nav style = {{float: "right", width: "100%"}}>
              <Link to="/">Homepage</Link>
              <div>{this.state.data}</div>
            </nav>
            
            {/* <div>{this.state.dataNews}</div> */}
        </React.Fragment>
        );
    }

}

export default Nav;
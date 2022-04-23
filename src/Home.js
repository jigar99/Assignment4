
import React from "react";
import data from "./blog_post_example.xml";
import Blog from './Blog';


class Home extends React.Component {

  componentDidMount() {
    this.loadXMLDoc();
  }

  constructor() {
    super();
    this.state = { test: 'loading...', elements: [] }
  }

  loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function (e) {
      if (xmlhttp.responseText !== '') {
        let parser = new DOMParser();
        let xml = parser.parseFromString(xmlhttp.responseText, 'text/xml');
        this.myFunction(xml);
      }
    }.bind(this);
    xmlhttp.open("GET", data, true);
    xmlhttp.send();
  }

  myFunction(xml) {
    var x = xml.documentElement.getElementsByTagName('post');
    var list = [];

    for (var i = 0; i < x.length; i++) {
      var map = {
        "title": x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue,
        "author": x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue,
        "date": x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue,
        "summary": x[i].getElementsByTagName("summary")[0].getElementsByTagName("text")[0].childNodes[0].nodeValue,
        "body": x[i].getElementsByTagName("body")[0].childNodes[0].nodeValue,
        "image": x[i].getElementsByTagName("summary")[0].getElementsByTagName("image_path")[0].childNodes[0].nodeValue,
      };
      
      list.push(map);
    }

    this.setState({ elements: list });
  }

  render() {
    return (
      <React.Fragment>
      {/* <div  className="flex-vertical" >{this.state.test}</div>      */}
      <Blog element={this.state.elements}/>
      </React.Fragment>
    );
  }
}

export default Home;
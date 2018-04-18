import React, { PureComponent } from "react";
import styles from "./styles.css";
import axios from 'axios';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imgData: null,
    }
    this.sayHello='hey';
  }

  componentWillMount() {
    this.sayHello = 'hey there';
    console.log('component will mount!');
    axios.get('http://127.0.0.1:8000/static/IMG_3961.jpg', { responseType: 'arraybuffer' })
    .then((response) => {
      let image = btoa(
        new Uint8Array(response.data)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      this.setState({imgData: `data:${response.headers['content-type'].toLowerCase()};base64,${image}`});
    }).catch(error => {
      console.log('error!!!');
    });
  }
  
  handleClick() {
    console.log("button's click handler!");
  }
  
  render() {
    console.log('rendered!');
    let img = this.state.imgData;
    if(!this.state.imgData) {
      img = 'http://127.0.0.1:8000/static/IMG_3961.jpg';
    }
    const { name, bgcolor } = this.props;
    return (
      <div className={styles.special} style={{backgroundColor: `${bgcolor}`}}>
        <h1>
          Hello {name}
        </h1>
        <button onClick={this.handleClick}>Click me!</button>
        <div>{this.sayHello}</div>
        <img src={this.imgData} />
      </div>
    );
  }
}

export default App;

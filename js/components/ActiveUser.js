import React, {Component} from 'react';



class ActiveUser extends Component {

  render() {
    let {name, phone, image, age, phrase} = this.props;
    return (
        <div className="col-lg-5 panel panel-default">
            <div className="panel-body">
                {image ? (<div><img src={"images/"+image+".svg"} className="activeUser-image" /></div>) : ''}
                <div>Name: {name}</div>
                {age ? (<div>Age: {age}</div>) : ''}
                {phone ? (<div>Phone: {phone}</div>) : ''}
                {phrase ? (<div>Phrase: <q>{phrase}</q></div>) : ''}
            </div>
        </div>
        );
  }
}


ActiveUser.propTypes = {
  name: React.PropTypes.string.isRequired,
  phone: React.PropTypes.string,
  image: React.PropTypes.string,
  phrase: React.PropTypes.string,
  age: React.PropTypes.number
}

export default ActiveUser;
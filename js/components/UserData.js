import React, {Component} from 'react';



class UserData extends Component {

  render() {
    let {name, phone, image, age, onSelectUser} = this.props;
    return (
        <div onClick={onSelectUser} className="panel panel-default user-data-panel">
            <div className="panel-body row">
                {image ? (<div className="col-md-2 col-lg-1"><img src={"images/"+image+".svg"} className="user-image" /></div>) : ''}
                <div className="col-md-4 col-lg-4">{name}</div>
                {age ? (<div className="col-md-2 col-lg-3">{age}</div>) : ''}
                {phone ? (<div className="col-md-4 col-lg-4">{phone}</div>) : ''}
            </div>
        </div>
        );
  }
}


UserData.propTypes = {
  name: React.PropTypes.string.isRequired,
  phone: React.PropTypes.string,
  image: React.PropTypes.string,
  age: React.PropTypes.number,
}

export default UserData;
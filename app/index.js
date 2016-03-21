var USER_DATA = {
  name: 'Mike Quinn',
  username: 'mprquinn',
  image: 'https://avatars1.githubusercontent.com/u/1807760?v=3&s=460'
}

var React = require('react');
var ReactDOM = require('react-dom');

// pure fn => fn(d)=v

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.image} style={{height: 100, width: 100}} />
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://github.com/' + this.props.username}>
        {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function () {
    return (
      <h3>{this.props.name}</h3>
    )
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic image={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA} />,
   document.getElementById('app')
);
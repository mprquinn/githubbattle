var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentWillMount: function () {
    console.log('Component Will Mount');
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    // Fetch info from github and update state
    console.log('Component Did Mount');
  },
  componentWillReceiveProps: function () {
    console.log('Component Will Receive Props');
  },
  componentWillUnmount: function () {
    console.log('Component Will Unmount');
  },
  render: function () {
    return (
      <ConfirmBattle
      isLoading={this.state.isLoading}
      playersInfo={this.state.playersInfo} />
    )
  }
});

module.exports = ConfirmBattleContainer;

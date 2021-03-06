var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var Link = require('react-router').Link;
var MainContainer = require('../containers/MainContainer');

function StartOver () {
	return (
		<Link to="/playerOne">
  		<button className="btn btn-lg btn-danger">
  			Start Over
  		</button>
		</Link>
	)
}

function Results (props) {
	if (props.isLoading === true) {
		return (
			<p>Loading...</p>
		)
	}

	if (props.scores[0] === props.scores[1]) {
		return (
			<MainContainer>
				<h1>Tie!</h1>
				<StartOver />
			</MainContainer>
		)
	}

	var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
	var losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <MainContainer>
    	<h1>Results</h1>
    	<div className="col-sm-8 col-sm-offset-2">
    		<UserDetailsWrapper header="Winner">
    			<UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
    		</UserDetailsWrapper>
    		<UserDetailsWrapper header="Loser">
    			<UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
    		</UserDetailsWrapper>
    	</div>
    	<div className="col-sm-12" style={styles.space}>
    		<StartOver />
    	</div>
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
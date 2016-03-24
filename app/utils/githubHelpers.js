var axios = require('axios');

// not needed right now
var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username) {
	return axios.get('https://api.github.com/users/' + username + param)
}

function getRepos (username) {
	// fetch username's repo
}

function  getTotalStars (stars) {
	// calculate total stars for user
}

function getPlayersData (player) {
 // get repos
 // get total stars
 // return obj with data
}

function calculateScore (players) {
	// return an array after doing some algorithms to determine a winner
}

var helpers = {
	getPlayersInfo: function (players) {
		return axios.all(players.map(function (username) {
			return getUserInfo(username);
		})).then(function (info) {
			return info.map(function (user) {
				return user.data;
			});
		}).catch(function (err) {
			console.warn('Error in getPlayersInfo', err);
		});
	},
	battle: function (players) {

	}
}

module.exports = helpers;
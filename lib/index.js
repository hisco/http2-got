'use strict';

const {request} = require('http2-client');
const got = require('got');

module.exports = got.extend({
	request : function makeRequest(options , hanler){
		return request(options , hanler)
	}
});